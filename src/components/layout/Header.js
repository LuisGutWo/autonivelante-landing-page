import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { Button, Image, Modal } from "react-bootstrap";
import { useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function Header(props) {
  const { scroll, isMobileMenu, handleMobileMenu, isSidebar } = props;

  const [showCartSend, setShowCartSend] = useState(false);
  const handleCloseCartSend = () => setShowCartSend(false);
  const handleShowCartSend = () => setShowCartSend(true);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      0
    </Tooltip>
  );

  return (
    <>
      <header
        className={`main-header header-style-three ${
          scroll ? "fixed-header" : ""
        }`}
      >
        {/* header-lower */}
        <div className="header-lower">
          <div className="outer-container">
            <div className="outer-box">
              <div className="logo-box">
                <Link href="/">
                  <figure className="logo">
                    <Image src="assets/images/logo_horizontal.png" alt="" />
                  </figure>
                </Link>
              </div>
              <div className="menu-area clearfix">
                {/* Mobile Navigation Toggler */}
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <Menu />
                  </div>
                </nav>
              </div>
              <ul className="menu-right-content">
                <li className="cart-box">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 200, hide: 600 }}
                    overlay={renderTooltip}
                  >
                    <Button
                      style={{ backgroundColor: "transparent", border: "0" }}
                      onClick={handleShowCartSend}
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-bag-heart"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
                        />
                      </svg>
                    </Button>
                  </OverlayTrigger>

                  <Modal show={showCartSend} onHide={handleCloseCartSend}>
                    <Modal.Header closeButton>
                      <Modal.Body>
                        Hola... Gracias por visitarnos. Si deseas obtener
                        nuestros productos y servicios conéctate con nosotros,
                        te responderemos de inmediato.
                      </Modal.Body>
                    </Modal.Header>
                    <Modal.Footer>
                      <Link href="/contact-page">
                        <Button variant="primary" onClick={handleCloseCartSend}>
                          Escríbenos
                        </Button>
                      </Link>
                    </Modal.Footer>
                  </Modal>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sticky Header */}
        <div
          className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}
        >
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <Link href="/">
                  <figure className="logo">
                    <Image
                      src="assets/images/logo_horizontal_black.png"
                      alt=""
                    />
                  </figure>
                </Link>
              </div>
              <div className="menu-area clearfix">
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <Menu />
                  </div>
                </nav>
              </div>
              <ul className="menu-right-content">
                <li className="cart-box">
                  <Button
                    style={{ backgroundColor: "transparent", border: "0" }}
                    onClick={handleShowCartSend}
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="dark"
                      className="bi bi-bag-heart"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
                      />
                    </svg>
                  </Button>
                  <Modal show={showCartSend} onHide={handleCloseCartSend}>
                    <Modal.Header closeButton>
                      <Modal.Body>
                        Hola... Gracias por visitarnos. Si deseas obtener
                        nuestros productos y servicios conéctate con nosotros,
                        te responderemos de inmediato.
                      </Modal.Body>
                    </Modal.Header>
                    <Modal.Footer>
                      <Link href="/contact-page">
                        <Button variant="primary" onClick={handleCloseCartSend}>
                          Escríbenos
                        </Button>
                      </Link>
                    </Modal.Footer>
                  </Modal>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu handleMobileMenu={handleMobileMenu} />
    </>
  );
}
