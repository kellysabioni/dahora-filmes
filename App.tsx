import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [fonteCarregada] = useFonts({
    Monoton: require("./assets/fonts/Monoton-Regular.ttf"),
  });

  // Se a fonte ainda não foi carregada
  if (!fonteCarregada) {
    return (
      <Text style={{ color: "red", fontSize: 22 }}>Carregando Fonte...</Text>
    );
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
          <Pressable style={estilos.botaoInicial}>
            <Text style={estilos.textoBotao}> Buscar Filmes </Text>
          </Pressable>

          <Button title="Favoritos" />
        </View>
        <View style={estilos.viewRodape}>
          <Button title="Privacidade" />
          <Button title="Sobre" />
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
    backgroundColor: "orange",
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  botaoInicial: {
    backgroundColor: "#5451a6",
    padding: 16,
    borderRadius: 8,
  },
  textoBotao: {
    color: "#fff",
  },
  viewRodape: {
    backgroundColor: "pink",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
