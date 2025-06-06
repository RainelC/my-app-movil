import React, { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const YouTubePlayerScreen = () => {
  const playerRef = useRef(null);
  return (
    <View style={{ display: "flex", alignItems: "center", marginTop: 80 }}>
      <Text style={{ color: "white", fontSize: 50, marginBottom: 50 }}>
        Mi experiencia
      </Text>
      <View style={styles.container}>
        <YoutubePlayer
          ref={playerRef}
          height={900}
          play={false}
          videoId={"re5miVLfi6g"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default YouTubePlayerScreen;
