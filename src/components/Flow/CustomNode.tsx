import {memo, FC, CSSProperties, useContext, useRef, useEffect, useState} from 'react';
import {Handle, Position, NodeProps, NodeResizer, useUpdateNodeInternals} from 'reactflow';
import {flowContext} from "../../store/context/ReactFlowContext";
import {Input} from "./Input";

const sourceHandleStyleA: CSSProperties = {left: 50};
const sourceHandleStyleB: CSSProperties = {
    right: 50,
    left: 'auto',
};

const CustomNode: FC<NodeProps> = ({data, xPos, yPos}) => {
    const ref = useRef(null)
    const {reactFlowInstance} = useContext(flowContext)
    const updateNodeInternals = useUpdateNodeInternals()
    const [position, setPosition] = useState(0)

    console.log("Custom Node", data, xPos, yPos)

    useEffect(() => {
        if (ref.current && ref.current.offsetTop && ref.current.clientHeight) {
            setPosition(ref.current.offsetTop + ref.current.clientHeight / 2)
            updateNodeInternals(data.id)
        }
    }, [data.id, ref, updateNodeInternals])

    useEffect(() => {
        updateNodeInternals(data.id)
    }, [data.id, position, updateNodeInternals])
    return (
        <>
            <NodeResizer/>
            <Handle type="target" position={Position.Top}/>
            <div>
                <div>
                    Label: <strong>{data.label}</strong>
                </div>
                <div>
                    Position:{' '}
                    <strong>
                        {xPos.toFixed(2)},{yPos.toFixed(2)}
                    </strong>
                </div>
                <div>
                    {
                        data.inputParams.map((inputParam) => {
                            return (
                                <div>
                                    <label>{inputParam.label}</label>

                                    <Input
                                        disabled={false}
                                        inputParam={inputParam}
                                        onChange={(newValue) => (data.inputs[inputParam.name] = newValue)}
                                        value={data.inputs[inputParam.name] ?? inputParam.default ?? ''}
                                        // showDialog={showExpandDialog}
                                        // dialogProps={expandDialogProps}
                                        // onDialogCancel={() => setShowExpandDialog(false)}
                                        // onDialogConfirm={(newValue, inputParamName) => onExpandDialogSave(newValue, inputParamName)}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <Handle
                type="source"
                position={Position.Bottom}
                id="a"
                style={sourceHandleStyleA}
            />
            <Handle
                type="source"
                position={Position.Bottom}
                id="b"
                style={sourceHandleStyleB}
            />
        </>
    );
};

export default memo(CustomNode);
