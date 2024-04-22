import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home3/Banner"
import Services from "@/components/sections/home1/Services"
import Features from "@/components/sections/home1/Features"
import Funfacts from "@/components/sections/home1/Funfacts"
import Expertise from "@/components/sections/home1/Expertise"
import WhyChooseUs from "@/components/sections/home1/WhyChooseUs"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner />
                <Features />
                <Services />
                <About />
                <WhyChooseUs />
                <Funfacts />
                <Expertise />
            </Layout>
        </>
    )
}


