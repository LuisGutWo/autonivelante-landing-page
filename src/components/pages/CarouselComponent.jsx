import React from "react";
import CarouselPage from "./CarouselPage";

export default function CarouselComponent() {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const cache = await caches.open(process.env.NEXT_STRAPI_URL);
        const cachedResponse = await cache.match(process.env.NEXT_STRAPI_URL);

        if (cachedResponse) {
          const data = await cachedResponse.json();
          setProducts(data);
          return;
        }

        const response = await fetch(process.env.NEXT_STRAPI_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        await cache.put(
          process.env.NEXT_STRAPI_URL,
          new Response(JSON.stringify(data))
        );
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!products) {
    return null; // or show a loading state
  }

  return (
    <div className="carousel__container">
      <CarouselPage products={products} />
    </div>
  );
}
