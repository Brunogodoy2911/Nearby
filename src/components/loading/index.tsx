import { ActivityIndicator } from "react-native";

import { s } from "./styles";
import { colors } from "@/styles/colors";

export function Loading() {
  return <ActivityIndicator size={30} color={colors.green.base} style={s.container} />;
}
