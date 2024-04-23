import VideoPopup from "@/components/elements/VideoPopup"
import { Image } from "react-bootstrap"
export default function About() {
    return (
        <>
            <section className="about-section p_relative">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_one">
                                <div className="image-box p_relative pr_50 mr_30">
                                    <figure className="image image-1"><Image src="assets/images/resource/about-1.jpg" alt="" /></figure>
                                    <div className="video-inner">
                                        <div className="video-btn">
                                            <VideoPopup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_one">
                                <div className="content-box p_relative ml_30">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
