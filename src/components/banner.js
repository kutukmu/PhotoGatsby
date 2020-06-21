import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="main-text">
                        Oladmeji Odunsi
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Banner