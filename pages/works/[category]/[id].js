import Head from 'next/head'
import { useRouter } from 'next/router'
import { getWorksPaths, getWorksImages } from '../../../lib/Images'
import Images from '../../../components/Images'
import Layout from '../../../components/Layout'
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
    const { category, id } = router.query
    const name = id.split('-')[3] || id.split('-')[1]

    const coverPathArr = images[0].split('/');
    const cover = coverPathArr[coverPathArr.length - 1];
    return (
        <>
            <Head>
                <title>{name}</title>
                <meta property="og:url" content={encodeURI("https://www.wingfailam.com/works/" + category + '/' + id)} />
                <meta property="og:image" content={encodeURI("https://www.wingfailam.com/images/works/" + category + '/' + id + "/resized-50/" + cover)} />
            </Head>
            <ThemeProvider theme={{ withBgi: true }}>
                <Layout>
                    <Head>
                        <meta property="og:description" content={name + " - WING-FAI 輝 | 前端工程師 / 業餘攝影師"} />
                    </Head>
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
    const images = getWorksImages(params.category, params.id)
    return {
        props: {
            images,
        }
    }
}

export async function getStaticPaths() {
    const worksPaths = getWorksPaths()
    let paths = []
    worksPaths.forEach((category) => {
        category.ids.map(id => {
            paths.push({ params: { category: category.category, id } })
        })
    })
    return { paths, fallback: false }
}