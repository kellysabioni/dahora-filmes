import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// Importando bibilioteca interna vector-icons
import { Ionicons } from "@expo/vector-icons";
import Loading from "./src/components/Loading";

export default function App() {
  const [fonteCarregada] = useFonts({
    Monoton: require("./assets/fonts/Monoton-Regular.ttf"),
  });

  // Se a fonte ainda não foi carregada
  if (!fonteCarregada) {
    return <Loading />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={estilos.container}>
        <StatusBar style="auto" />
        <View style={estilos.viewLogo}>
          <Image source={require("./assets/dahora.png")} style={estilos.logo} />

          <Text style={estilos.tituloApp}>Da hora Filmes</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Pressable
            style={({ pressed }) => [
              estilos.botaoInicial,
              pressed && estilos.botaoPressionado,
            ]}
          >
            <Ionicons name="search" size={18} color="white" />
            <Text style={estilos.textoBotao}> Buscar Filmes </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              estilos.botaoInicial,
              pressed && estilos.botaoPressionado,
            ]}
          >
            <Ionicons name="star" size={18} color="yellow" />
            <Text style={estilos.textoBotao}> Favoritos </Text>
          </Pressable>
        </View>
        <View style={estilos.viewRodape}>
          <Pressable
            style={({ pressed }) => [
              estilos.botaoInicial,
              pressed && estilos.botaoPressionado,
            ]}
          >
            <Ionicons name="lock-closed" size={18} color="white" />
            <Text style={estilos.textoBotao}> Privacidade </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              estilos.botaoInicial,
              pressed && estilos.botaoPressionado,
            ]}
          >
            <Ionicons
              name="information-circle-outline"
              size={18}
              color="white"
            />
            <Text style={estilos.textoBotao}> Sobre </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

/* Estilos */
const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  viewLogo: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 128,
    height: 128,
  },
  tituloApp: {
    fontFamily: "Monoton", // Aqui você usa o nome da fonte carregada
    fontSize: 32,
    color: "#5451a6",
  },
  viewBotoes: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  botaoInicial: {
    backgroundColor: "#5451a6",
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  botaoPressionado: {
    backgroundColor: "#6a67c9",
    transform: [{ scale: 0.95 }],
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  textoBotao: {
    color: "#fff",
  },
  viewRodape: {
    backgroundColor: "#5451a6",
    borderRadius: 10,
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    padding: 10,
  },
});
