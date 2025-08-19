import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Home() {
  function iniciarQuiz() {
    router.push("/quiz?questao=1&acertos=0");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem vindo ao Quiz meu ! ! ! ! que tem um monte de coisas :V</Text>
      <TouchableOpacity style={styles.botao} onPress={iniciarQuiz}>
        <Text style={styles.textBotao}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  titulo: { fontSize: 22, marginBottom: 20 },
  botao: { backgroundColor: "#086a31", padding: 15, borderRadius: 12 },
  textBotao: { color: "#fff", fontSize: 18 }
});
