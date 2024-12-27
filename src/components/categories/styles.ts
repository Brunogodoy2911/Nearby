import { StyleSheet, Platform } from "react-native";

export const s = StyleSheet.create({
  container: {
    maxHeight: 36,
    position: "absolute",
    zIndex: 1,
    top: Platform.OS == "ios" ? 64 : 20,
  },
  content: {
    gap: 8,
    paddingHorizontal: Platform.OS == "ios" ? 24 : 10,
  },
});
