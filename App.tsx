import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar style="auto" />
        <View>
          <Text>Da hora Filmes</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
