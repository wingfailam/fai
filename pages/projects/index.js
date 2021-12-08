import styled from '@emotion/styled'
import Head from 'next/head'
import Layout from '../../components/Layout'
import { getProjects } from '../../lib/Images'
import Covers from '../../components/Covers'

const Projects = styled.div`
padding:0 10px;
padding-top:90px;
min-height:100vh;
z-index:1;
*{
    z-index:1;
}
`
const Header = styled.header`

    // background-image: url(/images/header-projects.jpg);

    width: 100%;
    height: 250px;
    position: relative;
    overflow: hidden;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        left: 0;
        // width: calc(100% - 100px);
        width: 100%;
        height: 100vh;
        // height: 250px;
        background-image: url(/images/projects/2019-02-12-偉仔/DSC00063.jpg);
        background-size: cover;
        // background-size: contain;
        background-repeat: no-repeat;
        background-position: center -485px;
        // background-position: center -200px;
        background-position: center -0px;

        // z-index: 1;
        background-attachment: fixed;
       
        @media (max-width:768px){
            background-attachment: scroll;
        }
    }

`
export default function ({ projects }) {
    const title = 'PROJECTS';
    return (<>
        <Head>
            <meta property="og:url" content={encodeURI("https://www.wingfailam.com/projects/")} />
            <meta property="og:image" content={encodeURI("https://www.wingfailam.com/" + 'images/projects/2019-02-12-偉仔/resized-50/DSC00063.jpg')} />
        </Head>
        <Layout>
            <Head>
                <title>{title}</title>
                <meta property="og:description" content={title + " - WING-FAI 輝 | 前端工程師 / 業餘攝影師"} />
            </Head>

            <Projects>
                {/* <h1>{projectsNames}</h1> */}
                {/* <Images projectImages={covers}></Images> */}
                <Header className="header"></Header>
                <h2>PROJECTS</h2>
                <Covers path="projects" covers={projects} />
            </Projects>
        </Layout>
    </>
    )
}

export async function getStaticProps() {
    const projects = getProjects();
    return {
        props: {
            projects
        }
    }
}
