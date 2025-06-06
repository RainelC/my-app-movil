import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Tablas() {

  const tablas(valor: number) = {
    for (let index = 0; index < 8; index++) {
        const element = array[index];
        
    }
  }

  return (
    <ScrollView>
      <View style={styles.TextContainer}>
        <Text style={styles.text}>Tablas del 12</Text>
      </View>
      <View style={styles.Container}>
        <View style={styles.Card}>
            
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    padding: 10,
  },
  Card: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    padding: 10,
  },
  text: {
    marginTop: 40,
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "bold",
  },
  TextContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    margin: 15,
  },
});
