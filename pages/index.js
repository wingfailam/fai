
import Head from 'next/head'
import Layout from '../components/Layout'
import styled from '@emotion/styled'
import Covers from '../components/Covers'
import { getProjects, getWorks } from '../lib/Images'
import _ from 'lodash'


const Header = styled.header`
width: 100vw;
height: 100vh;
background-image: url("images/background-light.jpg");
background-size: cover;
background-position: center;
`
const AppContainer = styled.div`
padding: 0 10px;
`

export default function Home({
  projects,
  works,
  shortProject,
  shortWorks
}) {


  return (
    <>
      <Head>
        <title>WING-FAI 輝</title>
      </Head>
      <Layout >
        <Header>
        </Header>
        <AppContainer>
          <h2>FEATURED PROJECTS</h2>
          <Covers path="projects" covers={shortProject} key={projects} />
          <h2>FEATURED WORKS</h2>
          <Covers path="works" covers={shortWorks} key={shortWorks} />

        </AppContainer>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const { works } = getWorks();
  const projects = getProjects();
  const shortProject = (_.shuffle(projects)).slice(0, 6)
  const shortWorks = (_.shuffle(works)).slice(0, 6)

  return {
    props: {
      projects,
      works,
      shortProject,
      shortWorks
    }
  }
}