import Layout from '../components/Layout'
import styled from '@emotion/styled'
// import styles from '../styles/App.module.scss'
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
export default function App() {
  return (
    <Layout >
      <Header>
      </Header>
      <AppContainer>
        <h2>FEATURED PROJECTS</h2>
        <h2>FEATURED WORKS</h2>
      </AppContainer>
    </Layout>)
}
