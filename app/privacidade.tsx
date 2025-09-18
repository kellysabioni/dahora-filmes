import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Privacidade() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Política de Privacidade",
        }}
      />
      <SafeAreaView style={estilos.container}></SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
    color: "#555",
  },
  paragrafo: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
    marginBottom: 10,
  },
});
