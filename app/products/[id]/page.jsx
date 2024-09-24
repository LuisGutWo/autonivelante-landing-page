import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import MainCardDetail from "@/src/components/elements/cards/MainCardDetail";
import CarouselComponent from "@/src/components/elements/CarouselComponent";
import { fetchProductData } from "@/src/lib/api";

export default async function SingleProduct({ params }) {
  try {
    const response = await fetchProductData(params.id);
    const product = response.data[params.id];

    if (!product || !product.attributes) {
      return <div>Product not found</div>;
    }

    return (
      <Layout headerStyle={4} footerStyle={1}>
        <Container className="mt_150 mb_200">
          <Breadcrumb
            items={[
              { name: "Productos", href: "/products" },
              {
                name: product.attributes.title,
                href: `/products/${product.id}`,
              },
            ]}
          />
          <MainCardDetail product={product} key={product.id} />
          <CarouselComponent product={product} key={product.id} />
        </Container>
      </Layout>
    );
  } catch (error) {
    console.log("Error fetching product:", error);
    return <div>Error fetching product</div>;
  }
}
