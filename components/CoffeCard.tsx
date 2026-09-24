import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";

type CoffeeCardProps = {
  name: string,
  description: string,
  price: string;
};

export default function CoffeeCard({ name, description, price }: CoffeeCardProps) {
  return (
    <View style={styles.cardItem}>
      <Image source={require('../assets/featured-image.png')} style={styles.cardImage}></Image>
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <View style={styles.cardButton}>
        <Text style={styles.cardPrice}>R$ {price}</Text>
        <TouchableOpacity style={styles.Button}>
          <AntDesign name="plus" size={14} color="white"/>
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
    marginBottom: 16,
    shadowColor: '#2c1b3073',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 3
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2f2d2c'
  },
  cardDescription: {
    fontSize: 12,
    color: '#9b9b9b',
    marginTop: 4,
    lineHeight: 16
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: '800',
    color: '#7B1FA2',
    marginTop: 12
  },

  cardImage: {
    width: '100%',
    height: 100,
    padding: 16,
    borderRadius: 16,
  },

  cardButton:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"

  },

  Button:{
    backgroundColor: "#7b1fa2",
    borderRadius: '100%',
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center"

  }
})