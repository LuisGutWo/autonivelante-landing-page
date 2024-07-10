const nextConfig = {
  // output: 'export',
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
  env: {
    NEXT_SERVICE_ID: "service_3k8blmt",
    NEXT_TEMPLATE_ID: "template_c7njbme",
    NEXT_PUBLIC_KEY: "t44F1vh8sWatI9HKy",
  },
};

export default nextConfig;
