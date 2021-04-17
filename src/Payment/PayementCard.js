import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class PayementCard extends Component {
    render() {
        return (
            <div>

<Helmet>
                <style type="text/css">{`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: #f9f9f9;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-line-pack: center;
                        align-content: center;
                    -webkit-box-align: center;
                        -ms-flex-align: center;
                            align-items: center;
                    -webkit-box-pack: center;
                        -ms-flex-pack: center;
                            justify-content: center;
                    min-height: 100vh;
                    -ms-flex-wrap: wrap;
                        flex-wrap: wrap;
                    font-family: 'Raleway';
                }
                
                .payment-title {
                    width: 100%;
                    text-align: center;
                }
                
                .form-container .field-container:first-of-type {
                    grid-area: name;
                }
                
                .form-container .field-container:nth-of-type(2) {
                    grid-area: number;
                }
                
                .form-container .field-container:nth-of-type(3) {
                    grid-area: expiration;
                }
                
                .form-container .field-container:nth-of-type(4) {
                    grid-area: security;
                }
                
                .field-container input {
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                }
                
                .field-container {
                    position: relative;
                }
                
                .form-container {
                    display: grid;
                    grid-column-gap: 10px;
                    grid-template-columns: auto auto;
                    grid-template-rows: 90px 90px 90px;
                    grid-template-areas: "name name""number number""expiration security";
                    max-width: 400px;
                    padding: 20px;
                    color: #707070;
                }
                
                label {
                    padding-bottom: 5px;
                    font-size: 13px;
                }
                
                input {
                    margin-top: 3px;
                    padding: 15px;
                    font-size: 16px;
                    width: 100%;
                    border-radius: 3px;
                    border: 1px solid #dcdcdc;
                }
                
                .ccicon {
                    height: 38px;
                    position: absolute;
                    right: 6px;
                    top: calc(50% - 17px);
                    width: 60px;
                }
                
                /* CREDIT CARD IMAGE STYLING */
                .preload * {
                    -webkit-transition: none !important;
                    -moz-transition: none !important;
                    -ms-transition: none !important;
                    -o-transition: none !important;
                }
                
                .container {
                    width: 100%;
                    max-width: 400px;
                    max-height: 251px;
                    height: 54vw;
                    padding: 20px;
                }
                
                #ccsingle {
                    position: absolute;
                    right: 15px;
                    top: 20px;
                }
                
                #ccsingle svg {
                    width: 100px;
                    max-height: 60px;
                }
                
                .creditcard svg#cardfront,
                .creditcard svg#cardback {
                    width: 100%;
                    -webkit-box-shadow: 1px 5px 6px 0px black;
                    box-shadow: 1px 5px 6px 0px black;
                    border-radius: 22px;
                }
                
                #generatecard{
                    cursor: pointer;
                    float: right;
                    font-size: 12px;
                    color: #fff;
                    padding: 2px 4px;
                    background-color: #909090;
                    border-radius: 4px;
                    cursor: pointer;
                    float:right;
                }
                
                /* CHANGEABLE CARD ELEMENTS */
                .creditcard .lightcolor,
                .creditcard .darkcolor {
                    -webkit-transition: fill .5s;
                    transition: fill .5s;
                }
                
                .creditcard .lightblue {
                    fill: #03A9F4;
                }
                
                .creditcard .lightbluedark {
                    fill: #0288D1;
                }
                
                .creditcard .red {
                    fill: #ef5350;
                }
                
                .creditcard .reddark {
                    fill: #d32f2f;
                }
                
                .creditcard .purple {
                    fill: #ab47bc;
                }
                
                .creditcard .purpledark {
                    fill: #7b1fa2;
                }
                
                .creditcard .cyan {
                    fill: #26c6da;
                }
                
                .creditcard .cyandark {
                    fill: #0097a7;
                }
                
                .creditcard .green {
                    fill: #66bb6a;
                }
                
                .creditcard .greendark {
                    fill: #388e3c;
                }
                
                .creditcard .lime {
                    fill: #d4e157;
                }
                
                .creditcard .limedark {
                    fill: #afb42b;
                }
                
                .creditcard .yellow {
                    fill: #ffeb3b;
                }
                
                .creditcard .yellowdark {
                    fill: #f9a825;
                }
                
                .creditcard .orange {
                    fill: #ff9800;
                }
                
                .creditcard .orangedark {
                    fill: #ef6c00;
                }
                
                .creditcard .grey {
                    fill: #bdbdbd;
                }
                
                .creditcard .greydark {
                    fill: #616161;
                }
                
                /* FRONT OF CARD */
                #svgname {
                    text-transform: uppercase;
                }
                
                #cardfront .st2 {
                    fill: #FFFFFF;
                }
                
                #cardfront .st3 {
                    font-family: 'Source Code Pro', monospace;
                    font-weight: 600;
                }
                
                #cardfront .st4 {
                    font-size: 54.7817px;
                }
                
                #cardfront .st5 {
                    font-family: 'Source Code Pro', monospace;
                    font-weight: 400;
                }
                
                #cardfront .st6 {
                    font-size: 33.1112px;
                }
                
                #cardfront .st7 {
                    opacity: 0.6;
                    fill: #FFFFFF;
                }
                
                #cardfront .st8 {
                    font-size: 24px;
                }
                
                #cardfront .st9 {
                    font-size: 36.5498px;
                }
                
                #cardfront .st10 {
                    font-family: 'Source Code Pro', monospace;
                    font-weight: 300;
                }
                
                #cardfront .st11 {
                    font-size: 16.1716px;
                }
                
                #cardfront .st12 {
                    fill: #4C4C4C;
                }
                
                /* BACK OF CARD */
                #cardback .st0 {
                    fill: none;
                    stroke: #0F0F0F;
                    stroke-miterlimit: 10;
                }
                
                #cardback .st2 {
                    fill: #111111;
                }
                
                #cardback .st3 {
                    fill: #F2F2F2;
                }
                
                #cardback .st4 {
                    fill: #D8D2DB;
                }
                
                #cardback .st5 {
                    fill: #C4C4C4;
                }
                
                #cardback .st6 {
                    font-family: 'Source Code Pro', monospace;
                    font-weight: 400;
                }
                
                #cardback .st7 {
                    font-size: 27px;
                }
                
                #cardback .st8 {
                    opacity: 0.6;
                }
                
                #cardback .st9 {
                    fill: #FFFFFF;
                }
                
                #cardback .st10 {
                    font-size: 24px;
                }
                
                #cardback .st11 {
                    fill: #EAEAEA;
                }
                
                #cardback .st12 {
                    font-family: 'Rock Salt', cursive;
                }
                
                #cardback .st13 {
                    font-size: 37.769px;
                }
                
                /* FLIP ANIMATION */
                .container {
                    perspective: 1000px;
                }
                
                .creditcard {
                    width: 100%;
                    max-width: 400px;
                    -webkit-transform-style: preserve-3d;
                    transform-style: preserve-3d;
                    transition: -webkit-transform 0.6s;
                    -webkit-transition: -webkit-transform 0.6s;
                    transition: transform 0.6s;
                    transition: transform 0.6s, -webkit-transform 0.6s;
                    cursor: pointer;
                }
                
                .creditcard .front,
                .creditcard .back {
                    position: absolute;
                    width: 100%;
                    max-width: 400px;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    -webkit-font-smoothing: antialiased;
                    color: #47525d;
                }
                
                .creditcard .back {
                    -webkit-transform: rotateY(180deg);
                    transform: rotateY(180deg);
                }
                
                .creditcard.flipped {
                    -webkit-transform: rotateY(180deg);
                    transform: rotateY(180deg);
                }


   
                  `}</style>
                    </Helmet>





                 <div className="payment-title">
        <h1>Payment Information</h1>
    </div>
    <div className="container preload">
        <div className="creditcard">
            <div className="front">
                <div id="ccsingle"></div>
                <svg version="1.1" id="cardfront" xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink"
                    x="0px" y="0px" viewBox="0 0 750 471" style={{enableBackground:"new 0 0 750 471"}} space="preserve">
                    <g id="Front">
                        <g id="CardBackground">
                            <g id="Page-1_1_">
                                <g id="amex_1_">
                                    <path id="Rectangle-1_1_" className="lightcolor grey" d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                            C0,17.9,17.9,0,40,0z" />
                                </g>
                            </g>
                            <path className="darkcolor greydark" d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z" />
                        </g>
                        <text transform="matrix(1 0 0 1 60.106 295.0121)" id="svgnumber" className="st2 st3 st4">0123 4567 8910 1112</text>
                        <text transform="matrix(1 0 0 1 54.1064 428.1723)" id="svgname" className="st2 st5 st6">JOHN DOE</text>
                        <text transform="matrix(1 0 0 1 54.1074 389.8793)" className="st7 st5 st8">cardholder name</text>
                        <text transform="matrix(1 0 0 1 479.7754 388.8793)" className="st7 st5 st8">expiration</text>
                        <text transform="matrix(1 0 0 1 65.1054 241.5)" className="st7 st5 st8">card number</text>
                        <g>
                            <text transform="matrix(1 0 0 1 574.4219 433.8095)" id="svgexpire" className="st2 st5 st9">01/23</text>
                            <text transform="matrix(1 0 0 1 479.3848 417.0097)" className="st2 st10 st11">VALID</text>
                            <text transform="matrix(1 0 0 1 479.3848 435.6762)" className="st2 st10 st11">THRU</text>
                            <polygon className="st2" points="554.5,421 540.4,414.2 540.4,427.9 		" />
                        </g>
                        <g id="cchip">
                            <g>
                                <path className="st2" d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
                        c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z" />
                            </g>
                            <g>
                                <g>
                                    <rect x="82" y="70" className="st12" width="1.5" height="60" />
                                </g>
                                <g>
                                    <rect x="167.4" y="70" className="st12" width="1.5" height="60" />
                                </g>
                                <g>
                                    <path className="st12" d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
                            c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
                            C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
                            c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
                            c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z" />
                                </g>
                                <g>
                                    <rect x="82.8" y="82.1" className="st12" width="25.8" height="1.5" />
                                </g>
                                <g>
                                    <rect x="82.8" y="117.9" className="st12" width="26.1" height="1.5" />
                                </g>
                                <g>
                                    <rect x="142.4" y="82.1" className="st12" width="25.8" height="1.5" />
                                </g>
                                <g>
                                    <rect x="142" y="117.9" className="st12" width="26.2" height="1.5" />
                                </g>
                            </g>
                        </g>
                    </g>
                    <g id="Back">
                    </g>
                </svg>
            </div>
            <div className="back">
                <svg version="1.1" id="cardback" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                    x="0px" y="0px" viewBox="0 0 750 471"  space="preserve">
                    <g id="Front">
                        <line className="st0" x1="35.3" y1="10.4" x2="36.7" y2="11" />
                    </g>
                    <g id="Back">
                        <g id="Page-1_2_">
                            <g id="amex_2_">
                                <path id="Rectangle-1_2_" className="darkcolor greydark" d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                        C0,17.9,17.9,0,40,0z" />
                            </g>
                        </g>
                        <rect y="61.6" className="st2" width="750" height="78" />
                        <g>
                            <path className="st3" d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5
                    C707.1,246.4,704.4,249.1,701.1,249.1z" />
                            <rect x="42.9" y="198.6" className="st4" width="664.1" height="10.5" />
                            <rect x="42.9" y="224.5" className="st4" width="664.1" height="10.5" />
                            <path className="st5" d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z" />
                        </g>
                        <text transform="matrix(1 0 0 1 621.999 227.2734)" id="svgsecurity" className="st6 st7">985</text>
                        <g className="st8">
                            <text transform="matrix(1 0 0 1 518.083 280.0879)" className="st9 st6 st10">security code</text>
                        </g>
                        <rect x="58.1" y="378.6" className="st11" width="375.5" height="13.5" />
                        <rect x="58.1" y="405.6" className="st11" width="421.7" height="13.5" />
                        <text transform="matrix(1 0 0 1 59.5073 228.6099)" id="svgnameback" className="st12 st13">John Doe</text>
                    </g>
                </svg>
            </div>
        </div>
    </div>
    <div className="form-container">
        <div className="field-container">
            <label for="name">Name</label>
            <input id="name" maxlength="20" type="text"/>
        </div>
        <div className="field-container">
            <label for="cardnumber">Card Number</label><span id="generatecard">generate random</span>
            <input id="cardnumber" type="text" pattern="[0-9]*" inputmode="numeric"/>
            <svg id="ccicon" className="ccicon" width="750" height="471" viewBox="0 0 750 471" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink">

            </svg>
        </div>
        <div className="field-container">
            <label for="expirationdate">Expiration (mm/yy)</label>
            <input id="expirationdate" type="text" pattern="[0-9]*" inputmode="numeric"/>
        </div>
        <div className="field-container">
            <label for="securitycode">Security Code</label>
            <input id="securitycode" type="text" pattern="[0-9]*" inputmode="numeric"/>
        </div>
    </div>
            </div>
        );
    }
}

export default PayementCard;