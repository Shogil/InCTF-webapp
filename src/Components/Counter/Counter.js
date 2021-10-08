import React from 'react'
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const CoverContainer = styled.section`
   
    padding: 0 0 120px;

    
`;
const CoverWrap = styled.div`
       
        .count-shadow {
            -webkit-box-shadow: 0 5px 20px rgba(0, 0, 0, .1);
            box-shadow: 0 5px 20px rgba(0, 0, 0, .1);
        }

        .counter-txt h3 {
            font-size: 50px;
            color: #2a2d48;
            display: inline-block;
        }

        .counter-txt span {
            font-size: 48px;
            color: #f75656;
        }

        .counter-txt p {
            font-size: 19px;
            color: #666;
        }

        .counter-txt {
            position: relative;
            padding-bottom: 45px;
            padding-top: 45px;
        }

        .counter-txt:after {
            display: none;
            position: absolute;
            content: '';
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: #ff7878;
            border-radius: 50px;
        }

        .line-dark:after {
            background: #e84545;
        }

`

function Counter() {
    return (
        <React.Fragment>
            <CoverContainer>
                <CoverWrap>
                <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="row count-shadow count-item">
                                    <div class="col-lg-3 col-sm-6 text-center counter-txt line-dark">
                                        <h3 class="counter" data-counterup-time="2500" data-counterup-delay="30" data-counterup-beginat="100">15000</h3>
                                        <span>+</span>
                                        <p>Registrations</p>
                                    </div>
                                    <div class="col-lg-3 col-sm-6 text-center counter-txt">
                                        <h3 class="counter" data-counterup-time="2500" data-counterup-delay="30" data-counterup-beginat="10">1000</h3>
                                        <span>+</span>
                                        <p>Colleges</p>
                                    </div>
                                    <div class="col-lg-3 col-sm-6 text-center counter-txt line-dark">
                                        <h3 class="counter" data-counterup-time="2500" data-counterup-delay="30" data-counterup-beginat="2">600</h3>
                                        <span>+</span>
                                        <p>Schools</p>
                                    </div>
                                    <div class="col-lg-3 col-sm-6 text-center counter-txt">
                                        <h3 class="counter" data-counterup-time="2500" data-counterup-delay="30" data-counterup-beginat="10">300</h3>
                                        <span>+</span>
                                        <p>Onsite attendees</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                </CoverWrap>
            </CoverContainer>
        </React.Fragment>
    )
}

export default Counter
