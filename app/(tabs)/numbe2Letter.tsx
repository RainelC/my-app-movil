import { RoundButton } from "@/components/RoundButton";
import { useEffect, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

function numberToText(num: number): string {
  const unidades = [
    "",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
  ];
  const especiales = [
    "diez",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
    "dieciséis",
    "diecisiete",
    "dieciocho",
    "diecinueve",
  ];
  const decenas = [
    "",
    "",
    "veinte",
    "treinta",
    "cuarenta",
    "cincuenta",
    "sesenta",
    "setenta",
    "ochenta",
    "noventa",
  ];
  const centenas = [
    "",
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos",
  ];

  if (num === 0) return "cero";
  if (num === 100) return "cien";
  if (num === 1000) return "mil";

  let texto = "";

  if (num > 99) {
    texto += centenas[Math.floor(num / 100)];
    num %= 100;
    if (num > 0) texto += " ";
  }

  if (num >= 10 && num < 20) {
    texto += especiales[num - 10];
  } else {
    if (num >= 20) {
      texto += decenas[Math.floor(num / 10)];
      const unidad = num % 10;
      if (unidad > 0) {
        if (Math.floor(num / 10) === 2) {
          texto += "i" + unidades[unidad]; 
        } else {
          texto += " y " + unidades[unidad];
        }
      }
    } else {
      texto += unidades[num];
    }
  }

  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

export default function Number2Letter() {
  const [inputValues, setInputValues] = useState("0");
  const [result, setResult] = useState("Cero");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setResult(numberToText(parseInt(inputValues)));
  }, [inputValues]);

  function onPressFunction(press: string) {
    if (press != "BackSpace" && press != "AC") {
      const newValue = inputValues + press;
      if (parseInt(newValue) > 1000) {
        setModalVisible(true); 
      } else {
        setInputValues(inputValues == "0" ? press : inputValues + press);
      }
    }

    if (press == "AC") {
      setInputValues("0");
    }

    if (press == "BackSpace") {
      setInputValues(inputValues.length != 1 ? inputValues.slice(0, -1) : "0");
    }
  }

  return (
    <View>
      <View style={styles.TextContainer}>
        <Text style={styles.textTitle}>Números a letras</Text>
      </View>
      <View style={styles.TextContainer}>
        <View style={styles.textNum}>
          <Text style={styles.text}>{inputValues}</Text>
        </View>
        <View style={styles.textNum}>
          <Text style={styles.text}>=</Text>
        </View>
        <View style={styles.textNum}>
          <Text style={styles.text}>{result}</Text>
        </View>
      </View>
      <View>
        <View style={styles.Container}>
          <View style={{ flex: 1, padding: 10 }}>
            <RoundButton titleBtn="1" onPress={onPressFunction} />
          </View>
          <View style={{ flex: 1, padding: 10 }}>
            <RoundButton titleBtn="2" onPress={onPressFunction} />
          </View>
          <View style={{ flex: 1, padding: 10 }}>
            <RoundButton titleBtn="3" onPress={onPressFunction} />
          </View>
        </View>
        <View style={styles.Container}>
          <View style={{ flex: 1, padding: 10 }}>
            <RoundButton titleBtn="4" onPress={onPressFunction} />
          </View>
          <View style={{ flex: 1, padding: 10 }}>
            <RoundButton titleBtn="5" onPress={onPressFunction} />
          </View>
          <View style={{ flex: 1, padding: 10 }}>
            <RoundButton titleBtn="6" onPress={onPressFunction} />
          </View>
        </View>
        <View style={styles.Container}>
          <View style={{ flex: 1, padding: 10 }}>
            <RoundButton titleBtn="7" onPress={onPressFunction} />
          </View>
          <View style={{ flex: 1, padding: 10 }}>
            <RoundButton titleBtn="8" onPress={onPressFunction} />
          </View>
          <View style={{ flex: 1, padding: 10 }}>
            <RoundButton titleBtn="9" onPress={onPressFunction} />
          </View>
        </View>
        <View style={styles.Container}>
          <View style={{ flex: 1, padding: 10 }}>
            <RoundButton
              titleBtn="BackSpace"
              onPress={onPressFunction}
              Icon="backspace-outline"
            />
          </View>
          <View style={{ flex: 1, padding: 10 }}>
            <RoundButton titleBtn="0" onPress={onPressFunction} />
          </View>
          <View style={{ flex: 1, padding: 10 }}>
            <RoundButton titleBtn="AC" onPress={onPressFunction} />
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              El número no puede ser mayor a 1000
            </Text>
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  button: { fontSize: 32, padding: 10, backgroundColor: "#ccc", margin: 10 },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  Container: {
    flexDirection: "row",
    padding: 10,
  },
  text: {
    marginTop: 40,
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  textTitle: {
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
  textNum: {
    marginHorizontal: 10,
    borderColor: "#ffffff",
  },
});
