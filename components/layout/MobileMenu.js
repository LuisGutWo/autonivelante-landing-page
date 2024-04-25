'use client'
import Link from "next/link"
import { useState } from "react"
import { Image } from "react-bootstrap"


export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="far fa-times" /></div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><Image src="/assets/images/logo_horizontal.png" alt="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li><Link href="/">Home</Link>
                                </li>
                                <li><Link href="#services-section">Services</Link>
                                </li>

                                <li><Link href="#products">Productos</Link>
                                </li>

                                <li><Link href="/contact">Contacto</Link></li>
                            </ul>
                        </div>

                    </div>
                    {/*Social Links*/}
                    <div className="social-links">
                        <ul className="clearfix">

                            <li><Link href="/#"><span className="fab fa-facebook-square" /></Link></li>

                            <li><Link href="/#"><span className="fab fa-instagram" /></Link></li>

                        </ul>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />



        </>
    )
}
