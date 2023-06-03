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
import {flowContext} from '../../store/context/ReactFlowContext'
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
        "width": 300,
        "height": 711,
        "id": "chatPromptTemplate_0",
        "position": {
            "x": 1904.774716455307,
            "y": 205.15148173674334
        },
        "type": "customOld",
        "data": {
            "label": "Chat Prompt Template",
            "name": "chatPromptTemplate",
            "type": "ChatPromptTemplate",
            "category": "Prompts",
            "description": "Schema to represent a chat prompt",
            "inputs": {
                "systemMessagePrompt": "",
                "humanMessagePrompt": "",
                "promptValues": ""
            },
            "inputAnchors": [],
            "inputParams":[],
            "menuItems": [
                {
                    "label": "System Message",
                    "name": "systemMessagePrompt",
                    "type": "string",
                    "rows": 4,
                    "placeholder": "You are a helpful assistant that translates {input_language} to {output_language}.",
                    "id": "chatPromptTemplate_0-input-systemMessagePrompt-string"
                },
                {
                    "label": "Human Message",
                    "name": "humanMessagePrompt",
                    "type": "string",
                    "rows": 4,
                    "placeholder": "{text}",
                    "id": "chatPromptTemplate_0-input-humanMessagePrompt-string"
                },
                {
                    "label": "Format Prompt Values",
                    "name": "promptValues",
                    "type": "string",
                    "rows": 4,
                    "placeholder": "{\n  \"input_language\": \"English\",\n  \"output_language\": \"French\"\n}",
                    "optional": true,
                    "acceptVariable": true,
                    "list": true,
                    "id": "chatPromptTemplate_0-input-promptValues-string"
                }
            ],
            "outputs": {},
            "outputAnchors": [
                {
                    "id": "chatPromptTemplate_0-output-chatPromptTemplate-ChatPromptTemplate|BaseChatPromptTemplate|BasePromptTemplate",
                    "name": "chatPromptTemplate",
                    "label": "ChatPromptTemplate",
                    "type": "ChatPromptTemplate | BaseChatPromptTemplate | BasePromptTemplate"
                }
            ],
            "id": "chatPromptTemplate_0",
            "selected": true
        },
        "selected": false,
        "positionAbsolute": {
            "x": 1904.774716455307,
            "y": 205.15148173674334
        },
        "dragging": false
    },
    {
        id: 'node_1',
        data: {
            "label": "Welcome Menu",
            "name": "welcomeMenu",
            "type": "Menu",
            "category": "Menu",
            "description": "Welcome Menu",
            inputs: {
                menuHeader: "Welcome to ABC Bank",
                menuFooter: ""
            },
            "inputAnchors": [],
            "outputAnchors": [],
            "inputParams":[],
            "menuItems": [
                {
                    "label": "System Message",
                    "name": "systemMessagePrompt",
                    "type": "string",
                    "placeholder": "You are a helpful assistant that translates {input_language} to {output_language}.",
                    "id": "chatPromptTemplate_0-input-systemMessagePrompt-string"
                },
                {
                    "label": "Human Message",
                    "name": "humanMessagePrompt",
                    "type": "string",
                    "placeholder": "{text}",
                    "id": "chatPromptTemplate_0-input-humanMessagePrompt-string"
                },
            ],
            "id": "node_1",

        },
        position: {x: 100.15148173674334, y: 100.15148173674334},
        positionAbsolute: {x: 100.15148173674334, y: 100.15148173674334},
        type: 'customOld',
        "dragging": false
        // className: styles.customNode,
    },
    {
        id: 'node_2',
        data: {
            id: 'node_2',
            label: 'Terms & Conditions',
            title: "",
            fileName: "",
            inputParams: [
                {
                    "label": "Header",
                    "name": "menuHeader",
                    "type": "string",
                    "id": "node_2-menuHeader"
                },
                {
                    "label": "Footer",
                    "name": "menuFooter",
                    "type": "string",
                    "id": "node_2-menuFooter"
                },
            ],
            inputs: {
                menuHeader: "Terms & Conditions",
                menuFooter: ""
            },
            "inputAnchors": [
                {
                    "label": "Menu Trigger",
                    "name": "menuTrigger",
                    "type": "MenuTrigger",
                    "optional": true,
                    "id": "node_6-menuTrigger-MenuTrigger"
                }
            ],
            "outputAnchors": []

        },
        position: {x: 500, y: 100},
        type: 'customOld',
        // className: styles.customNode,
    },
];

