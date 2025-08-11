import Feather from "@expo/vector-icons/Feather";

export interface Action {
  id: string;
  label: string;
  icon: keyof typeof Feather.glyphMap;
}


