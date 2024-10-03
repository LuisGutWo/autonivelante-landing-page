export async function fetchProducts() {
  if (!process.env.NEXT_STRAPI_URL) {
    throw new Error(
      "fetchProducts: NEXT_STRAPI_URL is not defined. Make sure you have set the environment variable."
    );
  }

  const res = await fetch(process.env.NEXT_STRAPI_URL);

  if (!res.ok) {
    throw new Error(
      `fetchProducts: Failed to fetch products, status: ${res.status}`
    );
  }

  const data = await res.json();
  if (!data) {
    throw new Error("fetchProducts: No data was returned from the API");
  }

  return data;
}

export async function fetchHomeProduct() {
  if (!process.env.NEXT_STRAPI_HOME_URL) {
    throw new Error(
      "fetchProducts: NEXT_STRAPI_URL is not defined. Make sure you have set the environment variable."
    );
  }

  const res = await fetch(process.env.NEXT_STRAPI_HOME_URL);

  if (!res.ok) {
    throw new Error(
      `fetchProducts: Failed to fetch products, status: ${res.status}`
    );
  }

  const data = await res.json();
  if (!data) {
    throw new Error("fetchProducts: No data was returned from the API");
  }

  return data;
}
