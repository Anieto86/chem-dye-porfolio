import React from 'react'
import styled from 'styled-components'

const Imgstyle = styled.img`
  height: 100%; 
  width: 25%;
`;


export default function Publish(props) {
    return (
        <div className="container">
            <div className="container card mb-3" style={{ width: "25rem", float: "left", margin: "5px" }}>
                <h3>Publish Work</h3>
                <Imgstyle src={props.photo} className="card-img-top" alt="/" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    )
}
