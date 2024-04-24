

import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Image } from "react-bootstrap"
export default function Error404() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="404 Error">
            <section className="error-section p_relative centred">
                <div className="auto-container">
                    <div className="inner-box">
                        <figure className="error-image">
                            <Image src="assets/images/icons/error-1.png" alt="" />
                        </figure>
                        <h2>Oops! Esta pagina no se<br />Encontró.</h2>
                        <Link href="/" className="theme-btn-one">
                            <i className="icon-5"></i>Pagina principal
                        </Link>
                    </div>
                </div>
            </section>

            </Layout>
        </>
    )
}
