import Head from 'next/head'
import { useRouter } from 'next/router'
import { getProjectsNames, getProjectImages } from '../../lib/projects'
import Images from '../../components/Images'
import Layout from '../../components/Layout'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'

const Project = styled.div`
padding:0 10px;
padding-top:90px;
padding-bottom:40px;
h3{
    padding-left:10px
}
`

export default ({ images }) => {
    // res.send('<h1>test</h1>')
    const router = useRouter()
    const { id } = router.query
    const name = id.split('-')[3]

    return (
        <>
            <Head>
                <title>{name}</title>

            </Head>
            <ThemeProvider theme={{ withBgi: true }}>
                <Layout >
                    <Project className="p2">
                        <h3>{id}</h3>
                        <Images images={images}></Images>
                    </Project>
                </Layout>
            </ThemeProvider>
        </>
    )
}

export async function getStaticProps({ params }) {
    const images = getProjectImages(params.id);
    return {
        props: {
            images
        }
    }
}

export async function getStaticPaths() {
    const projects = getProjectsNames()
    const paths = projects.map((project) => ({
        params: { id: project },
    }))
    return { paths, fallback: false }


}