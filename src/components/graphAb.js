import React from 'react'




//import styled from 'styled-components'

export default function GraphAb(props) {
    return (
        <div className="card-columns container">
            <div className="card">
                <img src={props.photo} className="card-img-top" alt="/" />
                <div className="card-body">
                    <h5 className="card-title">graph component</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>

    )
}
