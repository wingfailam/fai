import styled from "@emotion/styled"
import Link from 'next/link'

const Footer = styled.footer`
    *{
        z-index:100;
    }
    position:absolute;
    bottom:0px;
    left:0px;
    width:calc(100% - 80px);
    // background-color: #222;
    background: ${props => props.theme.withBgi ? 'none' : '#222'};
    display: flex;
    flex-direction: column;
    padding: 40px 40px;
    @media (max-width: 768px) {
        padding: 30px 20px;
        width:calc(100% - 40px);

    }
    gap: 20px;
    color: #d0d0d0;
    .footer-container-top {
    }
    .footer-container {
        font-size: 13px;

        &-top {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            @media (max-width: 768px) {
                flex-direction: column;
                gap: 40px;
            }

            .footer-wrapper {
                // flex: 0 1 30%;
                display: flex;
                flex-direction: column;
                .title {
                    color: #909090;
                    padding-bottom: 5px;
                }
                .content .name {
                    font-weight: bold;
                    color: #ddd;
                }
                &.follow .content {
                    display: flex;
                    gap: 10px;
                }
            }
        }
        &-bottom {
            // color: #eee;
            font-weight: bold;
        }
    }

`
export default function () {
    return (
        <Footer className="footer">

            <div className="footer-container footer-container-top">
                <div className="footer-wrapper info">
                    <div className="title">INFO</div>
                    <div className="content">
                        <div className="name">WING-FAI 輝</div>
                        <div>Front-End Engineer / Amateur Photographer</div>
                        <div>Taichung, Taiwan</div>
                    </div>
                </div>
                <div className="footer-wrapper contact">
                    <div className="title">CONTACT</div>
                    <div className="content">
                        <div>wingfai.tw@gmail.com</div>
                    </div>
                </div>
                <div className="footer-wrapper follow">
                    <div className="title">FOLLOW</div>
                    <div className="content">
                        <Link href="https://www.instagram.com/fai_syasin/" as="https://www.instagram.com/fai_syasin/">
                            <a><span>IG</span></a>
                        </Link>

                        {/* <span>FB</span> */}
                    </div>
                </div>
            </div>

            <div className="footer-container footer-container-bottom">
                © 2021 FAI All Rights Reserved.
            </div>

        </Footer>
    )
}