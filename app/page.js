import Layout from "@/src/components/layout/Layout";
import About from "@/src/components/sections/About";
import Banner from "@/src/components/sections/Banner";
import Services from "@/src/components/sections/Services";
import FeaturesBanner from "@/src/components/sections/FeaturesBanner";
import MainFeatures from "@/src/components/sections/MainFeatures";
import ProductsCard from "@/src/components/sections/ProductsCard";
import Contact from "@/src/components/sections/Contact";

import { waitSeconds } from "@/src/utils/helpers";

export default async function Home() {
  await waitSeconds(1000);

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
