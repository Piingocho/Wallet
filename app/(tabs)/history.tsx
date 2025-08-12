import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function History() {
  const [searchText, setSearchText] = useState("");

  const transactionGroups = [
    {
      title: "Today",
      date: "December 30, 2024",
      transactions: [
        {
          id: "walmart",
          merchant: "Walmart",
          icon: require("../../assets/images/convert-shapes.png"),
          iconBg: "bg-blue-500",
          time: "Today 12:32",
          amount: "-$35.23",
          amountColor: "text-red-500",
        },
        {
          id: "topup",
          merchant: "Top up",
          icon: require("../../assets/images/deposit.png"),
          iconBg: "bg-violet-500",
          time: "Yesterday 02:12",
          amount: "+$430.00",
          amountColor: "text-green-500",
        },
        {
          id: "netflix",
          merchant: "Netflix",
          icon: require("../../assets/images/settings.png"),
          iconBg: "bg-red-500",
          time: "Dec 24 12:32",
          amount: "-$13.00",
          amountColor: "text-red-500",
        },
      ],
    },
    {
      title: "Yesterday",
      date: "December 29, 2024",
      transactions: [
        {
          id: "amazon1",
          merchant: "Amazon",
          icon: require("../../assets/images/convert-shapes.png"),
          iconBg: "bg-orange-500",
          time: "Today 12:32",
          amount: "-$12.23",
          amountColor: "text-red-500",
        },
        {
          id: "nike",
          merchant: "Nike",
          icon: require("../../assets/images/deposit.png"),
          iconBg: "bg-black",
          time: "Yesterday 02:12",
          amount: "-$50.23",
          amountColor: "text-red-500",
        },
        {
          id: "homedepot",
          merchant: "The Home Depot",
          icon: require("../../assets/images/settings.png"),
          iconBg: "bg-orange-500",
          time: "Dec 24 13:53",
          amount: "-$129.00",
          amountColor: "text-red-500",
        },
      ],
    },
    {
      title: "Thursday",
      date: "December 28, 2024",
      transactions: [
        {
          id: "amazon2",
          merchant: "Amazon",
          icon: require("../../assets/images/convert-shapes.png"),
          iconBg: "bg-orange-500",
          time: "Today 12:32",
          amount: "-$35.23",
          amountColor: "text-red-500",
        },
      ],
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-2">
          {/* Header */}
          <View className="mb-6">
            <Text className="text-2xl font-bold text-gray-900 mb-4">History</Text>
            
            {/* Search Bar */}
            <View className="flex-row items-center gap-3 mb-4">
              <View className="flex-1 flex-row items-center bg-gray-100 rounded-2xl px-4 py-3">
                <Feather name="search" size={20} color="#6B7280" className="mr-3" />
                <TextInput
                  placeholder="Value goes here"
                  value={searchText}
                  onChangeText={setSearchText}
                  className="flex-1 ml-3 text-base text-gray-900"
                  placeholderTextColor="#9CA3AF"
                />
              </View>
              
              {/* Filter Button */}
              <TouchableOpacity className="bg-violet-100 rounded-2xl px-4 py-3">
                <View className="flex-row items-center">
                  <View className="w-5 h-5 mr-2">
                    <View className="w-1 h-1 bg-violet-600 rounded-full mb-1" />
                    <View className="w-1 h-1 bg-violet-600 rounded-full mb-1" />
                    <View className="w-1 h-1 bg-violet-600 rounded-full" />
                  </View>
                  <Text className="text-violet-700 font-semibold">Filter</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Transaction List */}
          <View>
            {transactionGroups.map((group, groupIndex) => (
              <View key={groupIndex} className="mb-6">
                {/* Section Header */}
                <View className="mb-3">
                  <Text className="text-lg font-semibold text-gray-900">{group.title}</Text>
                  <Text className="text-sm text-gray-500">{group.date}</Text>
                </View>
                
                {/* Transactions */}
                <View className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50">
                  {group.transactions.map((transaction) => (
                    <TouchableOpacity
                      key={transaction.id}
                      activeOpacity={0.7}
                      className="flex-row items-center p-4"
                    >
                      {/* Transaction Icon */}
                      <View className={`w-12 h-12 rounded-2xl ${transaction.iconBg} items-center justify-center mr-4`}>
                        <Image
                          source={transaction.icon}
                          style={{ width: 24, height: 24, tintColor: "white" }}
                          resizeMode="contain"
                        />
                      </View>
                      
                      {/* Transaction Details */}
                      <View className="flex-1">
                        <Text className="text-base font-medium text-gray-900 mb-1">
                          {transaction.merchant}
                        </Text>
                        <Text className="text-sm text-gray-500">
                          {transaction.time}
                        </Text>
                      </View>
                      
                      {/* Amount and Arrow */}
                      <View className="flex-row items-center">
                        <Text className={`text-base font-semibold mr-3 ${transaction.amountColor}`}>
                          {transaction.amount}
                        </Text>
                        <Feather name="chevron-right" size={20} color="#9CA3AF" />
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


