import styled from "@emotion/styled"
import Link from 'next/link'
import React from "react";
const { useState } = React;
const iconSize = '50px';
const colorWhite = '#ececec';
const Nav = styled.nav`
    *{
        z-index:100;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 80px);
    color: ${colorWhite};
    font-family: Oswald-ExtraLight;
    @media (max-width: 768px) {
        padding: 0 20px;
        width: calc(100% - 40px);
    }
    .icon {
        // $icon_size: 50px;
        background-image: url("/images/icon-fai-white.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: ${iconSize};
        height: ${iconSize};
    }
    h1 {
        visibility: hidden;
    }
    .nav-right {
        display: flex;
        ul {
            display: inline-flex;
            justify-self: start;
        }
        .hamburger {
            font-size: 30px;
            display: none;

            @media (max-width: 768px) {
                &.active {
                    display: block;
                }
            }
        }
        .close {
            display: none;
        }
        .nav-right-container {
            @media (max-width: 768px) {
                position: fixed;
                background-color: rgba(0, 0, 0, 0.5);
                // background-color: rgba(0255, 0255, 0255, 0.5);
                top: 0;
                padding-left: 10px;
                width: calc(100vw - 10px);
                padding-top: 80px;
                height: calc(100vh - 70px);
                display: flex;
                flex-direction: column;
                left: 100%;
                transition: all 0.5s;
                &.active {
                    left: 0;
                }
                ul {
                    margin: 0;
                    padding-top: 10px;
                    padding-bottom: 10px;
                }
                .close {
                    display: block;
                    font-size: 80px;
                    position: absolute;
                    right: 21px;
                    top: -37px;
                }
            }
        }
    }
`
export default function () {
    const [isMenu, setIsMenu] = useState(0);
    const triggerMenu = () => setIsMenu(!isMenu);

    return (
        <Nav className="nav">
            <div className="nav-left">
                <Link href="/" as="/">
                    <a><div className="icon"><h1>輝</h1></div></a>
                </Link>

            </div>
            <div className="nav-right">
                <span className={'hamburger' + (!isMenu ? ' active' : '')} onClick={triggerMenu}>☰</span>

                <div className={"nav-right-container" + (isMenu ? ' active' : '')}>
                    <span className="close" onClick={triggerMenu}>༝</span>
                    {/* <Link href="/info" as="/info">
                        <a><ul>INFO</ul></a>
                    </Link> */}
                    <Link href="/resume" as="/resume">
                        <a><ul>RESUME</ul></a>
                    </Link>
                    <Link href="/projects" as="/projects">
                        <a><ul>PROJECTS</ul></a>
                    </Link>
                    <Link href="/works" as="/works">
                        <a><ul>WORKS</ul></a>
                    </Link>
                </div>
            </div>
        </Nav>
    )
}