'use client';
import Link from "next/link";
import { useCallback, useState } from "react";
import { Image } from "react-bootstrap";
import { menuList } from "@/src/config/menu";

export default function MobileMenu(props) {
    const { isSidebar, handleMobileMenu, handleSidebar } = props;
    
    const [ isActive, setIsActive ] = useState({
        status: false,
        key: "",
    });

    const handleToggle = useCallback((key) => {
        if( isActive.key === key ){
            setIsActive({ status: false });
        } else {
            setIsActive({ status: true, key });
        }
    }, [isActive]);

    return (
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="far fa-times" /></div>

                <nav className="menu-box">
                    <div className="nav-logo">
                        <Link href="/">
                            <Image src="/assets/images/logo_horizontal.png" alt="" />
                        </Link>
                    </div>

                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                            { menuList.map((item, i) => 
                                <li key={i}>
                                    <Link href={item.route}>
                                        { item.name }
                                    </Link>
                                </li>
                            )}
                            </ul>
                        </div>
                    </div>

                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="/#"><span className="fab fa-facebook-square" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-instagram" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div
                className="nav-overlay"
                style={{ display: `${isSidebar ? "block" : "none"}` }}
                onClick={handleSidebar}
            />
        </>
    )
}
