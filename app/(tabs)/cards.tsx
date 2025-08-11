import { LinearGradient } from "expo-linear-gradient";
import { cssInterop } from "nativewind";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

cssInterop(LinearGradient, { className: "style" });

export default function Cards() {
  const [selectedCard, setSelectedCard] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  
  // Animated values for each card
  const cardAnimations = useRef([
    new Animated.Value(0),
    new Animated.Value(1),
    new Animated.Value(2),
  ]).current;
  
  const scaleAnimations = useRef([
    new Animated.Value(1),
    new Animated.Value(1),
    new Animated.Value(1),
  ]).current;

  const cards = [
    {
      id: 1,
      name: "Abdullah Ghatasheh",
      number: "**** 2312",
      balance: "$1,234",
      colors: ["#E9D5FF", "#C084FC"] as const,
      zIndex: 3,
    },
    {
      id: 2,
      name: "Abdullah Ghatasheh",
      number: "**** 5432",
      balance: "$1,856",
      colors: ["#C084FC", "#9333EA"] as const,
      zIndex: 2,
    },
    {
      id: 3,
      name: "Abdullah Ghatasheh",
      number: "**** 3245",
      balance: "$2,354",
      colors: ["#7C3AED", "#5B21B6"] as const,
      zIndex: 1,
    },
  ];

  const cardDetails = [
    {
      id: 1,
      type: "Visa",
      bank: "Chase Bank",
      expiry: "12/25",
      cvv: "123",
      dailyLimit: "$5,000",
      monthlyLimit: "$25,000",
    },
    {
      id: 2,
      type: "Mastercard",
      bank: "Bank of America",
      expiry: "08/26",
      cvv: "456",
      dailyLimit: "$3,000",
      monthlyLimit: "$15,000",
    },
    {
      id: 3,
      type: "Visa",
      bank: "Wells Fargo",
      expiry: "03/27",
      cvv: "789",
      dailyLimit: "$7,500",
      monthlyLimit: "$50,000",
    },
  ];

  // Initialize animations on mount
  useEffect(() => {
    // Set initial positions
    cardAnimations.forEach((anim, index) => {
      anim.setValue(index);
    });
    scaleAnimations.forEach((anim) => {
      anim.setValue(1);
    });
  }, []);

  const handleCardPress = (index: number) => {
    if (index === selectedCard) return; // No animation if same card
    
    setSelectedCard(index);
    
    // Animate all cards to their new positions
    const animations = cards.map((_, cardIndex) => {
      let newPosition, newScale;
      
      if (cardIndex === index) {
        // Selected card goes to front
        newPosition = 0;
        newScale = 1.05;
      } else if (cardIndex < index) {
        // Cards above selected move up
        newPosition = cardIndex + 1;
        newScale = 1;
      } else {
        // Cards below selected move down
        newPosition = cardIndex + 1;
        newScale = 1;
      }
      
      return Animated.parallel([
        Animated.timing(cardAnimations[cardIndex], {
          toValue: newPosition,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(scaleAnimations[cardIndex], {
          toValue: newScale,
          duration: 300,
          useNativeDriver: false,
        }),
      ]);
    });
    
    Animated.parallel(animations).start();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-2">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-8">
            <Text className="text-2xl font-bold text-gray-900">My Cards</Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-blue-600 font-semibold mr-1">Add card</Text>
              <Text className="text-blue-600 text-xl">+</Text>
            </TouchableOpacity>
          </View>

          {/* Card Stack */}
          <View className="h-64 mb-8">
            {cards.map((card, index) => (
              <Animated.View
                key={card.id}
                className={`absolute w-full h-48 rounded-3xl shadow-lg`}
                style={{
                  top: cardAnimations[index].interpolate({
                    inputRange: [0, 1, 2, 3],
                    outputRange: [0, 20, 40, 60],
                  }),
                  transform: [
                    { scale: scaleAnimations[index] },
                  ],
                  zIndex: selectedCard === index ? 100 : 50 - (index * 10),
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => handleCardPress(index)}
                  className="w-full h-full"
                >
                <LinearGradient
                  colors={card.colors}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  className="flex-1 rounded-3xl p-5"
                >
                  {/* Card Header */}
                  <View className="flex-row items-center justify-between mb-4">
                    <View className="flex-row items-center gap-3">
                      <Text className="text-white font-medium text-sm">
                        {card.name}
                      </Text>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                          // Aquí puedes agregar la acción del botón settings
                          console.log(`Settings for card ${card.id}`);
                        }}
                        className="w-6 h-6 rounded-full bg-white/20 items-center justify-center"
                      >
                        <Image
                          source={require("../../assets/images/settings.png")}
                          style={{ width: 14, height: 14, tintColor: "white" }}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    </View>
                    <Text className="text-white font-medium text-sm">
                      {card.number}
                    </Text>
                  </View>

                  {/* Card Footer */}
                  <View className="flex-row items-center justify-between mt-auto">
                    <View>
                      <Text className="text-white/80 text-xs mb-1">Balance</Text>
                      <Text className="text-white text-xl font-bold">
                        {card.balance}
                      </Text>
                    </View>
                    
                    {/* NFC Icon */}
                    <View className="w-8 h-8 rounded-full bg-white/20 items-center justify-center">
                      <Text className="text-white text-lg">📱</Text>
                    </View>
                  </View>

                  {/* Decorative Elements */}
                  <View className="absolute top-4 right-4">
                    <View className="w-16 h-16 rounded-full bg-white/10" />
                  </View>
                  <View className="absolute top-12 right-8">
                    <View className="w-8 h-8 rounded-full bg-orange-300/30" />
                  </View>
                </LinearGradient>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>

          {/* Card Details */}
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-900 mb-4">
              Card Details
            </Text>
            
            <View className="bg-gray-50 rounded-2xl p-4">
              <View className="flex-row items-center justify-between mb-4">
                <Text className="text-gray-600 text-sm">Card Type</Text>
                <Text className="text-gray-900 font-medium">
                  {cardDetails[selectedCard].type}
                </Text>
              </View>
              
              <View className="flex-row items-center justify-between mb-4">
                <Text className="text-gray-600 text-sm">Bank</Text>
                <Text className="text-gray-900 font-medium">
                  {cardDetails[selectedCard].bank}
                </Text>
              </View>
              
              <View className="flex-row items-center justify-between mb-4">
                <Text className="text-gray-600 text-sm">Expiry Date</Text>
                <Text className="text-gray-900 font-medium">
                  {cardDetails[selectedCard].expiry}
                </Text>
              </View>
              
              <View className="flex-row items-center justify-between mb-4">
                <Text className="text-gray-600 text-sm">CVV</Text>
                <Text className="text-gray-900 font-medium">
                  {cardDetails[selectedCard].cvv}
                </Text>
              </View>
              
              <View className="flex-row items-center justify-between mb-4">
                <Text className="text-gray-600 text-sm">Daily Limit</Text>
                <Text className="text-gray-900 font-medium">
                  {cardDetails[selectedCard].dailyLimit}
                </Text>
              </View>
              
              <View className="flex-row items-center justify-between">
                <Text className="text-gray-600 text-sm">Monthly Limit</Text>
                <Text className="text-gray-900 font-medium">
                  {cardDetails[selectedCard].monthlyLimit}
                </Text>
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </Text>
            
            <View className="flex-row gap-3">
              <TouchableOpacity className="flex-1 bg-violet-100 rounded-2xl p-4 items-center">
                <Text className="text-violet-700 font-semibold">Freeze Card</Text>
              </TouchableOpacity>
              
              <TouchableOpacity className="flex-1 bg-red-100 rounded-2xl p-4 items-center">
                <Text className="text-red-700 font-semibold">Report Lost</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


