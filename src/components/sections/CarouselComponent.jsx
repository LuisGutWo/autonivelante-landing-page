import React from "react";
import CarouselPage from "./CarouselPage";
import { getData } from "@/src/lib/getData";
export default async function CarouselComponent() {
  const products = (await getData(process.env.NEXT_STRAPI_URL)) ?? [];

  return (
    <div className="carousel__container">
      <CarouselPage products={products} />
    </div>
  );
}
