import React, { useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image";
import gsap from "gsap"
const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      poppinShades: file(relativePath: { eq: "poppin-shades.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      sexyOrange: file(relativePath: { eq: "sexy-orange.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      diamonds: file(relativePath: { eq: "diamonds.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


    let main = useRef(null)
    let left = useRef(null)
    let right = useRef(null)


    useEffect(() => {


        gsap.from(main, {
            duration: 1,
            opacity: 0,
            y: 50
        })

        gsap.from(left, {
            delay: 0.5,
            duraiton: 1,
            opacity: 0,
            x: -20
        })

        gsap.from(right, {
            delay: 0.5,
            duraiton: 1,
            opacity: 0,
            x: 20
        })






    })
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="main-text">
                        Oladmeji Odunsi
                    </div>
                    <div className="main-image" ref={el => main = el}>
                        <Img fluid={data.poppinShades.childImageSharp.fluid} />
                    </div>
                    <div className="side-image left" ref={el => left = el}>
                        <Img fluid={data.sexyOrange.childImageSharp.fluid} />
                    </div>
                    <div className="side-image right" ref={el => right = el}>
                        <Img fluid={data.diamonds.childImageSharp.fluid} />
                    </div>
                </div>

                <div className="scroll">
                    <span>Scroll Down</span>
                </div>
            </div>

            <div className="fixed-misc">
                Visual Artist And Photographer
            </div>
        </div>
    )
}


export default Banner