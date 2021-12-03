import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import Layout from "../../components/Layout"
import { useEffect } from "react"
import Fireflies from '../../components/fireflies.js/src/fireflies.js'


const Info = styled.div`
padding: 0 10px;
padding-top: 90px;
min-height: calc(100vh - 90px - 195px);
`
export default () => {

    useEffect(() => {
        const color = '#e4a363';
        Fireflies.initialize(Math.floor((window.innerHeight + window.innerWidth) / 100),
            [0, 0.00001 + Math.floor((window.innerHeight + window.innerWidth) / 100)],
            [{ fill: '#ffffff', glow: color }],
            true,
            true,
            true,
            false)

    }, []);

    return (
        <ThemeProvider theme={{ withBgi: true }}>
            <Layout>
                <Info className="info">

                </Info>
            </Layout>
        </ThemeProvider>)

}