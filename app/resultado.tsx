import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function Resultado() {
  const { total } = useLocalSearchParams();

  function reiniciar() {
    router.replace("/");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.msg}>Parabains!</Text>
      <Text style={styles.msg}>tu acertou {total} de 6 questoes</Text>

      <TouchableOpacity style={styles.botao} onPress={reiniciar}>
        <Text style={styles.textBotao}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  msg: { fontSize: 20, marginBottom: 15 },
  botao: { backgroundColor: "#086a31", padding: 12, borderRadius: 10 },
  textBotao: { color: "#fff", fontSize: 18 }
});
