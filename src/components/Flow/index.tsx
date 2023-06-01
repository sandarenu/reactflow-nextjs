import {useCallback, useContext} from 'react';
import ReactFlow, {
  Node,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  ConnectionLineType, Controls, Background,
} from 'reactflow';
import CustomNode from './CustomNode';

import styles from './Flow.module.css';
import { flowContext } from '../../store/context/ReactFlowContext'
import CanvasNode from "./CanvasNode";
import {getEdgeLabelName, rearrangeToolsOrdering} from "../../utils/genericHelper";

const initialNodes: Node[] = [
  // {
  //   id: '4',
  //   data: { label: 'Node 4' },
  //   position: { x: 400, y: 200 },
  //   type: 'custom',
  //   className: styles.customNode,
  // },
    {
        id: '5',
        data: {
            label: 'Node 5',
            title: "",
            fileName: "",
            inputParams: [
                {
                    "label": "Csv File",
                    "name": "csvFile",
                    "type": "file",
                    "fileType": ".csv",
                    "id": "csvFile_0-input-csvFile-file"
                },
            ],
            inputs:{
                csvFile: "Test"
            }

        },
        position: { x: 400, y: 200 },
        type: 'custom',
        className: styles.customNode,
    },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
];

// const nodeTypes = {
//   custom: CustomNode,
// };

const nodeTypes = {
    custom: CanvasNode,
    customOld: CustomNode,
}

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
            data: { label: getEdgeLabelName(params.sourceHandle) }
        }

        const targetNodeId = params.targetHandle.split('-')[0]
        const sourceNodeId = params.sourceHandle.split('-')[0]
        const targetInput = params.targetHandle.split('-')[2]

        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === targetNodeId) {
                    // setTimeout(() => setDirty(), 0)
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

  const { reactFlowInstance, setReactFlowInstance } = useContext(flowContext)

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

  return (
    <div className={styles.flow}>
      <div>
        <button onClick={() => handleSaveFlow('Test_flow')}>Save</button>
      </div>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
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
        <Background color='#aab' gap={16} />
      </ReactFlow>
    </div>
  );
}

export default Flow;
