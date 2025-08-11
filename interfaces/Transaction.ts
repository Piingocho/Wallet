import Feather from "@expo/vector-icons/Feather";

export interface Transaction {
  id: string;
  title: string;
  subtitle: string;
  icon: keyof typeof Feather.glyphMap;
  iconBg: string;
  amount: string;
  amountColor: string;
}


