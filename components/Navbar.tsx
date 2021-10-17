import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Navbar = ({ page }: { page: any }) => {
  switch (page) {
    case 1:
      return (
        <View style={page == 1 ? styles.navbar : styles.navbar}>
          <Text style={{ color: "#fff", fontSize: 32 }}>Seja Bem-vindo</Text>
          <Text style={{ color: "#fff", fontSize: 16 }}>Usuário</Text>
        </View>
      );
      break;

    default:
      return (
        <View style={styles.navbarGeral}>
          <Text style={{ color: "#fff", fontSize: 24, marginLeft: 25 }}>
            Página
          </Text>
          <View style={styles.navbarEntrance} />
        </View>
      );
      break;
  }
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#2D98A2",
    alignSelf: "stretch",
    padding: 30,
    marginBottom: -35,
    height: 180,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
  },
  navbarGeral: {
    backgroundColor: "#2D98A2",
    alignSelf: "stretch",
    paddingTop: 30,
    marginBottom: -35,
    height: 120,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
  },
  navbarEntrance: {
    backgroundColor: "#fff",
    alignSelf: "stretch",
    padding: 30,
    marginTop: 15,
    height: 35,
    borderTopLeftRadius: 30,
  },
});

export default Navbar;
