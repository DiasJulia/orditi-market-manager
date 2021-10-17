import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Alert,
  Platform,
} from "react-native";

import Form from "./components/Form";
import Navbar from "./components/Navbar";
import PageCard from "./components/PageCard";

export default function App() {
  const [page, onChangePage] = React.useState(0);
  const tap = () => {
    console.log("tap");
    return 2;
  };

  const taaap = () => {
    console.log("taaap");
    return 2;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Navbar page={page} />
      <View style={styles.cardContainer}>
        <PageCard
          props={{
            id: 1,
            title: "Licenças",
            link: require("./assets/img/icons/licencas.png"),
            click: onChangePage,
          }}
        />
        <PageCard
          props={{
            id: 0,
            title: "Buscar",
            link: require("./assets/img/icons/lupa.png"),
            click: onChangePage,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
