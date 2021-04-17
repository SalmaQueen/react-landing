import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Cards extends Component {
    render() {
        return (
            <div>

             <Helmet>
                <style type="text/css">{`
                body,
                html {
                  height: 100%;
                  color:white;
                }
                
                .d-flex {
                  display: -webkit-box;
                  display: -ms-flexbox;
                  display: flex;
                }
                
                .align-center {
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  align-items: center;
                }
                
                .flex-centerY-centerX {
                  justify-content: center;
                  -webkit-box-pack: center;
                  -ms-flex-pack: center;
                  justify-content: center;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  align-items: center;
                }
                
                body {
                  background-color: #f7f7f7;
                }
                
                .page-wrapper {
                  height: 100%;
                  display: table;
                    border-radius: 20px;
                    background: blue;
                    padding: 15px;
                    width: 200px;
                    height: 150px;
                
                }
                
                .page-wrapper .page-inner {
                  display: table-cell;
                  vertical-align: middle;
                }
                
                .el-wrapper {
                  width: 360px;
                  padding: 15px;
                  margin: 15px auto;
                  background-color: gray;
                  color:white;
                }
                
                @media (max-width: 991px) {
                  .el-wrapper {
                    width: 345px;
                  }
                }
                
                @media (max-width: 767px) {
                  .el-wrapper {
                    width: 290px;
                    margin: 30px auto;
                  }
                }
                
                .el-wrapper:hover .h-bg {
                  left: 0px;
                }
                
                .el-wrapper:hover .price {
                  left: 20px;
                  -webkit-transform: translateY(-50%);
                  -ms-transform: translateY(-50%);
                  -o-transform: translateY(-50%);
                  transform: translateY(-50%);
                  color: white;
                }
                
                .el-wrapper:hover .add-to-cart {
                  left: 50%;
                }
                
                .el-wrapper:hover .img {
                  webkit-filter: blur(7px);
                  -o-filter: blur(7px);
                  -ms-filter: blur(7px);
                  filter: blur(7px);
                  filter: progid:DXImageTransform.Microsoft.Blur(pixelradius='7', shadowopacity='0.0');
                  opacity: 0.4;
                }
                
                .el-wrapper:hover .info-inner {
                  bottom: 155px;
                }
                
                .el-wrapper:hover .a-size {
                  -webkit-transition-delay: 300ms;
                  -o-transition-delay: 300ms;
                  transition-delay: 300ms;
                  bottom: 50px;
                  opacity: 1;
                }
                
                .el-wrapper .box-down {
                  width: 100%;
                  height: 60px;
                  position: relative;
                  overflow: hidden;
                }
                
                .el-wrapper .box-up {
                  width: 100%;
                
                  position: relative;
                  overflow: hidden;
                  text-align: center;
                }
                
                .el-wrapper .img {
                  padding: 20px 0;
                  -webkit-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
                  -moz-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
                  -o-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
                  transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
                  /* ease-out */
                  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  /* ease-out */
                }
                
                .h-bg {
                  -webkit-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
                  -moz-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
                  -o-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
                  transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
                  /* ease-out */
                  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  /* ease-out */
                  width: 660px;
                  height: 100%;
                  background-color: #3f96cd;
                  position: absolute;
                  left: -659px;
                }
                
                .h-bg .h-bg-inner {
                  width: 50%;
                  height: 100%;
                  background-color: #464646;
                }
                
                .info-inner {
                  -webkit-transition: all 400ms cubic-bezier(0, 0, 0.18, 1);
                  -moz-transition: all 400ms cubic-bezier(0, 0, 0.18, 1);
                  -o-transition: all 400ms cubic-bezier(0, 0, 0.18, 1);
                  transition: all 400ms cubic-bezier(0, 0, 0.18, 1);
                  /* ease-out */
                  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  /* ease-out */
                  position: absolute;
                  width: 100%;
                  bottom: 25px;
                }
                
                .info-inner .p-name,
                .info-inner .p-company {
                  display: block;
                }
                
                .info-inner .p-name {
                  font-family: 'PT Sans', sans-serif;
                  font-size: 18px;
                  color: #252525;
                }
                
                .info-inner .p-company {
                  font-family: 'Lato', sans-serif;
                  font-size: 12px;
                  text-transform: uppercase;
                  color: #8c8c8c;
                }
                
                .a-size {
                  -webkit-transition: all 300ms cubic-bezier(0, 0, 0.18, 1);
                  -moz-transition: all 300ms cubic-bezier(0, 0, 0.18, 1);
                  -o-transition: all 300ms cubic-bezier(0, 0, 0.18, 1);
                  transition: all 300ms cubic-bezier(0, 0, 0.18, 1);
                  /* ease-out */
                  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  /* ease-out */
                  position: absolute;
                  width: 100%;
                  bottom: -20px;
                  font-family: 'PT Sans', sans-serif;
                  color: #828282;
                  opacity: 0;
                }
                
                .a-size .size {
                  color: #252525;
                }
                
                .cart {
                  display: block;
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  font-family: 'Lato', sans-serif;
                  font-weight: 700;
                }
                
                .cart .price {
                  -webkit-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
                  -moz-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
                  -o-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
                  transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
                  /* ease-out */
                  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  /* ease-out */
                  -webkit-transition-delay: 100ms;
                  -o-transition-delay: 100ms;
                  transition-delay: 100ms;
                  display: block;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  -webkit-transform: translate(-50%, -50%);
                  -ms-transform: translate(-50%, -50%);
                  -o-transform: translate(-50%, -50%);
                  transform: translate(-50%, -50%);
                  font-size: 16px;
                  color: white
                }
                
                .cart .add-to-cart {
                  -webkit-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
                  -moz-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
                  -o-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
                  transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
                  /* ease-out */
                  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
                  /* ease-out */
                  -webkit-transition-delay: 100ms;
                  -o-transition-delay: 100ms;
                  transition-delay: 100ms;
                  display: block;
                  position: absolute;
                  top: 50%;
                  left: 110%;
                  -webkit-transform: translate(-50%, -50%);
                  -ms-transform: translate(-50%, -50%);
                  -o-transform: translate(-50%, -50%);
                  transform: translate(-50%, -50%);
                }
                
                .cart .add-to-cart .txt {
                  font-size: 12px;
                  color: white;
                  letter-spacing: 0.045em;
                  text-transform: uppercase;
                  white-space: nowrap;
                }
                
                .img-rounded{
                  width:50%;
                  border-radius:50%;
                  
                  
                }


   
                  `}</style>
                    </Helmet>


                    <div className="container page-wrapper" style={{marginBottom:"3rem"}}>

    <div className="row">
      <div className="el-wrapper">
        <div className="box-up mt-4">
        <span>  
  <img src="https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="img-rounded float-left"/>
  
   <h5 style={{float:"right", width:"40%"}}>No of clicks of the property</h5>
   
  </span>
  
    
        </div>
        <hr style={{border:"10px solid orange"}}/>
        <h5>No of people who got your contact</h5>
        <hr style={{border:"10px solid orange"}}/>
        <h3>Period left: 2 Days</h3>
        <hr style={{border:"10px solid orange"}}/>



        <div className="box-down">
          <div className="h-bg">
            <div className="h-bg-inner"></div>
          </div>

          <a className="cart" href="#">
            <span className="price text-white">$120</span>
            <span className="add-to-cart">
              <span className="txt">Add in cart</span>
            </span>
          </a>
        </div>
      </div>





      
    </div>

  </div>

  <button type="button" className="btn btn-rounded  mb-4" style={{width:"30%", padding:"10px", backgroundColor:"orange"}}>Finish</button>
   
            </div>
        );
    }
}

export default Cards;