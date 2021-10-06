import React from 'react'
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';


const CoverContainer = styled.section`
    background-image: ${() => `url(${require('../../images/Bcover/banner.jpg').default})`};
    background-size:cover;
    background-position: top;
    color: white;
    position: relative;
    overflow: hidden;
`;

const CoverWrap = styled.div`
    @media (max-width: 575px){
        margin-top: 75px;
        padding-top: 10px;
    }
    {/*backdrop-filter: blur(1px) brightness(0.45);*/}
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    background:rgba(42, 45, 72, 0.8);
    justify-content:left;
    img {
       width: 300px;
       max-width: 100%;
       margin-bottom: 1.5rem;
       text-align: center;
    }
    h1 {
      font-size: calc(3.5rem + 4vw);
      text-shadow: 3px 5px 8px rgba(0,0,0,0.5);
    }
    h2 {
       text-align: left;
       font-size: calc(2rem + 1vw);
       text-shadow: 2px 3px 4px rgba(0,0,0,0.5);
       color: #EEE;
       span {
          display: block;
          font-weight: 900;
          font-style: italic;
       }
    }
    p {
        font-size: 19px;
        color: #cbc5c5;
        
        padding-right: 50px;
      span {
        font-weight: 600;
        color: #fd7e14;
      }
    }
    .register-button {
        margin-top: 2vh;
        display: block;
        padding: 12px 18px;
        border-radius: 3px;
        font-size: 18px;
        background: #4A148C;
        color: white;
        text-decoration: none!important;
        transition: all 0.35s linear;
        &:hover {
           background: #F50057;
           transition: all 0.35s linear;
        }
        margin-right: 5px;
    }
   

`

function Banner() {
    return (
        <React.Fragment>
        <CoverContainer>
            <CoverWrap>
                <div className="container  px-2">
                    <Fade right>
                        <img
                            className="mb-0  " alt="edition"
                            style={{ maxHeight: '90px',float: 'right',  maxWidth: 'auto', width: 'auto' }}
                            src={require('../../images/Bcover/edition.png').default}
                        />
                    </Fade>
                    <Fade right>
                        <h2>INDIA'S FLAGSHIP CYBER SECURITY CONTEST AND CONFERENCE SEP TO DEC - 2021 </h2>
                        <p>InCTF  India's Premier Hacking & Cyber Security contest organized by team bi0s, India's No.1 ranked CTF Team.Participate in this learn & hack CTF contest, win exciting prizes & kick-start your cyber-security career.</p>
                        {/*<div className="d-flex w-100 justify-content-center mt-3 align-content-center">
                            <div className="d-flex w-50 justify-content-end text-right border-right mr-3 pr-3 pl-2">
                                <div>
                                    <div>CTF</div>
                                    <h3 className="font-weight-bold">April 3-4</h3>
                                </div>
                            </div>
                            <div className="col-6 d-flex align-content-start text-left pl-0 pr-2">
                                <div>
                                    <div>Conference</div>
                                    <h3 className="font-weight-bold">April 9-11</h3>
                                </div>
                            </div>
                        </div>*/}
                    <div class="row">
                      <div class="col-md-6 mb-6 col-lg-6 p-3 p-md-3">
                          <iframe class="w-100 border-0" src="https://app.traboda.com/contest/inctf-21-lr/reg-frame?color=fff&amp;primary=F13F17&amp;primary_text=fff" data-gtm-yt-inspected-1_25="true"scrolling="no"></iframe>
                      </div>
                      </div>
                      </Fade>
                      <a href="https://www.youtube.com/embed/T8pEY4AR_Kg">
                      <img
                            className="mb-0  " alt="edition"
                            style={{ maxHeight: '90px',float: 'left',  maxWidth: 'auto', width: 'auto' }}
                            src={require('../../images/Bcover/Howtosignup.png').default}
                        /></a>
                </div>
            </CoverWrap>
        </CoverContainer>
    </React.Fragment>
    )
}

export default Banner
