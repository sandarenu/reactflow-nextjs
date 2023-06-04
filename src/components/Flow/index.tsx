import {useContext} from 'react';
import ReactFlow, {
    addEdge,
    Background,
    ConnectionLineType,
    Controls,
    Edge,
    Node,
    useEdgesState,
    useNodesState,
} from 'reactflow';
import CustomNode from './CustomNode';

import styles from './Flow.module.css';
import {flowContext} from '../../store/context/ReactFlowContext'
import {getEdgeLabelName, rearrangeToolsOrdering} from "../../utils/genericHelper";
import {createInitialEdges, createInitialNodes, createNewMenu} from "./menuUtils";
import {v4 as uuidv4} from 'uuid';
import ButtonEdge from "./ButtonEdge";


const initialNodes: Node[] = createInitialNodes();

const initialEdges: Edge[] = createInitialEdges();

// const nodeTypes = {
//   custom: CustomNode,
// };

const nodeTypes = {
    MenuNode: CustomNode,
}
const edgeTypes = { buttonedge: ButtonEdge }

const defaultEdgeOptions = {
    animated: true,
    type: 'smoothstep',
};

let chatflow = {
    id: "Test_flow"
}

function Flow() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    // const onConnect = useCallback(
    //   (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    //   [setEdges]
    // );

    const onConnect = (params) => {
        const newEdge = {
            ...params,
            type: 'buttonedge',
            id: `${params.source}-${params.sourceHandle}-${params.target}-${params.targetHandle}`,
            data: {label: getEdgeLabelName(params.sourceHandle)}
        }

        console.log("params", params)
        console.log("targetHandle", params.targetHandle)
        console.log("sourceHandle", params.sourceHandle)

        const targetNodeId = params.targetHandle.split('-')[0]
        const sourceNodeId = params.sourceHandle.split('-')[0]
        const targetInput = params.targetHandle.split('-')[2]

        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === targetNodeId) {
                    // setTimeout(() => setDirty(), 0)
                    console.log("targetInput", targetInput)
                    console.log("node", node)
                    let value
                    const inputAnchor = node.data.inputAnchors.find((ancr) => ancr.name === targetInput)
                    const inputParam = node.data.inputParams.find((param) => param.name === targetInput)

                    if (inputAnchor && inputAnchor.list) {
                        const newValues = node.data.inputs[targetInput] || []
                        if (targetInput === 'tools') {
                            rearrangeToolsOrdering(newValues, sourceNodeId)
                        } else {
                            newValues.push(`{{${sourceNodeId}.data.instance}}`)
                        }
                        value = newValues
                    } else if (inputParam && inputParam.acceptVariable) {
                        value = node.data.inputs[targetInput] || ''
                    } else {
                        value = `{{${sourceNodeId}.data.instance}}`
                    }
                    node.data = {
                        ...node.data,
                        inputs: {
                            ...node.data.inputs,
                            [targetInput]: value
                        }
                    }
                }
                return node
            })
        )

        setEdges((eds) => addEdge(newEdge, eds))
    }

    const {reactFlowInstance, setReactFlowInstance} = useContext(flowContext)

    const handleSaveFlow = (chatflowName) => {
        console.log('handleSaveFlow', chatflowName)
        console.log('reactFlowInstance', reactFlowInstance)
        if (reactFlowInstance) {
            setNodes((nds) =>
                nds.map((node) => {
                    node.data = {
                        ...node.data,
                        selected: false
                    }
                    return node
                })
            )

            const rfInstanceObject = reactFlowInstance.toObject()
            const flowData = JSON.stringify(rfInstanceObject)

            console.log('flowData', flowData)

            if (!chatflow.id) {
                const newChatflowBody = {
                    name: chatflowName,
                    deployed: false,
                    flowData
                }

                console.log("newChatflowBody", newChatflowBody)
                // createNewChatflowApi.request(newChatflowBody)
            } else {
                const updateBody = {
                    name: chatflowName,
                    flowData
                }
                console.log("updateBody", updateBody)
                // updateChatflowApi.request(chatflow.id, updateBody)
            }
        }
    }

    const addNewMenu = () => {
        const newMenu = createNewMenu(uuidv4())
        setNodes((nds) => [...nds, newMenu])
    }

    return (
        <div className={styles.flow}>
            <div>
                <button onClick={() => handleSaveFlow('Test_flow')}>Save</button>
            </div>
            <div>
                <button onClick={() => addNewMenu()}>New Menu</button>
            </div>
            <ReactFlow
                nodes={nodes}
                onNodesChange={onNodesChange}
                edges={edges}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                defaultEdgeOptions={defaultEdgeOptions}
                connectionLineType={ConnectionLineType.SmoothStep}
                onInit={setReactFlowInstance}
                fitView
            >
                <Controls
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <Background color='#aab' gap={16}/>
            </ReactFlow>
        </div>
    );
}

export default Flow;
