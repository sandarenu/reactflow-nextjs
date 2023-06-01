import type {NextPage} from 'next';
import Head from 'next/head';

import Flow from 'components/Flow';

import styles from '../styles/Home.module.css';
import {ReactFlowContext} from "../store/context/ReactFlowContext";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header className={styles.header}>React Flow - Next.js Example</header>
            <ReactFlowContext>
                <Flow/>
            </ReactFlowContext>
        </div>
    );
};

export default Home;
