import React from 'react'
import styled from "@emotion/styled";

const CoverContainer = styled.section`
    padding: 90px 0;
    position: relative;
    background: #fafafa;
    
`;
const CoverWrap = styled.div`
        .event-header h4 {
            font-size: 30px;
            color: #e84545;
        }

        .event-header h3 {
            font-size: 40px;
            color: #2a2d48;
            padding-bottom: 18px;
            padding-top: 5px;
        }

        .event-header h3 b {
            color: #e84545;
        }

        .event-header p {
            font-size: 17px;
            color: #666;
            padding-bottom: 48px;
            padding-right: 22px;
        }

        .buttonop {
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

        .event-header a:hover {
            -webkit-box-shadow: 0px 4px 19px 0px #e84545;
            box-shadow: 0px 4px 19px 0px #e84545;
        }
        .about-item {
            padding: 30px;
            -webkit-box-shadow: 0 5px 20px rgba(0, 0, 0, .1);
            box-shadow: 0 5px 20px rgba(0, 0, 0, .1);
            margin-bottom: 30px;
            position: relative;
            
        }
        .about-item h3 {
            font-size: 25px;
            color: #2a2d48;
            padding-bottom: 6px;
        }
        .about-item span {
            position: absolute;
            top: 0;
            right: 0px;
            font-size: 50px;
            color: #d8d8d8;
            -webkit-transition: all linear .3s;
            -o-transition: all linear .3s;
            transition: all linear .3s;
        }
        
        .about-item:hover span {
            color: #fc7d7d;
        }  

`

function Event() {
    return (
        <div>
                <React.Fragment>
                    <CoverContainer>
                      <CoverWrap>
                        <div className="container  px-2">
                            <div className="row ">
                            <div class="col-lg-5 event-header mobile-t-p">
                                    <h4>Event</h4>
                                    <h3>Why should you join<b>?</b> </h3>
                                    <p>InCTF was started to generate awareness and interest in cybersecurity in the student community.  More importantly, equipping students with the skills to pursue careers in this sector, and providing hands-on training and exposure to industry experts and allowing them to take on the challenges of the rapidly changing digital world.</p>
                                    <a class="buttonop" href="https://wiki.bi0s.in/">RESOURCES</a>
                                </div>
                                <div class="col-lg-7">
                                    <div class="row">
                                        <div class="col-lg-6 col-sm-6">
                                            <div class="about-item">
                                                <span>01</span>
                                                <h3>Learn</h3>
                                                <p>Learn new concepts using the bi0s wiki and our YouTube channel and practice them at the challenge archive!</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-sm-6">
                                            <div class="about-item">
                                                <span>02</span>
                                                <h3>Hack</h3>
                                                <p>Start by solving simple challenges that test your knowledge and work up to real world situations where you will need a true hacker's skills to succeed!</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-sm-6">
                                            <div class="about-item">
                                                <span>03</span>
                                                <h3>Win</h3>
                                                <p>Students who finish above the CTF leaderboard will be given exciting goodies and prizes, as well as access to exclusive online cybersecurity training following the competition.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </CoverWrap>
                    </CoverContainer>
                </React.Fragment>

            
        </div>
    )
}

export default Event
