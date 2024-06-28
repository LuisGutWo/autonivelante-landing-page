import { Image } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-bottom">
                <div className="container">
                    <div className="copyright text-center">
                        <figure className="footer-logo">
                            <Image src="assets/images/logo_horizontal.png" alt="Autonivelante" />
                        </figure>
                    </div>
                </div>
            </div>
        </footer>
    );
}
