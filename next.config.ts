import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,  // Игнорировать ошибки типов в процессе сборки
  },
  // Другие параметры конфигурации Next.js здесь, если необходимо
};

export default nextConfig;
