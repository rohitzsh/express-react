import React, { Component } from 'react'

export default (props) => {

    const orient = props.orient || "orient-left"
    const containerClass = "banner style1 "+orient+" content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right"
    const title = props.title || "Sample"
    const description = props.description || "description"
    const button = props.button || "button"
    return (
        <section className={containerClass}>
            <div className="content">
                <h1>{title}</h1>
                <p className="major">{description}</p>
                <ul className="actions stacked">
                    <li><a href="#first" className="button big wide smooth-scroll-middle">{button}</a></li>
                </ul>
            </div>
            <div className="image">
                <img src="images/banner.jpg" alt="" />  
            </div>
        </section>
    );

}
