import Layout from "@/src/components/layout/Layout";
import Contact from "@/src/components/pages/Contact";
import ContactGoogleMap from "@/src/components/pages/ContactGoogleMap";

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
