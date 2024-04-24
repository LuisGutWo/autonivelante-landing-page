import Layout from "@/components/layout/Layout"
import About from "@/components/sections/About"
import Banner from "@/components/sections/Banner"
import Services from "@/components/sections/Services"
import FeaturesBanner from "@/components/sections/FeaturesBanner"
import MainFeatures from "@/components/sections/MainFeatures"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner />
                <FeaturesBanner />
                <Services />
                <About />
                <MainFeatures />
            </Layout>
        </>
    )
}


