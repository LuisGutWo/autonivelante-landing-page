import React from "react";
import CarouselPage from "./CarouselPage";

async function getData() {
  const products = await fetch(process.env.NEXT_STRAPI_URL);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!products.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return products.json();
}
export default async function CarouselComponent() {
  const products = await getData();

  return (
    <div className="carousel__container">
      <CarouselPage products={products} />
    </div>
  );
}