const initialNodes2: Node[] =  [
            {
                "width": 300,
                "height": 456,
                "id": "pdfFile_0",
                "position": {
                    "x": 897.8875980797281,
                    "y": 265.220281754378
                },
                "type": "customOld",
                "data": {
                    "label": "Pdf File",
                    "name": "pdfFile",
                    "type": "Document",
                    "icon": "/data/projects/Flowise/node_modules/flowise-components/dist/nodes/documentloaders/Pdf/pdf.svg",
                    "category": "Document Loaders",
                    "description": "Load data from PDF files",
                    "baseClasses": [
                        "Document"
                    ],
                    "inputs": {
                        "pdfFile": "",
                        "textSplitter": "{{recursiveCharacterTextSplitter_0.data.instance}}",
                        "usage": "perPage"
                    },
                    "filePath": "/data/projects/Flowise/node_modules/flowise-components/dist/nodes/documentloaders/Pdf/Pdf.js",
                    "inputAnchors": [
                        {
                            "label": "Text Splitter",
                            "name": "textSplitter",
                            "type": "TextSplitter",
                            "optional": true,
                            "id": "pdfFile_0-input-textSplitter-TextSplitter"
                        }
                    ],
                    "inputParams": [
                        {
                            "label": "Pdf File",
                            "name": "pdfFile",
                            "type": "file",
                            "fileType": ".pdf",
                            "id": "pdfFile_0-input-pdfFile-file"
                        },
                        {
                            "label": "Usage",
                            "name": "usage",
                            "type": "options",
                            "options": [
                                {
                                    "label": "One document per page",
                                    "name": "perPage"
                                },
                                {
                                    "label": "One document per file",
                                    "name": "perFile"
                                }
                            ],
                            "default": "perPage",
                            "id": "pdfFile_0-input-usage-options"
                        }
                    ],
                    "outputs": {},
                    "outputAnchors": [
                        {
                            "id": "pdfFile_0-output-pdfFile-Document",
                            "name": "pdfFile",
                            "label": "Document",
                            "type": "Document"
                        }
                    ],
                    "id": "pdfFile_0",
                    "selected": false
                },
                "selected": false,
                "positionAbsolute": {
                    "x": 897.8875980797281,
                    "y": 265.220281754378
                },
                "dragging": false
            },
            {
                "width": 300,
                "height": 388,
                "id": "recursiveCharacterTextSplitter_0",
                "position": {
                    "x": 466.9739606126913,
                    "y": 310.5310722100657
                },
                "type": "customNode",
                "data": {
                    "label": "Recursive Character Text Splitter",
                    "name": "recursiveCharacterTextSplitter",
                    "type": "RecursiveCharacterTextSplitter",
                    "icon": "/data/projects/Flowise/node_modules/flowise-components/dist/nodes/textsplitters/RecursiveCharacterTextSplitter/textsplitter.svg",
                    "category": "Text Splitters",
                    "description": "Split documents recursively by different characters - starting with \"\n\n\", then \"\n\", then \" \"",
                    "baseClasses": [
                        "RecursiveCharacterTextSplitter",
                        "TextSplitter"
                    ],
                    "inputs": {
                        "chunkSize": 1000,
                        "chunkOverlap": "100"
                    },
                    "filePath": "/data/projects/Flowise/node_modules/flowise-components/dist/nodes/textsplitters/RecursiveCharacterTextSplitter/RecursiveCharacterTextSplitter.js",
                    "inputAnchors": [],
                    "inputParams": [
                        {
                            "label": "Chunk Size",
                            "name": "chunkSize",
                            "type": "number",
                            "default": 1000,
                            "optional": true,
                            "id": "recursiveCharacterTextSplitter_0-input-chunkSize-number"
                        },
                        {
                            "label": "Chunk Overlap",
                            "name": "chunkOverlap",
                            "type": "number",
                            "optional": true,
                            "id": "recursiveCharacterTextSplitter_0-input-chunkOverlap-number"
                        }
                    ],
                    "outputs": {},
                    "outputAnchors": [
                        {
                            "id": "recursiveCharacterTextSplitter_0-output-recursiveCharacterTextSplitter-RecursiveCharacterTextSplitter|TextSplitter",
                            "name": "recursiveCharacterTextSplitter",
                            "label": "RecursiveCharacterTextSplitter",
                            "type": "RecursiveCharacterTextSplitter | TextSplitter"
                        }
                    ],
                    "id": "recursiveCharacterTextSplitter_0",
                    "selected": false
                },
                "selected": false,
                "positionAbsolute": {
                    "x": 466.9739606126913,
                    "y": 310.5310722100657
                },
                "dragging": false
            },
            {
                "width": 300,
                "height": 378,
                "id": "bufferMemory_0",
                "position": {
                    "x": 1321.7355960438492,
                    "y": 233.84322199827022
                },
                "type": "customNode",
                "data": {
                    "label": "Buffer Memory",
                    "name": "bufferMemory",
                    "type": "BufferMemory",
                    "icon": "/data/projects/Flowise/node_modules/flowise-components/dist/nodes/memory/BufferMemory/memory.svg",
                    "category": "Memory",
                    "description": "Remembers previous conversational back and forths directly",
                    "baseClasses": [
                        "BufferMemory",
                        "BaseChatMemory",
                        "BaseMemory"
                    ],
                    "inputs": {
                        "memoryKey": "chat_history",
                        "inputKey": "input"
                    },
                    "filePath": "/data/projects/Flowise/node_modules/flowise-components/dist/nodes/memory/BufferMemory/BufferMemory.js",
                    "inputAnchors": [],
                    "inputParams": [
                        {
                            "label": "Memory Key",
                            "name": "memoryKey",
                            "type": "string",
                            "default": "chat_history",
                            "id": "bufferMemory_0-input-memoryKey-string"
                        },
                        {
                            "label": "Input Key",
                            "name": "inputKey",
                            "type": "string",
                            "default": "input",
                            "id": "bufferMemory_0-input-inputKey-string"
                        }
                    ],
                    "outputs": {},
                    "outputAnchors": [
                        {
                            "id": "bufferMemory_0-output-bufferMemory-BufferMemory|BaseChatMemory|BaseMemory",
                            "name": "bufferMemory",
                            "label": "BufferMemory",
                            "type": "BufferMemory | BaseChatMemory | BaseMemory"
                        }
                    ],
                    "id": "bufferMemory_0",
                    "selected": false
                },
                "selected": false,
                "positionAbsolute": {
                    "x": 1321.7355960438492,
                    "y": 233.84322199827022
                },
                "dragging": false
            },
            {
                "width": 300,
                "height": 713,
                "id": "pineconeUpsert_0",
                "position": {
                    "x": 1449.2506153593863,
                    "y": 719.093499477315
                },
                "type": "customNode",
                "data": {
                    "label": "Pinecone Upsert Document",
                    "name": "pineconeUpsert",
                    "type": "Pinecone",
                    "icon": "/data/projects/Flowise/node_modules/flowise-components/dist/nodes/vectorstores/Pinecone_Upsert/pinecone.png",
                    "category": "Vector Stores",
                    "description": "Upsert documents to Pinecone",
                    "baseClasses": [
                        "Pinecone",
                        "VectorStoreRetriever",
                        "BaseRetriever"
                    ],
                    "inputs": {
                        "document": [
                            "{{pdfFile_0.data.instance}}"
                        ],
                        "embeddings": "{{openAIEmbeddings_0.data.instance}}",
                        "pineconeApiKey": "pineconeapikey=-xxx-sss",
                        "pineconeEnv": "pin-env-123",
                        "pineconeIndex": "pine-index-999",
                        "pineconeNamespace": "pine-name-space"
                    },
                    "outputs": {
                        "output": "vectorStore"
                    },
                    "filePath": "/data/projects/Flowise/node_modules/flowise-components/dist/nodes/vectorstores/Pinecone_Upsert/Pinecone_Upsert.js",
                    "inputAnchors": [
                        {
                            "label": "Document",
                            "name": "document",
                            "type": "Document",
                            "list": true,
                            "id": "pineconeUpsert_0-input-document-Document"
                        },
                        {
                            "label": "Embeddings",
                            "name": "embeddings",
                            "type": "Embeddings",
                            "id": "pineconeUpsert_0-input-embeddings-Embeddings"
                        }
                    ],
                    "inputParams": [
                        {
                            "label": "Pinecone Api Key",
                            "name": "pineconeApiKey",
                            "type": "password",
                            "id": "pineconeUpsert_0-input-pineconeApiKey-password"
                        },
                        {
                            "label": "Pinecone Environment",
                            "name": "pineconeEnv",
                            "type": "string",
                            "id": "pineconeUpsert_0-input-pineconeEnv-string"
                        },
                        {
                            "label": "Pinecone Index",
                            "name": "pineconeIndex",
                            "type": "string",
                            "id": "pineconeUpsert_0-input-pineconeIndex-string"
                        },
                        {
                            "label": "Pinecone Namespace",
                            "name": "pineconeNamespace",
                            "type": "string",
                            "placeholder": "my-first-namespace",
                            "optional": true,
                            "id": "pineconeUpsert_0-input-pineconeNamespace-string"
                        }
                    ],
                    "outputAnchors": [
                        {
                            "name": "output",
                            "label": "Output",
                            "type": "options",
                            "options": [
                                {
                                    "id": "pineconeUpsert_0-output-retriever-Pinecone|VectorStoreRetriever|BaseRetriever",
                                    "name": "retriever",
                                    "label": "Pinecone Retriever",
                                    "type": "Pinecone | VectorStoreRetriever | BaseRetriever"
                                },
                                {
                                    "id": "pineconeUpsert_0-output-vectorStore-Pinecone|VectorStore",
                                    "name": "vectorStore",
                                    "label": "Pinecone Vector Store",
                                    "type": "Pinecone | VectorStore"
                                }
                            ],
                            "default": "retriever"
                        }
                    ],
                    "id": "pineconeUpsert_0",
                    "selected": false
                },
                "selected": false,
                "positionAbsolute": {
                    "x": 1449.2506153593863,
                    "y": 719.093499477315
                },
                "dragging": false
            },
            {
                "width": 300,
                "height": 331,
                "id": "openAIEmbeddings_0",
                "position": {
                    "x": 821.6171191903827,
                    "y": 885.0761417172777
                },
                "type": "customNode",
                "data": {
                    "label": "OpenAI Embeddings",
                    "name": "openAIEmbeddings",
                    "type": "OpenAIEmbeddings",
                    "icon": "/data/projects/Flowise/node_modules/flowise-components/dist/nodes/embeddings/OpenAIEmbedding/openai.png",
                    "category": "Embeddings",
                    "description": "OpenAI API to generate embeddings for a given text",
                    "baseClasses": [
                        "OpenAIEmbeddings",
                        "Embeddings"
                    ],
                    "inputs": {
                        "openAIApiKey": "xxx-api-key",
                        "stripNewLines": true,
                        "batchSize": "50",
                        "timeout": "2500"
                    },
                    "filePath": "/data/projects/Flowise/node_modules/flowise-components/dist/nodes/embeddings/OpenAIEmbedding/OpenAIEmbedding.js",
                    "inputAnchors": [],
                    "inputParams": [
                        {
                            "label": "OpenAI Api Key",
                            "name": "openAIApiKey",
                            "type": "password",
                            "id": "openAIEmbeddings_0-input-openAIApiKey-password"
                        },
                        {
                            "label": "Strip New Lines",
                            "name": "stripNewLines",
                            "type": "boolean",
                            "optional": true,
                            "additionalParams": true,
                            "id": "openAIEmbeddings_0-input-stripNewLines-boolean"
                        },
                        {
                            "label": "Batch Size",
                            "name": "batchSize",
                            "type": "number",
                            "optional": true,
                            "additionalParams": true,
                            "id": "openAIEmbeddings_0-input-batchSize-number"
                        },
                        {
                            "label": "Timeout",
                            "name": "timeout",
                            "type": "number",
                            "optional": true,
                            "additionalParams": true,
                            "id": "openAIEmbeddings_0-input-timeout-number"
                        }
                    ],
                    "outputs": {},
                    "outputAnchors": [
                        {
                            "id": "openAIEmbeddings_0-output-openAIEmbeddings-OpenAIEmbeddings|Embeddings",
                            "name": "openAIEmbeddings",
                            "label": "OpenAIEmbeddings",
                            "type": "OpenAIEmbeddings | Embeddings"
                        }
                    ],
                    "id": "openAIEmbeddings_0",
                    "selected": false
                },
                "selected": false,
                "positionAbsolute": {
                    "x": 821.6171191903827,
                    "y": 885.0761417172777
                },
                "dragging": false
            },
            {
                "width": 300,
                "height": 711,
                "id": "chatPromptTemplate_0",
                "position": {
                    "x": 1904.774716455307,
                    "y": 205.15148173674334
                },
                "type": "customOld",
                "data": {
                    "label": "Chat Prompt Template",
                    "name": "chatPromptTemplate",
                    "type": "ChatPromptTemplate",
                    "icon": "/data/projects/Flowise/node_modules/flowise-components/dist/nodes/prompts/ChatPromptTemplate/prompt.svg",
                    "category": "Prompts",
                    "description": "Schema to represent a chat prompt",
                    "baseClasses": [
                        "ChatPromptTemplate",
                        "BaseChatPromptTemplate",
                        "BasePromptTemplate"
                    ],
                    "inputs": {
                        "systemMessagePrompt": "",
                        "humanMessagePrompt": "",
                        "promptValues": ""
                    },
                    "filePath": "/data/projects/Flowise/node_modules/flowise-components/dist/nodes/prompts/ChatPromptTemplate/ChatPromptTemplate.js",
                    "inputAnchors": [],
                    "inputParams":[],
                    "menuItems": [
                        {
                            "label": "System Message",
                            "name": "systemMessagePrompt",
                            "type": "string",
                            "rows": 4,
                            "placeholder": "You are a helpful assistant that translates {input_language} to {output_language}.",
                            "id": "chatPromptTemplate_0-input-systemMessagePrompt-string"
                        },
                        {
                            "label": "Human Message",
                            "name": "humanMessagePrompt",
                            "type": "string",
                            "rows": 4,
                            "placeholder": "{text}",
                            "id": "chatPromptTemplate_0-input-humanMessagePrompt-string"
                        },
                        {
                            "label": "Format Prompt Values",
                            "name": "promptValues",
                            "type": "string",
                            "rows": 4,
                            "placeholder": "{\n  \"input_language\": \"English\",\n  \"output_language\": \"French\"\n}",
                            "optional": true,
                            "acceptVariable": true,
                            "list": true,
                            "id": "chatPromptTemplate_0-input-promptValues-string"
                        }
                    ],
                    "outputs": {},
                    "outputAnchors": [
                        {
                            "id": "chatPromptTemplate_0-output-chatPromptTemplate-ChatPromptTemplate|BaseChatPromptTemplate|BasePromptTemplate",
                            "name": "chatPromptTemplate",
                            "label": "ChatPromptTemplate",
                            "type": "ChatPromptTemplate | BaseChatPromptTemplate | BasePromptTemplate"
                        }
                    ],
                    "id": "chatPromptTemplate_0",
                    "selected": true
                },
                "selected": false,
                "positionAbsolute": {
                    "x": 1904.774716455307,
                    "y": 205.15148173674334
                },
                "dragging": false
            },
            {
                "width": 300,
                "height": 526,
                "id": "chatOpenAI_0",
                "position": {
                    "x": 2403.576816029479,
                    "y": 360.80213131744233
                },
                "type": "customNode",
                "data": {
                    "label": "ChatOpenAI",
                    "name": "chatOpenAI",
                    "type": "ChatOpenAI",
                    "icon": "/data/projects/Flowise/node_modules/flowise-components/dist/nodes/chatmodels/ChatOpenAI/openai.png",
                    "category": "Chat Models",
                    "description": "Wrapper around OpenAI large language models that use the Chat endpoint",
                    "baseClasses": [
                        "ChatOpenAI",
                        "BaseChatModel",
                        "BaseLanguageModel",
                        "BaseLangChain"
                    ],
                    "inputs": {
                        "openAIApiKey": "",
                        "modelName": "gpt-3.5-turbo",
                        "temperature": 0.9,
                        "maxTokens": "",
                        "topP": "",
                        "frequencyPenalty": "",
                        "presencePenalty": "",
                        "timeout": ""
                    },
                    "filePath": "/data/projects/Flowise/node_modules/flowise-components/dist/nodes/chatmodels/ChatOpenAI/ChatOpenAI.js",
                    "inputAnchors": [],
                    "inputParams": [
                        {
                            "label": "OpenAI Api Key",
                            "name": "openAIApiKey",
                            "type": "password",
                            "id": "chatOpenAI_0-input-openAIApiKey-password"
                        },
                        {
                            "label": "Model Name",
                            "name": "modelName",
                            "type": "options",
                            "options": [
                                {
                                    "label": "gpt-4",
                                    "name": "gpt-4"
                                },
                                {
                                    "label": "gpt-4-0314",
                                    "name": "gpt-4-0314"
                                },
                                {
                                    "label": "gpt-4-32k-0314",
                                    "name": "gpt-4-32k-0314"
                                },
                                {
                                    "label": "gpt-3.5-turbo",
                                    "name": "gpt-3.5-turbo"
                                },
                                {
                                    "label": "gpt-3.5-turbo-0301",
                                    "name": "gpt-3.5-turbo-0301"
                                }
                            ],
                            "default": "gpt-3.5-turbo",
                            "optional": true,
                            "id": "chatOpenAI_0-input-modelName-options"
                        },
                        {
                            "label": "Temperature",
                            "name": "temperature",
                            "type": "number",
                            "default": 0.9,
                            "optional": true,
                            "id": "chatOpenAI_0-input-temperature-number"
                        },
                        {
                            "label": "Max Tokens",
                            "name": "maxTokens",
                            "type": "number",
                            "optional": true,
                            "additionalParams": true,
                            "id": "chatOpenAI_0-input-maxTokens-number"
                        },
                        {
                            "label": "Top Probability",
                            "name": "topP",
                            "type": "number",
                            "optional": true,
                            "additionalParams": true,
                            "id": "chatOpenAI_0-input-topP-number"
                        },
                        {
                            "label": "Frequency Penalty",
                            "name": "frequencyPenalty",
                            "type": "number",
                            "optional": true,
                            "additionalParams": true,
                            "id": "chatOpenAI_0-input-frequencyPenalty-number"
                        },
                        {
                            "label": "Presence Penalty",
                            "name": "presencePenalty",
                            "type": "number",
                            "optional": true,
                            "additionalParams": true,
                            "id": "chatOpenAI_0-input-presencePenalty-number"
                        },
                        {
                            "label": "Timeout",
                            "name": "timeout",
                            "type": "number",
                            "optional": true,
                            "additionalParams": true,
                            "id": "chatOpenAI_0-input-timeout-number"
                        }
                    ],
                    "outputs": {},
                    "outputAnchors": [
                        {
                            "id": "chatOpenAI_0-output-chatOpenAI-ChatOpenAI|BaseChatModel|BaseLanguageModel|BaseLangChain",
                            "name": "chatOpenAI",
                            "label": "ChatOpenAI",
                            "type": "ChatOpenAI | BaseChatModel | BaseLanguageModel | BaseLangChain"
                        }
                    ],
                    "id": "chatOpenAI_0",
                    "selected": false
                },
                "selected": false,
                "positionAbsolute": {
                    "x": 2403.576816029479,
                    "y": 360.80213131744233
                },
                "dragging": false
            },
            {
                "width": 300,
                "height": 279,
                "id": "writeFile_0",
                "position": {
                    "x": 2151.839041915881,
                    "y": 958.3401464529893
                },
                "type": "customNode",
                "data": {
                    "label": "Write File",
                    "name": "writeFile",
                    "type": "WriteFile",
                    "icon": "/data/projects/Flowise/node_modules/flowise-components/dist/nodes/tools/WriteFile/writefile.svg",
                    "category": "Tools",
                    "description": "Write file to disk",
                    "baseClasses": [
                        "WriteFile",
                        "Tool",
                        "StructuredTool",
                        "BaseLangChain"
                    ],
                    "inputs": {
                        "basePath": ""
                    },
                    "filePath": "/data/projects/Flowise/node_modules/flowise-components/dist/nodes/tools/WriteFile/WriteFile.js",
                    "inputAnchors": [],
                    "inputParams": [
                        {
                            "label": "Base Path",
                            "name": "basePath",
                            "placeholder": "C:\\Users\\User\\Desktop",
                            "type": "string",
                            "optional": true,
                            "id": "writeFile_0-input-basePath-string"
                        }
                    ],
                    "outputs": {},
                    "outputAnchors": [
                        {
                            "id": "writeFile_0-output-writeFile-WriteFile|Tool|StructuredTool|BaseLangChain",
                            "name": "writeFile",
                            "label": "WriteFile",
                            "type": "WriteFile | Tool | StructuredTool | BaseLangChain"
                        }
                    ],
                    "id": "writeFile_0",
                    "selected": false
                },
                "selected": true,
                "positionAbsolute": {
                    "x": 2151.839041915881,
                    "y": 958.3401464529893
                },
                "dragging": false
            }
        ]

const initialEdges: Edge[] = [
    // { id: 'e1-2', source: '1', target: '2' },
    // { id: 'e1-3', source: '1', target: '3' },
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
                <Background color='#aab' gap={16}/>
            </ReactFlow>
        </div>
    );
}

export default Flow;
