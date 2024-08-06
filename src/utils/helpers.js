export const delayPageLoad = (time = 1500) => {
  // Using a while loop instead of setTimeout for better performance
  const start = performance.now();
  while (performance.now() - start < time);
};

const getProductData = async () => {
  try {
    const res = await fetch(process.env.NEXT_STRAPI_URL);

    if (!res.ok) {
      throw new Error("Error al cargar la data");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Error al cargar la data");
  }
};
const getHomeProductData = async () => {
  try {
    const res = await fetch(process.env.NEXT_STRAPI_HOME_URL);

    if (!res.ok) {
      throw new Error("Error al cargar la data");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Error al cargar la data");
  }
};

export const getSingleProduct = async (id) => {
  try {
    const product = await getProductData();
    if (!product || !product.data) {
      throw new Error("No data found");
    }
    const singleItem = product.data.find((product) => product.id === id);
    if (!singleItem) {
      throw new Error("Product not found");
    }
    return singleItem;
  } catch (error) {
    console.error(error);
    throw new Error("Error while fetching product");
  }
};
export const getSingleHomeProduct = async (id) => {
  try {
    const product = await getHomeProductData();
    if (!product || !product.data) {
      throw new Error("No data found");
    }
    const singleItem = product.data.find((product) => product.id === id);
    if (!singleItem) {
      throw new Error("Product not found");
    }
    return singleItem;
  } catch (error) {
    console.error(error);
    throw new Error("Error while fetching product");
  }
};
