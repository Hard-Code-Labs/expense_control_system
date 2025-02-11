/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    // if (["production", "staging"].includes(Resource.App.stage)) {
    //   return []
    // }
    return [
      {
        source: "/v1/:path*", // Rutas en el cliente
        destination: `${process.env.NEXT_PRIVATE_DOMAIN}/v1/:path*`, // Rutas en el servidor
      },
    ];
  },
};

module.exports = nextConfig;
