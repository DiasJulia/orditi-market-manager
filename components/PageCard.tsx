import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

const PageCard = ({ props }: { props: any }) => {
  const link: any = props.link;
  return (
    <TouchableHighlight
      onPress={() => props.click(props.id)}
      style={styles.touchable}
    >
      <View style={styles.card}>
        <Image style={styles.image} source={props.link} />
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flex: 2,
    margin: 15,
    borderRadius: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: "#c4c4c4",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    height: 150,
    backgroundColor: "#fff",
  },
  title: {
    borderTopColor: "#2D98A2",
    borderTopWidth: 1,
    width: 100,
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    marginTop: 20,
  },
});

export default PageCard;
