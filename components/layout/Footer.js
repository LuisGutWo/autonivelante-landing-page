import { Image } from "react-bootstrap"

export default function Footer() {
    return (
        <>
            <footer className="main-footer">
                <div className="footer-bottom centred">
                    {/* <div className="pattern-layer">
                        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-20.png)' }}></div>
                        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-21.png)' }}></div>
                    </div> */}
                    <div className="auto-container">
                        <div className="copyright">
                            <figure className="footer-logo">
                                <Image src="assets/images/logo_horizontal.png" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
