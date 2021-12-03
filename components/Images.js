import { useState, useEffect } from "react";

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
        return () => window.removeEventListener('keydown', close)
    }, [])
    let temp = []
    images.forEach((element, index) => {
        // temp.push(<div className="img" style={{ backgroundImage: `url("${element}")` }}></div>)
        // const src = require('../' + 'public/images/background-light.jpg')
        let zoom = `
        
        `



        temp.push(
            <div className="img-wrapper">
                <img className="img" src={element} onClick={() => click(index)}>
                </img>
                <div className={'zoomed-image-wrapper' + (active == index ? ' active' : '')} >
                    <div className="background" onClick={() => setActive(-2)} />
                    <img className="zoomed-image" src={element}></img>
                    <button className={'prev' + (isMoving ? ' active' : '')} onClick={() => click(active - 1)}>{'‹'}</button>
                    <button className={'next' + (isMoving ? ' active' : '')} onClick={() => click(active + 1)}>{'›'}</button>
                </div>
            </div>
        )
    });
    // return (<div className="images" >{temp}</div>);
    return (<div className="imgs" >{temp}</div>);
}

