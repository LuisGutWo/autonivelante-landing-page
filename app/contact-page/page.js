import Layout from '@/components/layout/Layout'
import Contact from '@/components/sections/Contact'
import React from 'react'

const ContactPage = () => {
    return (
        <Layout headerStyle={3} footerStyle={2}>
            <div>
                <Contact />
                {/* Google Map Section */}
                <section className="map-section-two">
                    {/*Map Outer*/}
                    <div className="map-outer">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.8668045591426!2d-70.55583478588042!3d-33.40063900013682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cec66702afe5%3A0x8550b8a6cf82e4f3!2sLas%20Tranqueras%20117%2C%207560382%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1714969175127!5m2!1ses-419!2scl" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </section>
                {/* Google Map Section End */}
            </div>
        </Layout>
    )
}

export default ContactPage
