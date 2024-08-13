import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import { getSingleProduct } from "@/src/utils/helpers";
import MainCardDetail from "@/app/products/product/MainCardDetail";
import CarouselComponent from "@/src/components/sections/CarouselComponent";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  // Lógica para obtener todos los IDs de productos
  const paths = [{ params: { product: "products/product" } }];
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  // Lógica para obtener los datos del producto basado en params.product
  const productData = { id: params.product, name: "Producto Ejemplo" };
  return { props: { product: productData } };
}

const NotFoundProduct = () => <div>No se encontró el producto</div>;

export default async function SingleProduct({ products }) {
  if (!products) {
    return <NotFoundProduct />;
  }

  const id = Number(products);

  try {
    const product = await getSingleProduct(id);
    if (!product) {
      return <NotFoundProduct />;
    }

    return (
      <Layout headerStyle={4} footerStyle={1}>
        <Container className="mt_150 mb_200">
          <Breadcrumb
            items={[
              { name: "Productos", href: "/products" },
              { name: `${product?.attributes?.title}`, href: `products/${id}` },
            ]}
          />
          <MainCardDetail product={product} />
        </Container>
        <CarouselComponent />
      </Layout>
    );
  } catch (error) {
    console.error(error);
    return <NotFoundProduct />;
  }
}
