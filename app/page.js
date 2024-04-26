import Layout from "@/components/layout/Layout"
import About from "@/components/sections/About"
import Banner from "@/components/sections/Banner"
import Services from "@/components/sections/Services"
import FeaturesBanner from "@/components/sections/FeaturesBanner"
import MainFeatures from "@/components/sections/MainFeatures"
import ProductsCard from "@/components/sections/ProductsCard"
import Contact from "@/components/sections/Contact"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner />
                <FeaturesBanner />
                <Services />
                <About />
                <MainFeatures />
                <ProductsCard />
                {/* <Contact /> */}
            </Layout>
        </>
    )
}


