import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

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
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="main-text">
                        Oladmeji Odunsi
                    </div>
                    <div className="main-image">
                        <Img fluid={data.poppinShades.childImageSharp.fluid} />
                    </div>
                    <div className="side-image left">
                        <Img fluid={data.sexyOrange.childImageSharp.fluid} />
                    </div>
                    <div className="side-image right">
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