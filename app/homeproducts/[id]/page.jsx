import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import MainCardDetail from "@/src/components/elements/cards/MainCardDetail";
import { notFound } from "next/navigation";
// import { fetchHomeProduct } from "@/src/lib/api";

async function getHomeSingleProducts(id) {
  if (typeof id !== "string" || !id) {
    throw new Error("getHomeSingleProducts: Invalid id");
  }

  const res = await fetch(`${process.env.NEXT_STRAPI_HOME_URL}/${id}`);

  if (!res.ok) {
    throw new Error(
      `getHomeSingleProducts: Failed to fetch product ${id}, status: ${res.status}`
    );
  }

  return res.json();
}

export default async function SingleHomeProduct({ params }) {
  try {
    const data = await getHomeSingleProducts(params.id);

    if (!data || !data.data || !data.data[params.id]) {
      notFound();
    }

    const product = data.data[params.id];

    if (!product || !product.attributes) {
      throw new Error("getHomeSingleProducts: Product not found");
    }

    console.log(product);

    return (
      <Layout headerStyle={4} footerStyle={1}>
        <Container className="mt_150 mb_200">
          <Breadcrumb
            items={[
              { name: "Productos", href: "/#products" },
              {
                name: product.attributes.title,
                href: "/#products",
              },
            ]}
          />
          <MainCardDetail product={product} />
        </Container>
      </Layout>
    );
  } catch (error) {
    console.error("SingleHomeProduct:", error);
    notFound();
  }
}
