'use client'
import VideoPopup from '@/components/elements/VideoPopup'
import Link from 'next/link'
import { Container } from 'react-bootstrap'



const ModalVideoPage = () => {
    return (
        <section class="modalvideo__section">
            <Container>

                <div className="video-inner">
                    <div className="video-btn">
                        <VideoPopup />
                    </div>
                </div>
                <div className="exit__button-card">
                    <Link href="/#about">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </Link>
                </div>

            </Container>
        </section>
    )
}

export default ModalVideoPage
