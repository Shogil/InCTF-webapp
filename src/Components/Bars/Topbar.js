import React, { useState, useRef } from 'react';

import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import SideBar from "./Sidebar";

const Header = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5000;
    align-items: center;
    justify-content: space-between;
    background: rgb(20,20,30);
    border-bottom: 1px solid white;
    height: 74px;
    img {
        height: 70px;
        &:hover {
            filter: brightness(10%) invert(1);
        }
    }
      button {
        background: none!important;
        border: none;
        i {
          font-size: 32px;
          color: white;
          padding-right: 20px;
        }
      }
    nav {
       a {
          font-size: 16px;
          color: white;
          padding: 8px 16px;
          text-decoration: none!important;
          &:hover {
            color: #f07008;
          }
       }
    }
    .register-button {
        padding: 5px 12px;
        border-radius: 3px;
        border: 1px solid #666;
        color: #EEE;
        text-decoration: none!important;
        transition: all 0.5s linear;
        &:hover {
           color: #F50057;
           transition: all 0.5s linear;
        }
        margin-right: 5px;
    }
    .social-icon {
        color: #999;
        font-size: 20px;
        padding: 0 12px;
        text-decoration: none!important;
        &:hover {
           color: #F50057;
           transition: all 0.5s linear;
        }
    }
`;



const Topbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const topbarRef = useRef()

    const onOpen = () => {
        const targetElement = document.querySelector(".app");
        disableBodyScroll(targetElement);
        setShowMenu(true);
    };

    const onClose = () => {
        setShowMenu(false);
        clearAllBodyScrollLocks();
    };

    

    return (<React.Fragment>
        <Header ref={topbarRef}>
            <div className="row w-100 mx-0">
                <div className="col-4 col-md-3 d-flex justify-content-md-center px-3">
                    <a href="/">
                        <img className="image" height="30px" draggable="false" width="auto" src={require('../../images/logomain.png').default} alt="InCTF-logo" />
                    </a>
                </div>
                <div className="col-8 d-none d-md-flex justify-content-md-end align-items-center">
                    <nav>
                        {/*<Fade delay={0}>
                            <a className="newone" href="/about">About</a>
                        </Fade>*/}
                        <Fade delay={0}>
                            <a className="newone" href="/">Home</a>
                        </Fade>
                        <Fade delay={200}>
                            <a className="newone" href="/trainings">Training</a>
                        </Fade>
                       {/* <Fade delay={450}>
                            <a className="newone" href="/">Sponsors</a>
                        </Fade>
                        <Fade delay={550}>
                            <a className="newone" href="/">Promote</a>
                    </Fade>*/}
                    </nav>
                </div>
                <div className="col-8 d-flex d-md-none align-items-center justify-content-end px-2">
                    <button onClick={onOpen}>
                        <i class="fa fa-bars text-light color" aria-hidden="true"></i>
                    </button>
                </div>
                {/*<div className="col-3 d-none d-md-flex align-items-center">
                    {/*<Fade left>*/}
                    {/*    <a*/}
                    {/*       className="register-button" target="_blank" rel="noreferrer nofollow"*/}
                    {/*       href="https://docs.google.com/forms/d/e/1FAIpQLSeiITkqpmhPRHWQspiLt27hDV2nFlwW9QoyzyFZVjM5YmSqwg/viewform"*/}
                    {/*    >*/}
                    {/*        Register*/}
                    {/*    </a>*/}
                    {/*</Fade>*/}
                    {/*socialMedia.map((s, index) =>
                        <Fade right delay={index*200}>
                            <a
                                href={s.url}
                                target="_blank" rel="nofollow noreferrer"
                                className="social-icon"
                                title={s.title}
                                aria-label={s.title}
                            >
                                <i className={s.icon} aria-hidden="true" />
                            </a>
                        </Fade>
                    )}
                    </div>*/}
            </div>
        </Header>
        {showMenu && <SideBar  onClose={onClose} />}
    </React.Fragment>);
};

export default Topbar;