import styled from '@emotion/styled'
import Head from 'next/head'
import Layout from '../../components/Layout'
import { getWorks } from '../../lib/Images'
import Images from '../../components/Images'
import Covers from '../../components/Covers'
import { useState } from 'react'


const Projects = styled.div`
padding:0 10px;
padding-top:90px;
min-height:100vh;
z-index:1;
*{
    z-index:1;
}
h2{
    margin-bottom:0px;
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
        // background-image: url(/images/projects/2019-02-12-偉仔/DSC00063.jpg);
        background-image: url(/images/header-projects.jpg);
        background-size: cover;

        background-repeat: no-repeat;
        background-position: center -500px;

        @media (max-width:768px){
            background-position: center -325px;
        }
        

        background-attachment: fixed;

        @media (max-width:768px){
            background-attachment: scroll;
        }
    }

`
const Categories = styled.div`
display: flex;
justify-content: space-between;
padding: 0 40px;
width: calc(100% - 80px);
gap: 30px;
flex-wrap: wrap;
padding-bottom: 40px;
`
const Category = styled.button`
border: 1px solid #eee;
background-color: #111;
flex: 1 1 123px;
cursor: pointer;
&.all {
    flex: 1 1 123px;
    flex: 1 1 100%;
    // border-bottom: none;
    border-top: none;
    border-left: none;
    border-right: none;
}
&.active{
    border-color: #ac4142;
}

`
export default function ({ categories, works }) {
    const [chosenCategory, setChosenCategory] = useState('all');
    const filterWorks = (category) => {
        return works.filter(el => el.category == category)
    }
    const categoryButtons = categories.map(el => <Category className={"category" + (chosenCategory == el ? ' active' : '')} onClick={() => setChosenCategory(el)}><h3>{el.toUpperCase()}</h3></Category>)
    let filteredWorks = works;
    if (chosenCategory != 'all') {
        filteredWorks = filterWorks(chosenCategory)

    }

    const title = 'WORKS';
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

                <h2>WORKS</h2>

                <Categories className="categories">
                    <Category className={"category all" + (chosenCategory == 'all' ? ' active' : '')} onClick={() => setChosenCategory('all')}><h3>ALL</h3></Category>
                    {categoryButtons}
                </Categories>
                <Covers path="works" covers={filteredWorks} key={filteredWorks} />


            </Projects>
        </Layout>
    )
}

export async function getStaticProps() {
    const { categories, works } = getWorks();
    return {
        props: {
            categories, works
        }
    }
}
