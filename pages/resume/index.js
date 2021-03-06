import Head from 'next/head'
import Link from 'next/link'
import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import Layout from "../../components/Layout"
import { useEffect } from "react"
import Fireflies from '../../components/fireflies.js/src/fireflies.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'


const Info = styled.div`


    padding: 0 90px;
    padding-top: calc(90px + 40px);
    padding-bottom: 40px;
    min-height: calc(100vh - 90px - 40px - 40px - 195px);
    display: flex;
    gap: 45px;
    flex-direction: column;
    @media (max-width: 768px) {
        padding: 0 10px;
        padding-top: calc(40px + 40px);
        flex-direction: column;
    }
    div {
        flex: 1 1 45%;
        min-height: 35vh;
        z-index: 1;
        b {
            padding-left: 0;
        }
        ul {
            padding-left: 20px;
            font-size: 15px;
        }
        li {
            list-style-type: none;
            // font-size: 13px;
            &::marker {
                margin: 0;
            }
            .svg-inline--fa {
                margin-right: 10px;
                font-size: 18px;
            }
        }
        .link-title {
            * {
                color: #ac4142;
            }
            .svg-inline--fa {
                font-size: 10px;
            }
        }
        div {
            font-size: 14px;
            padding-left: 20px;
            padding-right: 20px;
            line-height: 20px;
        }
    }
    .content {
        flex: 1 1 35%;
        z-index: 1;
        h2 {
            padding-bottom: 20px;
        }
        h3 {
        }
    }
    .pic {
        flex: 1 1 55%;
        background-image: url(/images/fai/resized-50/000082600003.jpg);
        background-size: contain;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 75% 25%;
        z-index: 1;
        margin-top: 30px;
        margin-bottom: 30px;
        @media (max-width: 768px) {
            margin-top: 0;
            flex: 1 1 70vh;
            width: calc(100% - 40px);
        }
    }
    .first {
        display: flex;
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
    .second {
        display: flex;
        background-color: rgba(25, 25, 25, 0.5);
        padding: 20px 0;
        gap: 200px;
        justify-content: space-between;
        margin-bottom: 20px;
        @media (max-width: 768px) {
            gap: 40px;
            margin-top: 40px;
            padding-bottom: 60px;
        }
        div,
        li {
            min-height: unset;
            font-size: 14px;
            .button-container {
                padding: 0;
                min-height: unset;
                button {
                    background-color: rgba(100, 100, 100, 0.5);
                    border-radius: 15px;
                    border: 0;
                    margin: 5px;
                }
            }
        }
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
    .third {
        flex-direction: row-reverse;
        display: flex;
        min-height: 60vh;
        @media (max-width: 768px) {
            flex-direction: column;
        }
        .pic {
            background-position: center;
            margin: 100px 20px;
            flex: 1 1 25%;
            background-image: url(/images/works/scene/SCENE-選輯/resized-50/000002070002.jpg);
            @media (max-width: 768px) {
                width: calc(100% - 40px - 40px);
            }
        }
        .content {
            padding-top: 20px;
            padding-bottom: 20px;
            background-color: rgba(25, 25, 25, 0.5);
            flex: 1 1 65%;
            @media (max-width: 768px) {
                padding-bottom: 60px;
            }
        }
    }


`
const title = 'RESUME';
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
                <meta property="og:url" content="https://www.wingfailam.com/resume/" />
                <meta property="og:image" content={'https://www.wingfailam.com/images/fai/resized-50/000082600003.jpg'} />
            </Head>
            <Layout>
                <Head>
                    <meta property="og:description" content="吳政達 | 前端工程師 / 業餘攝影師" />
                </Head>
                <Info className="resume">

                    <div className="first">
                        <div className="content">
                            <h2>WING-FAI 輝</h2>
                            <div>

                                <h3>吳政達 &nbsp;|&nbsp; WING-FAI LAM</h3>

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
                                    <b>EMAIL</b>
                                    <ul>
                                        <li>wingfai.tw@gmail.com</li>
                                    </ul>
                                    <br />
                                    <b>MORE</b>
                                    <ul>
                                        <li>
                                            <Link href="https://www.linkedin.com/in/wingfailam/" as="https://www.linkedin.com/in/wingfailam/">
                                                <a><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
                                            </Link>
                                            <Link href="https://github.com/wingfailam" as="https://github.com/wingfailam">
                                                <a><FontAwesomeIcon icon={faGithubSquare} size="lg" /></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="pic"></div>
                    </div>
                    <div className="second">
                        <div className="portfolio">
                            <h3>作品</h3>
                            <div>
                                <Link href="/" as="/">
                                    <a className="link-title"><b>WING-FAI 輝 </b><FontAwesomeIcon icon={faExternalLinkAlt} size="sm" /></a>
                                </Link>
                                <ul>
                                    <li>
                                        以 React 實作，搭配 Express, Next 後端框架建造的 SSG 預渲染、RWD 個人網頁，以 GCP 創建 VM 使用 Docker 在 Container 內搭配 Nginx 部署並由 certbot 產生 SSL 憑證，再重新導向至 https 且 www 之網址增益 SEO，主要呈現自身攝影作品。
                                    </li>
                                </ul>
                                <Link href="https://wingfailam.github.io/taiwantravel/" as="https://wingfailam.github.io/taiwantravel/">
                                    <a className="link-title"><b>台灣旅遊資訊 </b><FontAwesomeIcon icon={faExternalLinkAlt} size="sm" /></a>
                                </Link>
                                <ul>
                                    <li>
                                        以 Vue 實作，串接政府 TDX API，可選定縣市區域、資訊種類進行搜尋、呈現結果與其詳細資訊的 RWD 網頁。
                                    </li>
                                </ul>
                                <Link href="https://wingfailam.github.io/taiwanbus/" as="https://wingfailam.github.io/taiwanbus/">
                                    <a className="link-title"><b>台灣公車即時動態 </b><FontAwesomeIcon icon={faExternalLinkAlt} size="sm" /></a>
                                </Link>
                                <ul>
                                    <li>
                                        以 Angular 實作，運用原生 Service 進行狀態管理，串接政府 TDX API，以顯示路線、站點、站點資訊、預估到站時間、車輛位置、車牌號碼等資訊的 RWD 網頁。
                                    </li>
                                </ul>
                                <Link href="https://wingfailam.github.io/maskmap/" as="https://wingfailam.github.io/maskmap">
                                    <a className="link-title"><b>口罩地圖 </b><FontAwesomeIcon icon={faExternalLinkAlt} size="sm" /></a>
                                </Link>
                                <ul>
                                    <li>
                                        以 React 實作，運用 Redux 進行狀態管理，串接 API 獲取藥局口罩資訊，使用 Hooks 控制生命週期，並結合 Grid 與 Flex 完成排版的 RWD 網頁。
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="skill">
                            <h3>能力</h3>
                            <div>
                                <b>程式語言</b>
                                <ul>
                                    <li>
                                        JavaScript, Pug, Sass/Scss, PHP, C, Java, Python
                                    </li>
                                </ul>
                                <b>JavaScript 函式庫 / 框架</b>
                                <ul>
                                    <li>
                                        React, Angular, Vue, jQuery, Redux
                                    </li>
                                </ul>
                                <b>後端</b>
                                <ul>
                                    <li>
                                        Node, Express, Next, Nginx, Docker
                                    </li>
                                </ul>
                                <b>雲端平台</b>
                                <ul>
                                    <li>
                                        GCP
                                    </li>
                                </ul>
                                <b>Adobe</b>
                                <ul>
                                    <li>
                                        Lightroom, Photoshop, Illustrator
                                    </li>
                                </ul>
                                <b>自然語言</b>
                                <ul>
                                    <li>
                                        <div className="button-container">
                                            <button>英文 中等</button>
                                            <button>日文 N3,</button>
                                            <button>廣東話 初等</button>
                                            <button>中文 母語</button>
                                            <button>台語 母語</button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <h3>教育背景</h3>
                            <div>
                                <b>逢甲大學資訊工程學系</b>
                            </div>
                        </div>
                    </div>
                    <div className="third">
                        <div className="content">
                            <div>

                                <h3>關於</h3>
                                <div>
                                    <b>個人背景</b>
                                    <ul>
                                        <li>自幼生長於網路世代，從無名小站、台灣論壇、YouTube、噗浪、Facebook 至 Stack Overflow、Medium、iThome；從休閒娛樂到資訊獲取，生活中總離不開閱讀網頁這件事。而網頁的載體也從 PC 發展橫跨各式設備，因此總想著自己是否能從純粹的網頁使用者轉為兼具網頁開發者的角色。</li>
                                    </ul>
                                    <b>自我學習</b>
                                    <ul>
                                        <li>
                                            <h4>「想成為一名網頁開發者，先從學會當一個網頁使用者開始。」</h4>

                                            現在的網路生態富有開源的信念，大家總不吝地仔細分享自己的知識，讓在各種階段的學習者都有相對應的教材，自身則再藉本科系的背景在前端的路上不斷地尋找資訊自學、創造問題並著手解決問題。</li>
                                    </ul>
                                    <b>未來展望</b>
                                    <ul>
                                        <li>對視覺呈現有濃烈的興趣，喜歡實踐不論自身或他人所構思的視覺。
                                            希望能在有相近理想的團隊工作，成為其中的戰力、一起成長茁壯！</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="pic"></div>
                    </div>
                </Info>
            </Layout >
        </ThemeProvider >)

}