import { StyleSheet, Text, View } from "react-native";

export default function Subtitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitleContainer: {
    marginHorizontal: 24,
    padding: 6,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginVertical: 4,
  },
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
