import React from "react"
import vogue from "../images/vogue.png"
import wgsn from "../images/wgsn.png"
import afro from "../images/afropunk.png"
import creative from "../images/creative-boom.png"
import twitter from "../svg/twitter.svg"
import instagram from "../svg/instagram.svg"

const imgarr = [
    { url: vogue, name: "vogue" },
    { url: wgsn, name: "wgsn" },
    { url: afro, name: "Afro" },
    { url: creative, name: "creative" },
]




const Footer = () => {





    return (
        <div className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-brands">
                        {imgarr.map(n => {
                            return <div className="brand">
                                <img src={`${n.url}`} alt={n.name}></img>
                            </div>
                        })}
                    </div>
                    <div className="footer-social">
                        <span>© 2019 OladimejI Odunsi</span>
                        <div className="socials">
                            <a href="/">
                                <img src={twitter} alt="Twitter" />
                            </a>
                            <a href="/">
                                <img src={instagram} alt="Instagram" />
                            </a>
                        </div>
                        <span>letscreate@oladimeg.com</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer