import Layout from "@/src/components/layout/Layout";
import Contact from "@/src/components/sections/Contact";
import ContactGoogleMap from "@/src/components/sections/ContactGoogleMap";

export default function ContactPage() {
  return (
    <Layout headerStyle={4} footerStyle={1}>
      <div>
        <Contact />
        <ContactGoogleMap />
      </div>
    </Layout>
  );
}
