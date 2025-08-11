import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function More() {
  const actions = [
    { id: "paybills", label: "Pay bills", image: require("../../assets/images/expense.png"), color: "bg-violet-100" },
    { id: "transfer", label: "Transfer", image: require("../../assets/images/money-transfer-smartphone.png"), color: "bg-sky-100" },
    { id: "exchange", label: "Exchange", image: require("../../assets/images/deposit.png"), color: "bg-emerald-100" },
    { id: "withdraw", label: "Withdraw", image: require("../../assets/images/convert-shapes.png"), color: "bg-rose-100" },
    { id: "analytics", label: "Analytics", image: require("../../assets/images/chart-histogram.png"), color: "bg-violet-100" },
  ];

  const support = [
    { id: "help", label: "Help", image: require("../../assets/images/interrogation.png"), color: "bg-amber-100" },
    { id: "contact", label: "Contact us", image: require("../../assets/images/headset.png"), color: "bg-teal-100" },
    { id: "about", label: "About", image: require("../../assets/images/info.png"), color: "bg-violet-100" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-2">
          {/* Header */}
          <View className="mb-8">
            <Text className="text-2xl font-bold text-gray-900 text-center">More</Text>
          </View>

          {/* Actions Section */}
          <View className="mb-6">
            {actions.map((action) => (
              <TouchableOpacity
                key={action.id}
                activeOpacity={0.7}
                className="flex-row items-center py-4"
              >
                <View className={`h-12 w-12 rounded-full ${action.color} items-center justify-center mr-4`}>
                  <Image
                    source={action.image}
                    style={{ width: 20, height: 20, tintColor: "#374151" }}
                    resizeMode="contain"
                  />
                </View>
                <Text className="flex-1 text-base font-medium text-gray-900">
                  {action.label}
                </Text>
                <Image
                  source={require("../../assets/images/angle-small-right.png")}
                  style={{ width: 16, height: 16, tintColor: "#6B7280" }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Separator */}
          <View className="h-px bg-gray-200 mb-6" />

          {/* Support Section */}
          <View>
            {support.map((item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.7}
                className="flex-row items-center py-4"
              >
                <View className={`h-12 w-12 rounded-full ${item.color} items-center justify-center mr-4`}>
                  <Image
                    source={item.image}
                    style={{ width: 20, height: 20, tintColor: "#374151" }}
                    resizeMode="contain"
                  />
                </View>
                <Text className="flex-1 text-base font-medium text-gray-900">
                  {item.label}
                </Text>
                <Image
                  source={require("../../assets/images/angle-small-right.png")}
                  style={{ width: 16, height: 16, tintColor: "#6B7280" }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


