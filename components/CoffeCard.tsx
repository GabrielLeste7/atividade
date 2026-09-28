import { Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { Outfit_400Regular, Outfit_500Medium, Outfit_600SemiBold, Outfit_700Bold, Outfit_800ExtraBold, useFonts } from '@expo-google-fonts/outfit'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ImageSourcePropType } from "react-native";

type CoffeeCardProps = {
  image: ImageSourcePropType,
  name: string,
  description: string,
  price: string;
};


export default function CoffeeCard({ image, name, description, price }: CoffeeCardProps) {
  const [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_600SemiBold,
    Outfit_700Bold,
    Outfit_800ExtraBold,
    Outfit_500Medium,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,

  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.cardItem}>
      <Image source={image} style={styles.cardImage}></Image>
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <View style={styles.cardButton}>
        <Text style={styles.cardPrice}>R$ {price}</Text>
        <TouchableOpacity style={styles.Button}>
          <AntDesign name="plus" size={14} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  cardItem: {
    width: '49%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    gap: 6,
    shadowColor: '#2c1b3073',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 3
  },
  cardTitle: {
    fontSize: 16,
    color: '#2f2d2c',
    fontFamily: "Inter_700Bold"
  },
  cardDescription: {
    fontSize: 11,
    color: '#644d6a',
    marginTop: 4,
    lineHeight: 16,
    fontFamily: "Inter_400Regular"
  },
  cardPrice: {
    fontSize: 17,
    color: '#7B1FA2',
    marginTop: 12,
    fontFamily: "Inter_700Bold"
  },

  cardImage: {
    width: '100%',
    height: 100,
    padding: 16,
    borderRadius: 8,
  },

  cardButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"

  },

  Button: {
    backgroundColor: "#7b1fa2",
    borderRadius: '100%',
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center"

  }
})