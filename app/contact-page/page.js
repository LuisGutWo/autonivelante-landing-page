import Layout from '@/components/layout/Layout'
import Contact from '@/components/sections/Contact'
import React from 'react'

const ContactPage = () => {
    return (
        <Layout headerStyle={3} footerStyle={2}>
            <div>
                <Contact />
            </div>
        </Layout>
    )
}

export default ContactPage
