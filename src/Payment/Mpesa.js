import React, { Component } from 'react';

class Mpesa extends Component {
    render() {
        return (
            <div>
                

<div className="container">
  <div className="row g-0">
   
    <div className="col-md-12">
      <div className="card-body" style={{marginTop:"4rem"}}>
        <h5 className="card-title text-white">Phone No</h5>
        <p className="card-text text-white">0727060200</p>

      </div>
    </div>
    <div className="col-md-6">
      <img style={{width:"100%",height:"50%", float:"right"}} src={"data:image/png;base64,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"} alt="..."/>
      <span>    <button href="#" style={{margiLeft:"2rem", backgroundColor:"orange", padding:"15px", borderRadius:"30px"}}>Submit</button>
</span>
    </div>

  </div>

</div>
</div>
        );
    }
}

export default Mpesa;