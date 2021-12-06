import styled from '@emotion/styled'
import Head from 'next/head'
import Layout from '../../components/Layout'
import { getProjects } from '../../lib/Images'
import Images from '../../components/Images'
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
    }

`
export default function ({ projects }) {

    // const test = projectsNames[0].split('-')[3]
    // console.log(test)
    // const projectsNamesPure = projectsNames.map(element => {
    //     return element.split('-')[3];
    // });
    // console.log(projectsNamesPure)

    // const covers = projects.map(el => el.cover)
    // console.log(covers);

    const title = 'PROJECTS';
    return (
        <Layout>
            <Head>
                <title>{title}</title>
                <meta property="og:title" content={title} key="title" />
            </Head>

            <Projects>
                {/* <h1>{projectsNames}</h1> */}
                {/* <Images projectImages={covers}></Images> */}
                <Header className="header"></Header>
                <h2>PROJECTS</h2>
                <Covers path="projects" covers={projects} />
            </Projects>
        </Layout>
    )
}

export async function getStaticProps() {
    const projects = getProjects();
    console.log('??????????????', projects)
    return {
        props: {
            projects
        }
    }
}
