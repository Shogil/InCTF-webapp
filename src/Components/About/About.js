import React from 'react'
import styled from "@emotion/styled";


const CoverContainer = styled.section`
    padding: 90px 0;
    position: relative;
    background: #fafafa;
    

`;
const CoverWrap = styled.div`
       
        .about-img {
            overflow: hidden;
            border: 0;
            vertical-align: middle;
            max-width: 100%;
            position: relative;

        }
        .about-txt h3 {
            font-size: 25px;
            color: #e84545;
        }
        
        .about-txt h4 {
            font-size: 37px;
            color: #2a2d48;
            padding-top: 17px;
            padding-bottom: 19px;
            line-height: 49px;
        }
        
        .about-txt h4 span {
            color: #e84545;
        }
        
        p {
            font-size: 17px;
            color: #666;
            padding-bottom: 46px;
            padding-right: 40px;
        }
        .ai-place {
            -webkit-transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            transform: rotate(-90deg);
            position: absolute;
            bottom: 185px;
            left: -231px;
            width: 451px;
            height: 80px;
            line-height: 80px;
            background: #e84545;
            text-align: center;
            font-size: 36px;
            color: white;
        }
        
        .ai-place:hover {
            color: white;
        }
        
        @-webkit-keyframes pulse-border {
            0% {
                -webkit-transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
                transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
                opacity: 1;
            }
        
            100% {
                -webkit-transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
                transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
                opacity: 0;
            }
        }
        
        @keyframes pulse-border {
            0% {
                -webkit-transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
                transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
                opacity: 1;
            }
        
            100% {
                -webkit-transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
                transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
                opacity: 0;
            }
        }
        
        .play-btn {
            position: absolute;
            top: 40%;
            left: 33%;
            width: 90px;
            height: 90px;
            line-height: 90px;
            background: white;
            text-align: center;
            color: #e84545;
            border-radius: 50%;
            font-size: 21px;
            -webkit-transition: all linear .3s;
            -o-transition: all linear .3s;
            transition: all linear .3s;
            z-index: 10;
        }
        
        .play-btn:hover {
            background: #e84545;
            color: white;
        }
        
        .play-btn:hover:after {
            display: none;
        }
        
        .play-btn::after {
            position: absolute;
            content: '';
            width: 90px;
            height: 90px;
            line-height: 90px;
            background: white;
            border-radius: 50%;
            -webkit-animation: pulse-border 1500ms ease-out infinite;
            animation: pulse-border 1500ms ease-out infinite;
            top: 45px;
            left: 44px;
            z-index: 1;
            -webkit-transition: all linear .3s;
            -o-transition: all linear .3s;
            transition: all linear .3s;
            z-index: 0;
        }
        
       
        
        
        .about-txt a {
            padding: 21px 25px;
            background: #e84545;
            border-radius: 50px;
            font-size: 19px;
            color: white;
            text-transform: uppercase;
            -webkit-transition: all linear .3s;
            -o-transition: all linear .3s;
            transition: all linear .3s;
        }
        
        .about-txt a:hover {
            -webkit-box-shadow: 0px 4px 19px 0px #e84545;
            box-shadow: 0px 4px 19px 0px #e84545;
        }
        
        .about-s {
            padding-top: 70px;
        }
        
        h5 {
            font-size: 27px;
            color: #666;
        }
        
        .about-s span {
            font-size: 19px;
            color: #e84545;
        }
        
        

`

function About() {
    return (
        <React.Fragment>
            <CoverContainer>
                <CoverWrap>
                <div className="container  px-2">
                <div className="row ">
                    <div class="col-lg-5 col-md-8 m-md-auto col-sm-9 m-sm-auto about-img ">
                        <img className=" " alt="about-img" style={{ maxHeight: 'auto',float: 'left',  maxWidth: 'auto', width: 'auto' }}
                        src={require('../../images/About/about.jpg').default}/>
                        <h3 class="ai-place">ABOUT US</h3>
                        <a data-autoplay="true" data-vbtype="video" href="https://youtu.be/MICFZTmNOog  " class="play-btn venobox"><i class="fa fa-play" aria-hidden="true"></i></a>

                    </div>
                    <div class="col-lg-7 about-txt">
                        <h3>Amrita InCTF</h3>
                        <h4>LEARN <span>|</span> HACK <span>| </span> WIN </h4>
                        <p>InCTF is a National level <b> Ethical Hacking</b> contest organized annually by Team bi0s in association with Amrita Vishwa Vidyapeetham and Amrita Centre for Cyber Security. The contest is exclusively for students enrolled in an Indian university and aimed at students who have <b> no prior exposure to computer security</b> and for the working professionals. Started in 2010 and so far over <b> 15,000 university students </b>across India from 22 states have taken part.</p>
                        <a href="gallery.html">GALLERY</a>
                    
                    </div>
                </div>
                </div>

                </CoverWrap>
            </CoverContainer>
            
        </React.Fragment>
    )
}

export default About
