export const waitSeconds = (time = 0) =>
  new Promise((resolve) => setTimeout(resolve, time));

const getProductData = async () =>
  (await fetch(process.env.NEXT_STRAPI_URL)).json().catch((error) => {
    console.error(error);
    throw new Error("Error al cargar la data");
  });
const getHomeProductData = async () => {
  const cache = await caches.open(process.env.NEXT_STRAPI_HOME_URL);
  const cachedResponse = await cache.match(process.env.NEXT_STRAPI_HOME_URL);

  if (cachedResponse) {
    return cachedResponse.json();
  }

  const response = await fetch(process.env.NEXT_STRAPI_HOME_URL);

  if (!response.ok) {
    throw new Error("Error al cargar la data");
  }

  const data = await response.json();
  await cache.put(
    process.env.NEXT_STRAPI_HOME_URL,
    new Response(JSON.stringify(data))
  );

  return data;
};

export const getSingleProduct = async (id) => {
  const product = await getProductData();
  const singleItem = product.data.find((product) => product.id === id);
  if (!singleItem) {
    return Promise.reject(new Error("Product not found"));
  }
  return singleItem;
};
export const getSingleHomeProduct = async (id) => {
  const product = await getHomeProductData();
  const singleItem = product.data.find((p) => p.id === id);
  if (!singleItem) return Promise.reject(new Error("Product not found"));
  return singleItem;
};
