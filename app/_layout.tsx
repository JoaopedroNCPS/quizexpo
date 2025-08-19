import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  faixa: {
    backgroundColor: "#F2582E",
  },
  texto: {
    color: "#fcc29bff",
  },
});

export default function Layout() {
  return (
    <Stack screenOptions={{ headerStyle: styles.faixa, headerTitleStyle: styles.texto }}>
       <Stack.Screen name="index" options={{ title: "Início" }} />
        <Stack.Screen name="quiz" options={{ title: "Pergunta" }} />
        <Stack.Screen name="resultado" options={{ title: "Resultado" }} />
    </Stack>
  );
}
