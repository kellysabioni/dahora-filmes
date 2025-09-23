// Módulo responsável pelo acesso a a dados de variáveis de ambiente
import "dotenv/config";

import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "DáHora Filmes",
  slug: "dahora-filmes",
  scheme: "dahora",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icone.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/splash-dahora.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icone.png",
      backgroundColor: "#000000",
    },
    edgeToEdgeEnabled: true,
  },
  platforms: ["ios", "android"],
  plugins: ["expo-font", "expo-router"],
  extra: {
    apiKey: process.env.API_KEY,
  },
});
