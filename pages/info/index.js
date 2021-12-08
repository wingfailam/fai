import Head from 'next/head'
import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import Layout from "../../components/Layout"
import { useEffect } from "react"
import Fireflies from '../../components/fireflies.js/src/fireflies.js'

const Info = styled.div`

    padding: 0 90px;
    // padding-top: 90px;
    padding-top: calc(90px + 40px);
    // height: 85vh;
    padding-bottom: 40px;
    min-height: calc(100vh - 90px - 40px - 40px - 195px);

    display: flex;
    gap: 45px;

    @media (max-width: 768px) {
        padding: 0 10px;
        padding-top: calc(40px + 40px);
        flex-direction: column;
    }
    div {
        flex: 1 1 100%;
    }
    .content {
        // padding-top: 40px;
        flex: 1 6 100%;
        z-index: 1;
        h2 {
            padding-bottom: 20px;
        }
        h3 {
        }
        div {
            padding-left: 20px;
            font-size: 14px;
            line-height: 20px;
            b {
                padding-left: 0;
            }
            ul {
                padding-left: 20px;
                font-size: 13px;
            }
            li {
                list-style-type: disc;

                &::marker {
                    margin: 0;
                }
            }
        }
    }
    .pic {
        flex: 1 4 100%;
        background-image: url(/images/fai/000082600003.jpg);
        background-size: contain;
        background-size: cover;

        background-repeat: no-repeat;
        // background-position: center;
        // background-position: right 50%;
        background-position: 75% 25%;
        z-index: 1;
        margin-top: 30px;
        @media (max-width: 768px) {
            flex: 1 1 70vh;
            width: 100%;
        }
    }


`
const title = 'INFO';
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

        // return (() => Fireflies.terminate())

    }, []);

    return (
        <ThemeProvider theme={{ withBgi: true }}>
            <Head>
                <title>{title}</title>
                <meta property="og:url" content="https://www.wingfailam.com/info/" />
                <meta property="og:image" content={'https://www.wingfailam.com/images/fai/resized-50/000082600003.jpg'} />
            </Head>
            <Layout>
                <Head>
                    <meta property="og:description" content="吳政達 | 前端工程師 / 業餘攝影師" />
                </Head>
                <Info className="profile">
                    <div className="content">
                        <h2>WING-FAI 輝</h2>
                        <div>
                            <h3>林穎輝 &nbsp;|&nbsp; WING-FAI LAM</h3>
                            資訊工程出身
                            <br />
                            現為主要活動於台中的前端工程師、業餘攝影師
                            <br />
                            <br />
                            <b>「以 coding 做為呈現視覺藝術的媒材」</b>
                            <br />
                            <br />
                            深受香港文化與日本文化影響，把底片與數位的靜態攝影視為生活中的一部分。風格上以夜色中不慍不火的光輝為主
                            。
                            <br /><br /><br />
                            <h3>/</h3>
                            <div>
                                <b>2020</b>
                                <ul>
                                    <li>藏紅山海 Saffron | 繪畫×肢體×音樂 跨領域合作表演</li>
                                </ul>
                                <br />
                                <b>2019</b>
                                <ul>
                                    <li>
                                        國立臺北藝術大學電影創作學系第七屆畢業展
                                        <br />
                                        《盡頭之後》Beyond The Borders
                                    </li>
                                    <li>逢甲大學屏東校友會畢業典禮</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pic"></div>
                </Info>
            </Layout>
        </ThemeProvider>)

}