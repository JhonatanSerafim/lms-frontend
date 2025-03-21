import type { NextConfig } from "next";
import type { RuleSetRule } from 'webpack';

const nextConfig: NextConfig = {
  webpack(config) {
    // Encontra a regra existente que lida com importações SVG
    const fileLoaderRule = config.module.rules.find((rule: RuleSetRule) =>
      rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
      // Reaplicar a regra existente, mas apenas para importações svg terminando em ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Converter todas as outras importações *.svg em componentes React
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    );

    // Modificar a regra do file loader para ignorar *.svg, já que agora está configurado
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
