import styled from '@emotion/styled';
import Link from 'next/link'
const Covers = styled.div`
    padding: 0 10px;
    padding-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
    width: calc(100% - 20px);
    justify-content: space-between;

    a,
    .project-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1 1 340px;
        position: relative;
        // justify-content: center;
        // align-items: center;

        h3 {
            margin: 0;
        }
        .year {
            font-size: 12px;
            color: #555;
        }
        .project-img {
            // width: 400px;
            width: 100%;
            height: 300px;
            background-size: cover;
            background-position: center;
            @media (max-width: 768px) {
                height: 250px;
            }
            @keyframes show {
                0% {
                    // background-color: red;
                    // width: 0;
                    // height: 0;
                    // background-size: cover;
                    // background-position: center;
                    position: relative;
                    left: 0;
                    top: 20%;
                    opacity: 0;
                }
                100% {
                    // background-color: #fff;
                    // width: 100%;
                    // height: 300px;
                    // background-size: cover;
                    // background-position: center;
                    position: relative;
                    left: 0;
                    top: 0;
                    opacity: 1;
                }
            }
            animation-name: show;
            animation-duration: 1.5s;
        }
    }
    a:nth-child(6n),
    a:nth-child(6n + 1) {
        // background-color: red;
        flex: 1 1 390px;
        // max-width: 500px;
    }

    a:nth-child(6n - 2),
    a:nth-child(6n + 2) {
        // background-color: blue;
        flex: 1 1 430px;
        // max-width: 500px;
    }

`
export default function ({ path, projects }) {

    let temp = []
    projects.forEach(element => {
        temp.push(
            <Link href={`/${path}/[id]`} as={`/${path}/${element.id}`}>
                <a>
                    <div className="project-wrapper">
                        <div className="project-img" style={{ backgroundImage: `url("${element.cover}")` }}></div>
                        <h3>{element.name}</h3>
                        <span className="year">{element.year}</span>
                    </div>
                </a>
            </Link>

        )
    });
    return (<Covers className="covers" >{temp}</Covers>);
}

