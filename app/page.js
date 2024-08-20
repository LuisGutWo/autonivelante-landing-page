import Layout from "@/src/components/layout/Layout";
import About from "@/src/components/pages/About";
import Banner from "@/src/components/pages/Banner";
import Services from "@/src/components/pages/Services";
import FeaturesBanner from "@/src/components/pages/FeaturesBanner";
import MainFeatures from "@/src/components/pages/MainFeatures";
import ProductsCard from "@/src/components/pages/ProductsCard";
import Contact from "@/src/components/pages/Contact";

export default async function Home() {
  return (
    <Layout headerStyle={3} footerStyle={1}>
      <Banner />
      <FeaturesBanner />
      <About />
      <Services />
      <MainFeatures />
      <ProductsCard />
      <Contact />
    </Layout>
  );
}
