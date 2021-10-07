import React from 'react'
import styled from "@emotion/styled";


const CoverContainer = styled.section`
    padding: 90px 0;
    position: relative;
    background: #fafafa;

`;
const CoverWrap = styled.div`
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
            font-family: bb;
            font-size: 36px;
            color: white;
        }

        .ai-place:hover {
            color: white;
        }

`

function About() {
    return (
        <React.Fragment>
            <CoverContainer>
                <CoverWrap>
                <div className="row">
                    <div class="col-lg-5 col-md-8 m-md-auto col-sm-9 m-sm-auto about-img ">
                        <img className="mb-0  " alt="about-img" style={{ maxHeight: 'auto',float: 'left',  maxWidth: 'auto', width: 'auto' }}
                        src={require('../../images/About/about.jpg').default}/>
                        <h3 class="ai-place">ABOUT US</h3>

                    </div>
                    <div class="col-lg-7 about-txt">
                        <h3>Amrita InCTF</h3>
                        <h4>LEARN <span>|</span> HACK <span>| </span> WIN </h4>
                        <p>InCTF is a National level <b> Ethical Hacking</b> contest organized annually by Team bi0s in association with Amrita Vishwa Vidyapeetham and Amrita Centre for Cyber Security. The contest is exclusively for students enrolled in an Indian university and aimed at students who have <b> no prior exposure to computer security</b> and for the working professionals. Started in 2010 and so far over <b> 15,000 university students </b>across India from 22 states have taken part.</p>
                        <a href="gallery.html">GALLERY</a>
                    
                    </div>
                </div>
                </CoverWrap>
            </CoverContainer>
            
        </React.Fragment>
    )
}

export default About
