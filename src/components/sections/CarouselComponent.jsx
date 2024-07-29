import React from "react";
import CarouselPage from "./CarouselPage";
import { waitSeconds } from "@/src/utils/helpers";
import { getData } from "@/src/lib/getData";
export default async function CarouselComponent() {
  const products = (await getData(process.env.NEXT_STRAPI_URL)) ?? [];
  await waitSeconds(1500);

  return (
    <div className="carousel__container">
      <CarouselPage products={products} />
    </div>
  );
}
