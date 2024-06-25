const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/products/:id",
        destination: "/products/[id]",
        source: "/card-detail-1/:id",
        destination: "/card-detail-1",
      },
    ];
  },
};

export default nextConfig;
