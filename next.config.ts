import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // esconde o botão "N" do Next no `npm run dev` (erros de compilação/execução continuam aparecendo)
  devIndicators: false,
  // libera os assets de dev para quem acessa pelo IP da rede local (Ethernet e Wi-Fi desta máquina)
  allowedDevOrigins: ["192.168.63.29", "192.168.63.68"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
