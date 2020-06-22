import React, { useRef, useEffect } from "react"
import { useIntersection } from "react-use"
import { useStaticQuery, graphql, Link } from "gatsby"
import gsap from "gsap"


import Img from "gatsby-image";


const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      flowerMouth: file(relativePath: { eq: "flower-mouth.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fist: file(relativePath: { eq: "fist.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  let section = useRef(null)
  let h3 = useRef(null)
  let p = useRef(null)
  let right = useRef(null);
  let left = useRef(null);
  let overlay = useRef(null)
  let btn = useRef(null)


  const intersection = useIntersection(section, {
    root: null,
    rootMargin: "0px",
    threshold: 0.8
  })



  useEffect(() => {

    // let tl = gsap.timeline()
    // tl.from(h3, {
    //   duration: 1,
    //   opacity: 0,
    //   y: 30,
    //   ease: "power3.inOut"
    // })
    // .from(p, {
    //   delay: -0.2,
    //   duration: 1,
    //   opacity: 0,
    //   y: 30,
    //   ease: "power3.inOut"
    // }).to(overlay, {
    //   delay: -0.2,
    //   duration: 1,
    //   height: 0,
    //   ease: "power3.inOut"
    // }).from(left, {
    //   delay: -0.2,
    //   duration: 1,
    //   x: -50,
    //   scale: 1.2,
    //   opacity: 0
    // }).from(right, {
    //   delay: -0.2,
    //   duration: 1,
    //   x: 50,
    //   scale: 1.4,
    //   opacity: 0
    // })
    intersection && intersection.intersectionRatio < 0.8 ? gsap.to(h3, {
      duration: 1,
      opacity: 0,
      y: -30,
      ease: "power3.inOut"
    }) : gsap.to(h3, {
      duration: 1,
      opacity: 1,
      y: -50,
      ease: "power3.inOut"
    })


  })






  return (
    <div className="about-blurb" ref={el => section = el}>
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3 ref={el => h3 = el}> The Ability to Create</h3>
            <p ref={el => p = el}>It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here,
            content here’, making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for ‘lorem ipsum’ will
            uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).</p>
            <div className="btn-row" >
              <div ref={el => overlay = el} className="btn-overlay"></div>
              <Link to="/work" ref={el => btn = el}>View Series</Link>
            </div>
          </div>
          <div className="images">
            <div className="blurb-img right" ref={el => right = el}>
              <Img fluid={data.fist.childImageSharp.fluid} />
            </div>
            <div className="blurb-img left" ref={el => left = el}>
              <Img fluid={data.flowerMouth.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>

    </div>
  )
}


export default AboutBlurb