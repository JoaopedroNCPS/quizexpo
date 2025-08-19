import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { questoes } from "../assets/mockups/questoes";

export default function Quiz() {
  const { questao, acertos } = useLocalSearchParams();
  const numQuestao = Number(questao);
  const numAcertos = Number(acertos);

  const dado = questoes[numQuestao - 1];

  function selecionarResposta(i: number) {
    let total = numAcertos;
    if (i + 1 === dado.certa) {
      total++;
    }

    if (numQuestao < questoes.length) {
      router.replace(`/quiz?questao=${numQuestao + 1}&acertos=${total}`);
    } else {
      router.replace(`/resultado?total=${total}`);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pergunta}>{dado.pergunta}</Text>
      {dado.respostas.map((resp, idx) => (
        <TouchableOpacity
          key={idx}
          style={styles.botao}
          onPress={() => selecionarResposta(idx)}
        >
          <Text style={styles.textBotao}>{resp}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 10, backgroundColor:"#fff"},
  pergunta: { fontSize: 22, marginBottom: 20, textAlign:"center" },
  botao: { backgroundColor: "#086a31", padding: 12, borderRadius: 10, marginVertical: 6, width: "90%", alignItems:"center" },
  textBotao: { color: "#fff", fontSize: 18 }
});
