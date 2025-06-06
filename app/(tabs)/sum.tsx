import { RoundButton } from "@/components/RoundButton";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sum2Numbers() {
  const [isSelected, setIsSelect] = useState({
    input1: true,
    input2: false,
    result: false,
  });
  const [inputValues, setInputValues] = useState({
    input1: "0",
    input2: "0",
    result: 0,
  });

  useEffect(() => {
    const result = parseInt(inputValues.input1) + parseInt(inputValues.input2);
    setInputValues({
      input1: inputValues.input1,
      input2: inputValues.input2,
      result: result,
    });
  }, [inputValues.input1, inputValues.input2]);

  function onPressInput(btn: string) {
    if (btn == "input1") {
      setIsSelect({ input1: true, input2: false, result: false });
    } else {
      setIsSelect({ input1: false, input2: true, result: false });
    }
  }

  function onPressFunction(press: string) {
    if (isSelected.input1 == true && press != "BackSpace" && press != "AC") {
      setInputValues({
        input1: inputValues.input1 == "0" ? press : inputValues.input1 + press,
        input2: inputValues.input2,
        result: inputValues.result,
      });
    }
    if (isSelected.input2 == true && press != "BackSpace" && press != "AC") {
      setInputValues({
        input1: inputValues.input1,
        input2: inputValues.input2 == "0" ? press : inputValues.input2 + press,
        result: inputValues.result,
      });
    }

    if (press == "AC") {
      setInputValues({
        input1: "0",
        input2: "0",
        result: inputValues.result,
      });
      setIsSelect({ input1: true, input2: false, result: false });
    }

    if (press == "BackSpace" && isSelected.input1 == true) {
      setInputValues({
        input1:
          inputValues.input1.length != 1
            ? inputValues.input1.slice(0, -1)
            : "0",
        input2: inputValues.input2,
        result: inputValues.result,
      });
    }

    if (press == "BackSpace" && isSelected.input2 == true) {
      setInputValues({
        input1: inputValues.input1,
        input2:
          inputValues.input2.length != 1
            ? inputValues.input2.slice(0, -1)
            : "0",
        result: inputValues.result,
      });
    }
  }

  return (
    <View>
      <View style={styles.TextContainer}>
        <Text style={styles.text}>Sumadora</Text>
      </View>
      <View style={styles.TextContainer}>
        <View style={styles.textNum}>
          <Text
            style={isSelected.input1 ? styles.textSelected : styles.text}
            onPress={() => onPressInput("input1")}
          >
            {inputValues.input1}
          </Text>
        </View>
        <View style={styles.textNum}>
          <Text style={styles.text}>+</Text>
        </View>
        <View style={styles.textNum}>
          <Text
            style={isSelected.input2 ? styles.textSelected : styles.text}
            onPress={() => onPressInput("input2")}
          >
            {inputValues.input2}
          </Text>
        </View>
        <View style={styles.textNum}>
          <Text style={styles.text}>=</Text>
        </View>
        <View style={styles.textNum}>
          <Text style={isSelected.result ? styles.textSelected : styles.text}>
            {inputValues.result}
          </Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    padding: 10,
  },
  text: {
    marginTop: 40,
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "bold",
  },
  textSelected: {
    marginTop: 40,
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "bold",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
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
