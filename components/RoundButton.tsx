import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, StyleSheet, Text } from "react-native";

interface RoundButtonProps {
  titleBtn: string;
  Icon?: any;
  onPress: (press: string) => void;
}

export function RoundButton({
  titleBtn,
  Icon,
  onPress,
}: Readonly<RoundButtonProps>) {
  return (
    <Pressable
      onPress={() => onPress(titleBtn)}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? "rgba(255, 255, 255, 0.4)"
            : "rgba(255, 255, 255, 0.2)",
        },
        styles.wrapperCustom,
      ]}
    >
      {Icon != null ? (
        <Icons name={Icon} size={50} color={"white"} />
      ) : (
        <Text style={styles.text}>{titleBtn}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 50,
  },
  wrapperCustom: {
    padding: 2,
    borderRadius: 100,
    width: 100,
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
