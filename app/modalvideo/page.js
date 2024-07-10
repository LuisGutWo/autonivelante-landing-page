'use client'
// import VideoPopup from '@/components/elements/VideoPopup'
import Link from 'next/link'
import Layout from "@/src/components/layout/Layout"
import { Container } from 'react-bootstrap'
import ReactPlayer from 'react-player'



const ModalVideoPage = () => {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <section className="modalvideo__section">
                <Container>
                    <div className="video-inner">
                        <div className="video-btn">
                            <ReactPlayer url='https://youtu.be/tBoRtfl5Kfk?si=MC9GvXxcMg9sVwZ8' controls={false} width="52vw" height="69vh" loop playsinline={true}/>
                        </div>
                        <div className="exit__button-card">
                        <Link href="/#about-section">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg>
                        </Link>
                    </div>
                    </div>
                </Container>
            </section>
        </Layout>
    )
}

export default ModalVideoPage
