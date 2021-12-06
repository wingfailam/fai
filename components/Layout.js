import Head from 'next/head'
import Nav from "./Nav"
import Footer from "./Footer"
import styled from "@emotion/styled"

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
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:url" content="https://wingfailam.com" />
                <meta property="og:title" content="WING-FAI 輝" />
                <meta property="og:image" content="/images/background-light.jpg" />
                <meta property="og:description" content="WING-FAI 輝 | 前端工程師 / 業餘攝影師" />
            </Head>
            <Nav />
            {children}
            <Footer />
        </Layout>

    )
}