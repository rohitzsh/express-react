import React, { Component } from 'react'

export default (props) => {

        const title = props.title || "Title"
        const gallery_title = ["1", "2", "3"]

        return (
                <section className="wrapper style1 align-center">
                        <div className="inner">
                            <h2>{title}</h2>
                            <p>This is a <strong>Gallery</strong> element. It can behave as a lightbox (when given the <code>lightbox</code> className), and you can customize its <span className="demo-controls">appearance with a number of modifiers</span>, as well as assign it an optional <code>onload</code> or <code>onscroll</code> transition modifier (<a href="#reference-gallery">details</a>).</p>
                        </div>

                            <div className="gallery style2 medium lightbox onscroll-fade-in">
                                { gallery_title.map((value, index) => {
                                   return  <article>
                                    <a href="images/gallery/fulls/01.jpg" className="image">
                                        <img src="images/gallery/thumbs/01.jpg" alt="" />
                                    </a>
                                    <div className="caption">
                                        <h3>{value}</h3>
                                        <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
                                        <ul className="actions fixed">
                                            <li><span className="button small">Details</span></li>
                                        </ul>
                                    </div>
                                </article>})}
                            </div>

                </section>

            )
}
