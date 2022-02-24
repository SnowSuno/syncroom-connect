import '../constants/styles/globals.scss'
import type {AppProps} from 'next/app'

import Layout from "../components/layouts/Layout";

import {MotionConfig} from "framer-motion";

function MyApp({Component, pageProps}: AppProps) {

    return (
        <MotionConfig transition={{duration: 2}}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </MotionConfig>
    );
}

export default MyApp;
