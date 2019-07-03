import React, { Component } from 'react'

export default (props) => {

    const orient = props.orient || "orient-right"
    const containerClass = "spotlight style1 "+orient+" content-align-left image-position-center onscroll-image-fade-in"
    const title = props.title || "Sample"
    const button = props.button || "button"
    const description = props.description || "description"
    return (
        <section className={containerClass} id="first">
            <div className="content">
                <h2>{title}</h2>
                <p>{description}</p>
                <ul className="actions stacked">
                    <li><a href="#" className="button">{button}</a></li>
                </ul>
            </div>
            <div className="image">
                <img src="images/spotlight01.jpg" alt="" />
            </div>
        </section>
    )

}