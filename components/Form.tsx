import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const Form = () => {
  const [name, onChangeName] = React.useState("Nome do cadastrante");
  const [cpf, onChangeCPF] = React.useState("xxx.xxx.xxx-xx");
  const [rg, onChangeRG] = React.useState("RG");
  const [phone, onChangePhone] = React.useState("(xx) 9xxxx-xxxx");

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>Dados pessoais</Text>
      <Text style={{ marginLeft: 30 }}>Nome</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
      ></TextInput>
      <Text style={{ marginLeft: 30 }}>Nº do CPF</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeCPF}
        value={cpf}
        keyboardType="numeric"
      />
      <Text style={{ marginLeft: 30 }}>Nº do RG</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeRG}
        value={rg}
        keyboardType="numeric"
      />
      <Text style={{ marginLeft: 30 }}>Telefone</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePhone}
        value={phone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#c4c4c4",
    borderRadius: 12,
    height: 50,
    width: 350,
    margin: 25,
    padding: 15,
    marginTop: 5,
  },
  container: {
    justifyContent: "center",
  },
});

export default Form;
