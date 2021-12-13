import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const Imgs = styled.div`

    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    // position: relative;
    padding: 0 40px;
    z-index: 1;
    @media (max-width: 768px) {
        padding: 0;
        gap: 70px;
    }
    div:nth-of-type(even) {
        &.img-wrapper {
            justify-content: end;
        }

        .img {
            filter: drop-shadow(-20px 20px 10px rgba(0, 0, 0, 0.7));
        }
    }
    div:nth-of-type(odd) {
        .img {
            filter: drop-shadow(20px 20px 10px rgba(0, 0, 0, 0.7));
        }
    }

    .img-wrapper {
        width: 100%;
        display: flex;
        position: relative;
    }
    .img {
        cursor: zoom-in;
        min-width: 100px;
        max-width: 90%;
        min-height: 0px;
        max-height: 500px;
        padding: 25px;
    }
    .zoomed-image-wrapper {
        transition: all 0.5s;
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
        z-index: -1;
        display: flex;
        width: 100vw;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgba(56, 56, 56, 0.5);
        background-color: rgba(28, 28, 28, 0.5);
        z-index: 1000;
        align-items: center;
        justify-content: center;
        &.active {
            opacity: 1;
            visibility: visible;
        }
        .background {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
        .zoomed-image {
            justify-self: center;
            align-self: center;
            max-width: 90%;
            max-height: 90%;
            min-width: 0vw;
            min-height: 0vh;
        }
        .prev,
        .next {
            position: absolute;
            top: 50%;
            background: unset;
            border: 0;
            font-size: 50px;
            width: 50px;
            height: 50px;
            cursor: pointer;
            z-index: 1001;
            opacity: 0;
            transition: all 0.5s;
            &.active {
                opacity: 1;
            }
        }
        .prev {
            left: 0;
        }
        .next {
            right: 0;
        }
    }

`

const Zoomed = styled.div`
position:absolute;
.zoomed-image-wrapper {
    
    transition: all 0.5s;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
    display: flex;
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(56, 56, 56, 0.5);
    background-color: rgba(28, 28, 28, 0.5);
    z-index: 1000;
    align-items: center;
    justify-content: center;
    &.active {
        opacity: 1;
        visibility: visible;
    }
    .background {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .zoomed-image {
        justify-self: center;
        align-self: center;
        max-width: 90%;
        max-height: 90%;
        min-width: 0vw;
        min-height: 0vh;
    }
    .prev,
    .next {
        position: absolute;
        top: 50%;
        background: unset;
        border: 0;
        font-size: 50px;
        width: 50px;
        height: 50px;
        cursor: pointer;
        z-index: 1001;
        opacity: 0;
        transition: all 0.5s;
        &.active {
            opacity: 1;
        }
    }
    .prev {
        left: 0;
    }
    .next {
        right: 0;
    }
}

`

export default function Images({ images }) {
    const [active, setActive] = useState(-2);
    const [isMoving, setIsMoving] = useState(true);
    let timeoutID = null;
    const click = (index) => {
        if (index < 0) {
            index = images.length - 1;
        } else if (index >= images.length) {
            index = 0;
        }
        setActive(index);
    }

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                setActive(-2)
            }
        }
        const handleMousemove = () => {
            setIsMoving(true);
            if (timeoutID) {
                clearTimeout(timeoutID)
                timeoutID = null
            }
            timeoutID = setTimeout(() => {
                setIsMoving(false)
            }, 1000)
        }
        window.addEventListener('keydown', close)
        window.addEventListener('mousemove', handleMousemove)
        return () => {
            window.removeEventListener('keydown', close)
            window.removeEventListener('mousemove', handleMousemove)
        }
    }, [])
    let temp = []
    images.forEach((element, index) => {


        const pathArr = element.split('/')
        pathArr.splice(pathArr.length - 1, 0, 'resized-50');
        const coverPath = pathArr.join('/')

        temp.push(
            <div className="img-wrapper" key={element}>
                <img className="img" src={coverPath} onClick={() => click(index)}>
                </img>
            </div>
        )
    });

    return (
        <Imgs className="imgs">
            <Zoomed>
                <div className={'zoomed-image-wrapper' + (active >= 0 ? ' active' : '')} >
                    <div className="background" onClick={() => setActive(-2)} />
                    <img className="zoomed-image" src={images[active]}></img>
                    <button className={'prev' + (isMoving ? ' active' : '')} onClick={() => click(active - 1)}>{'‹'}</button>
                    <button className={'next' + (isMoving ? ' active' : '')} onClick={() => click(active + 1)}>{'›'}</button>
                </div>
            </Zoomed>
            {temp}
        </Imgs>);
}

