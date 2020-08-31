import React from 'react'

//style
import './porfolio.css'



// const photoStyle = {
//     margin: "10px",
//     width: "420px",
//     height: "420px"
// }



export default function Porfolio(props) {
    return (
        <div className="container card mb-3">
        <img src={props.photo} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      );
}
