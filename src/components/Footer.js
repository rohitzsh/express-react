import React, { Component } from 'react'

export default (props) => {

    const fb_url = props.fb || "#"
    const twitter_url = props.twitter || "#"
    const instagram_url = props.instagram || "#"
    const email_url = props.email || "#"
    const linkedin_url = props.linkedin || "#"
    return (
        <footer className="wrapper style1 align-center">
            <div className="inner">
                <ul className="icons">
                    <li><a href={twitter_url} className="icon brands style2 fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href={fb_url} className="icon brands style2 fa-facebook-f"><span className="label">Facebook</span></a></li>
                    <li><a href={instagram_url} className="icon brands style2 fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href={email_url} className="icon brands style2 fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                    <li><a href={linkedin_url} className="icon style2 fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <p>&copy; Self :) .</p>
            </div>
        </footer>
    )
}
