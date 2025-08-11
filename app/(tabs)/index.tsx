// Consolidated Home screen directly in index to avoid duplicate tab
import type { Action } from "@/interfaces/Action";
import type { Transaction } from "@/interfaces/Transaction";
import type { Transfer } from "@/interfaces/Transfer";
import Feather from "@expo/vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import { cssInterop } from "nativewind";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

cssInterop(LinearGradient, { className: "style" });

const actions: Action[] = [
  { id: "topup", label: "Top up", icon: "arrow-up-circle" },
  { id: "withdraw", label: "Withdraw", icon: "arrow-down-circle" },
  { id: "transfer", label: "Transfer", icon: "repeat" },
];

const transfers: Transfer[] = [
  { id: "add", name: "Add", color: "bg-violet-100", emoji: "+" },
  { id: "ali", name: "Ali", color: "bg-amber-100", emoji: "🕶️" },
  { id: "steve", name: "Steve", color: "bg-rose-100", emoji: "🧑🏽‍🎨" },
  { id: "ahmed", name: "Ahmed", color: "bg-emerald-100", emoji: "🧔🏽" },
  { id: "nora", name: "Nora", color: "bg-cyan-100", emoji: "👩🏻" },
];

const transactions: Transaction[] = [
  {
    id: "walmart",
    title: "Walmart",
    subtitle: "Today 12:32",
    icon: "shopping-bag",
    iconBg: "bg-sky-100",
    amount: "- $85.23",
    amountColor: "text-rose-500",
  },
  {
    id: "topup",
    title: "Top up",
    subtitle: "Yesterday 02:12",
    icon: "trending-up",
    iconBg: "bg-emerald-100",
    amount: "+ $430.00",
    amountColor: "text-emerald-600",
  },
  {
    id: "netflix",
    title: "Netflix",
    subtitle: "Dec 24 13:53",
    icon: "tv",
    iconBg: "bg-rose-100",
    amount: "- $13.00",
    amountColor: "text-rose-500",
  },
];

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-5 pt-2">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <View className="h-10 w-10 rounded-full bg-amber-300 items-center justify-center">
                <Text className="font-semibold text-violet-900">A</Text>
              </View>
              <View>
                <Text className="text-violet-800 font-semibold">Hello, Andres</Text>
              </View>
            </View>
          </View>

          <View className="mt-3">
            <LinearGradient
              colors={["#5B21B6", "#7C3AED"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="rounded-3xl p-5 shadow-lg"
            >
              <View className="mb-6">
                <Text className="text-white/80">Main balance</Text>
                <Text className="mt-1 text-4xl font-extrabold text-white">
                  $14,235.
                  <Text className="text-2xl">34</Text>
                </Text>
              </View>

              <View className="flex-row items-center justify-between">
                {actions.map((action) => (
                  <TouchableOpacity
                    key={action.id}
                    activeOpacity={0.8}
                    className="items-center"
                  >
                    <View className="h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                      <Feather name={action.icon} size={24} color="white" />
                    </View>
                    <Text className="mt-2 text-xs text-white">
                      {action.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </LinearGradient>
          </View>

          <View className="mt-6">
            <Text className="mb-3 text-base font-semibold text-gray-900">
              Recent Transfers
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 20 }}
            >
              <View className="flex-row items-center gap-5">
                {transfers.map((t) => (
                  <View key={t.id} className="items-center">
                    <View className={`h-14 w-14 items-center justify-center rounded-full ${t.color}`}>
                      <Text className="text-lg">{t.emoji}</Text>
                    </View>
                    <Text className="mt-2 text-xs text-gray-600">{t.name}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>

          <View className="mt-6">
            <View className="mb-3 flex-row items-center justify-between">
              <Text className="text-base font-semibold text-gray-900">
                Latest Transactions
              </Text>
              <TouchableOpacity>
                <Text className="text-xs font-semibold text-violet-600">
                  View all
                </Text>
              </TouchableOpacity>
            </View>

            <View className="divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white">
              {transactions.map((tx) => (
                <View key={tx.id} className="flex-row items-center gap-4 p-4">
                  <View className={`h-10 w-10 items-center justify-center rounded-xl ${tx.iconBg}`}>
                    <Feather name={tx.icon} size={20} color="#111827" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-sm font-medium text-gray-900">
                      {tx.title}
                    </Text>
                    <Text className="mt-0.5 text-xs text-gray-500">
                      {tx.subtitle}
                    </Text>
                  </View>
                  <Text className={`text-sm font-semibold ${tx.amountColor}`}>
                    {tx.amount}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}



