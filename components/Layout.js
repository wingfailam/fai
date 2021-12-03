import Head from 'next/head'
import Nav from "./Nav"
import Footer from "./Footer"
import styled from "@emotion/styled"
import { jsx, ThemeProvider } from '@emotion/react'

const Layout = styled.div`
position: relative;
padding-bottom: 195px;
@media (max-width:768px){
    padding-bottom: 373px;
}
background: #111;
${props => {
        if (props.theme.withBgi) {
            return `
                background:unset;
                background-image: url(/images/background-dark.jpg);
                background-color: #fff;
                background-attachment: fixed;
                background-size: cover;
                background-position: center;
            `
        }
    }}
`
export default function ({ children }) {

    return (

        <Layout>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Nav />
            {children}
            <Footer />
        </Layout>
    )
}