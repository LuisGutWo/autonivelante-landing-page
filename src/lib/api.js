export async function fetchProduct(id) {
    const res = await fetch(`${process.env.NEXT_STRAPI_URL}${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }
    const product = await res.json();
    return product;
  }
export async function fetchHomeProduct(id) {
    const res = await fetch(`${process.env.NEXT_STRAPI_HOME_URL}${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }
    const product = await res.json();
    return product;
  }