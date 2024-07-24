import React from "react";
import CarouselPage from "./CarouselPage";
import { waitSeconds } from "@/src/utils/helpers";
export default async function CarouselComponent() {
  const products = await fetch(process.env.NEXT_STRAPI_URL)
    .then((response) => response.json())
    .catch((error) => {
      throw new Error("Error al cargar la data");
    });

  if (!products || !products.data) {
    throw new Error("No data found");
  }

  await waitSeconds(1500);

  return (
    <div className="carousel__container">
      <CarouselPage products={products.data} />
    </div>
  );
}
