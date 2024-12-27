import { View, Text } from "react-native";
import { IconTicket } from "@tabler/icons-react-native";

import { colors } from "@/styles/colors";
import { s } from "./styles";

type Props = {
  code: string;
};

export default function Coupon({ code }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.title}>Utilize esse cupom</Text>

      <View style={s.content}>
        <IconTicket size={24} color={colors.green.light} />
        <Text style={s.code}>{code}</Text>
      </View>
    </View>
  );
}
