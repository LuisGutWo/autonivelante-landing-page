export async function fetchProducts() {
  const res = await fetch(process.env.NEXT_STRAPI_URL);
  const data = await res.json();
  return data;
}

export async function fetchProductData(id) {
  const res = await fetch(`${process.env.NEXT_STRAPI_URL}${id}`);
  const data = await res.json();
  return data;
}

export async function fetchHomeProducts() {
  const res = await fetch(process.env.NEXT_STRAPI_HOME_URL);
  const data = await res.json();
  return data;
}

export async function fetchHomeProduct(id) {
  const res = await fetch(`${process.env.NEXT_STRAPI_HOME_URL}${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  const product = await res.json();
  return product;
}
