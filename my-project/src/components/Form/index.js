import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "../Form/style";

export default function Form() {
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [pesoAltura, setPesoAltura] = useState(null);
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function calcularImc() {
    const alturaNum = parseFloat(altura.replace(",", "."));
    const pesoNum = parseFloat(peso.replace(",", "."));

    if (!isNaN(alturaNum) && !isNaN(pesoNum) && alturaNum > 0 && pesoNum > 0) {
      const resultadoImc = (pesoNum / (alturaNum * alturaNum)).toFixed(2);
      setImc(resultadoImc);
      setPesoAltura("IMC igual a:");
    } else {
      setImc(null);
      setPesoAltura("Peso ou altura inválidos");
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Altura</Text>
        <TextInput
          style={styles.input}
          onChangeText={setAltura}
          value={altura}
          placeholder="Ex.: 1.75"
          keyboardType="numeric"
        />
        <Text style={styles.label}>Peso</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPeso}
          value={peso}
          placeholder="Ex.: 75.54"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={calcularImc}
        >
          <Text style={styles.buttonText}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={pesoAltura} resultImc={imc} />
    </View>
  );
}
