import Layout from "@/components/layout/Layout"
import About from "@/components/sections/About"
import Banner from "@/components/sections/Banner"
import Services from "@/components/sections/Services"
import Features from "@/components/sections/Features"
import Expertise from "@/components/sections/Expertise"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner />
                <Features />
                <Services />
                <About />
                <WhyChooseUs />
                <Expertise />
            </Layout>
        </>
    )
}


