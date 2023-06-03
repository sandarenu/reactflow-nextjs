import {memo, FC, CSSProperties, useContext, useRef, useEffect, useState} from 'react';
import {Handle, Position, NodeProps, NodeResizer, useUpdateNodeInternals} from 'reactflow';
import {flowContext} from "../../store/context/ReactFlowContext";
import {Input} from "./Input";
import {Box, Button, Divider, IconButton, Typography} from "@mui/material";
import {styled, useTheme} from "@mui/material/styles";
import MainCard from "./MainCard";
import {IconCopy, IconTrash} from "@tabler/icons-react";
import NodeInputHandler from './NodeInputHandler';
import NodeOutputHandler from './NodeOutputHandler';

const sourceHandleStyleA: CSSProperties = {left: 50};
const sourceHandleStyleB: CSSProperties = {
    right: 50,
    left: 'auto',
};

const CardWrapper = styled(MainCard)(({ theme }) => ({
    background: theme.palette.card.main,
    color: theme.darkTextPrimary,
    border: 'solid 1px',
    borderColor: theme.palette.primary[200] + 75,
    width: '300px',
    height: 'auto',
    padding: '10px',
    boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)',
    '&:hover': {
        borderColor: theme.palette.primary.main
    }
}))

const CustomNode: FC<NodeProps> = ({data, xPos, yPos, id}) => {
    const ref = useRef(null)
    const {reactFlowInstance} = useContext(flowContext)
    const updateNodeInternals = useUpdateNodeInternals()
    const [position, setPosition] = useState(0)
    const theme = useTheme()
    console.log("Custom Node", data, xPos, yPos, id)

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
            <CardWrapper
                content={false}
                sx={{
                    padding: 0,
                    borderColor: data.selected ? theme.palette.primary.main : theme.palette.text.secondary
                }}
                border={false}
            >
                <Box>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box style={{ width: 50, marginRight: 10, padding: 5 }}>
                            <div
                                style={{
                                    ...theme.typography.commonAvatar,
                                    ...theme.typography.largeAvatar,
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    cursor: 'grab'
                                }}
                            >
                                <img
                                    style={{ width: '100%', height: '100%', padding: 5, objectFit: 'contain' }}
                                    src={`/node-icon/openai.png`}
                                    alt='Notification'
                                />
                            </div>
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: '1rem',
                                    fontWeight: 500
                                }}
                            >
                                {data.label}
                            </Typography>
                        </Box>
                        <div style={{ flexGrow: 1 }}></div>
                        <IconButton
                            title='Duplicate'
                            onClick={() => {
                                // duplicateNode(data.id)
                            }}
                            sx={{ height: 35, width: 35, '&:hover': { color: theme?.palette.primary.main } }}
                            color={theme?.customization?.isDarkMode ? theme.colors?.paper : 'inherit'}
                        >
                            <IconCopy />
                        </IconButton>
                        <IconButton
                            title='Delete'
                            onClick={() => {
                                // deleteNode(data.id)
                            }}
                            sx={{ height: 35, width: 35, mr: 1, '&:hover': { color: 'red' } }}
                            color={theme?.customization?.isDarkMode ? theme.colors?.paper : 'inherit'}
                        >
                            <IconTrash />
                        </IconButton>
                    </div>
                    {(data.inputAnchors.length > 0 || data.inputParams.length > 0) && (
                        <>
                            <Divider />
                            <Box sx={{ background: theme.palette.asyncSelect.main, p: 1 }}>
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        textAlign: 'center'
                                    }}
                                >
                                    Inputs
                                </Typography>
                            </Box>
                            <Divider />
                        </>
                    )}
                    {data.inputAnchors.map((inputAnchor, index) => (
                        <NodeInputHandler key={index} inputAnchor={inputAnchor} data={data} />
                    ))}
                    {data.inputParams.map((inputParam, index) => (
                        <NodeInputHandler key={index} inputParam={inputParam} data={data} />
                    ))}
                    {data.inputParams.find((param) => param.additionalParams) && (
                        <div style={{ textAlign: 'center' }}>
                            <Button sx={{ borderRadius: 25, width: '90%', mb: 2 }} variant='outlined' onClick={{/*onDialogClicked*/}}>
                                Additional Parameters
                            </Button>
                        </div>
                    )}
                    <Divider />
                    <Box sx={{ background: theme.palette.asyncSelect.main, p: 1 }}>
                        <Typography
                            sx={{
                                fontWeight: 500,
                                textAlign: 'center'
                            }}
                        >
                            Menu Items
                        </Typography>
                    </Box>
                    {data.menuItems && data.menuItems.map((menuItem, index) => (
                        <NodeInputHandler key={index} menuItem={menuItem} data={data} />
                    ))}
                    <Divider />
                    <Box sx={{ background: theme.palette.asyncSelect.main, p: 1 }}>
                        <Typography
                            sx={{
                                fontWeight: 500,
                                textAlign: 'center'
                            }}
                        >
                            Output
                        </Typography>
                    </Box>
                    <Divider />

                    {data.outputAnchors.map((outputAnchor, index) => (
                        <NodeOutputHandler key={index} outputAnchor={outputAnchor} data={data} />
                    ))}
                </Box>
            </CardWrapper>
            {/*<AdditionalParamsDialog*/}
            {/*    show={showDialog}*/}
            {/*    dialogProps={dialogProps}*/}
            {/*    onCancel={() => setShowDialog(false)}*/}
            {/*></AdditionalParamsDialog>*/}
        </>
    )
    // return (
    //     <>
    //         <NodeResizer/>
    //         <Handle  id={`${id}-target-textSplitter-TextSplitter`} type="target" position={Position.Top}/>
    //         <div>
    //             <div>
    //                 Label: <strong>{data.label}</strong>
    //             </div>
    //             {/*<div>*/}
    //             {/*    Position:{' '}*/}
    //             {/*    <strong>*/}
    //             {/*        {xPos.toFixed(2)},{yPos.toFixed(2)}*/}
    //             {/*    </strong>*/}
    //             {/*</div>*/}
    //             {(data.inputAnchors.length > 0 || data.inputParams.length > 0) && (
    //                 <>
    //                     <Divider />
    //                     <Box sx={{  background: theme.palette.asyncSelect.main, p: 1  }}>
    //                         <Typography
    //                             sx={{
    //                                 fontWeight: 500,
    //                                 textAlign: 'center'
    //                             }}
    //                         >
    //                             Inputs
    //                         </Typography>
    //                     </Box>
    //                     <Divider />
    //                 </>
    //             )}
    //             <div>
    //                 {
    //                     data.inputParams.map((inputParam) => {
    //                         return (
    //                             <div>
    //                                 <label>{inputParam.label}</label>
    //
    //                                 <Input
    //                                     disabled={false}
    //                                     inputParam={inputParam}
    //                                     onChange={(newValue) => (data.inputs[inputParam.name] = newValue)}
    //                                     value={data.inputs[inputParam.name] ?? inputParam.default ?? ''}
    //                                     // showDialog={showExpandDialog}
    //                                     // dialogProps={expandDialogProps}
    //                                     // onDialogCancel={() => setShowExpandDialog(false)}
    //                                     // onDialogConfirm={(newValue, inputParamName) => onExpandDialogSave(newValue, inputParamName)}
    //                                 />
    //                             </div>
    //                         )
    //                     })
    //                 }
    //             </div>
    //         </div>
    //
    //         <Handle
    //             type="source"
    //             position={Position.Bottom}
    //             id={`${id}-source-textSplitter-TextSplitter`}
    //             style={sourceHandleStyleA}
    //         />
    //         {/*<Handle*/}
    //         {/*    type="source"*/}
    //         {/*    position={Position.Bottom}*/}
    //         {/*    id="b"*/}
    //         {/*    style={sourceHandleStyleB}*/}
    //         {/*/>*/}
    //     </>
    // );
};

export default memo(CustomNode);
