const nextConfig = {
  // output: "export",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },

  env: {
    NEXT_SERVICE_ID: "service_3k8blmt",
    NEXT_TEMPLATE_ID: "template_c7njbme",
    NEXT_PUBLIC_KEY: "t44F1vh8sWatI9HKy",
    NEXT_API_KEY: "AIzaSyD-4JPf9lnx84WGlPqv5G59gyEJExw0qcM",
    NEXT_AUTH_DOMAIN: "autonivelante-products.firebaseapp.com",
    NEXT_PROJECT_ID: "autonivelante-products",
    NEXT_STORAGE_BUCKET: "autonivelante-products.appspot.com",
    NEXT_MESSAGING_SENDER_ID: "116110783649",
    NEXT_APP_ID: "1:116110783649:web:fca681105f3ec82b9d2ce0",
    NEXT_URL:
      "https://autonivelante-strapi-server.onrender.com/api",
    NEXT_STRAPI_URL:
      "https://autonivelante-strapi-server.onrender.com/api/autonivelante-products?sort=id&populate=*",
    NEXT_STRAPI_HOME_URL:
      "https://autonivelante-strapi-server.onrender.com/api/autonivelante-home-products?sort=id&populate=*",
    NEXT_STRAPI_PROJECTS_URL:
      "https://autonivelante-strapi-server.onrender.com/api/autonivelante-projects?populate=*",
    NGROK_AUTHTOKEN:
      "2jJMjf9IQ51Y4YpxJS8vP1EGyEm_5qW5zG4ofWP2uFxWkcCj5 node index.js",
  },
};

export default nextConfig;
