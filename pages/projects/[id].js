import Head from 'next/head'
import { useRouter } from 'next/router'
import { getProjectsPaths, getProjectImages } from '../../lib/Images'
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
    const router = useRouter()
    const { id } = router.query
    const name = id.split('-')[3]

    return (
        <>
            <Head>
                <title>{name}</title>
                <meta property="og:image" content={images[0]} />
                <meta property="og:description" content={name + " WING-FAI 輝 | 前端工程師 / 業餘攝影師"} />
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
    const projects = getProjectsPaths()
    const paths = projects.map((project) => ({
        params: { id: project },
    }))
    return { paths, fallback: false }


}