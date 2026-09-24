import { AntDesign, Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CoffeeCard from './components/CoffeCard';

export default function App() {
  const [nameUser, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleOrder = () => {
    if (nameUser.trim() == '') {
      setMessage('Por favor, informe seu nome!');
    } else {
      setMessage(`Olá ${nameUser}, seu pedido foi recebido!`);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={30}
    >
      <ScrollView>

        <View style={styles.content}>
          <View style={styles.grettingSection}>
            <Text style={styles.grettingTitle}>Açaí Prime</Text>
            <Text style={styles.grettingSubTitle}>O sabor puro da Amazônia</Text>

            <Text style={styles.grettingTitle}>Refresque seu dia!</Text>
            <Text style={styles.grettingSubTitle}>Escolha seu açaí favorito de hoje</Text>
          </View>

          <View style={styles.featured}>
            <Image source={require('./assets/featured-image.png')} style={styles.image}></Image>
            <Text style={styles.featuredTitle}>Açaí Turbinado 500ml</Text>
            <Text style={styles.featuredDescription}>Açaí puro batido com morango, banana, leite condensado e granola crocante</Text>
            <View style={styles.cardButton}>
              <Text style={styles.featuredPrice}>R$ 22,90</Text>
              <TouchableOpacity style={styles.button}>
                <Feather name="shopping-bag" size={14} color="white"/><Text style={styles.buttonText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Nossos Copos & Tigelas</Text>

          <View style={styles.sectionMenu}>
            <CoffeeCard name='Açaí Tradicional' description='Açaí cremoso com banana e granola tradicional' price='14,00' />
            <CoffeeCard name='Copo Tropical' description='Camadas de açaí, morango, kiwi e leite em pó' price='18,50' />
            <CoffeeCard name='Vitamina de Açaí' description='Bebida energética batida com guaraná e aveia' price='12,00' />
            <CoffeeCard name='Açaí Fit Zero' description='Zero adição de açúcar, com chia e castanhas' price='16,90' />
          </View>

          <View style={styles.orderSection}>

            <Text style={styles.question}>Qual é o seu nome?</Text>
            <TextInput
              style={styles.input}
              placeholder='Digite seu nome...'
              value={nameUser}
              onChangeText={setName}
            >
            </TextInput>

            {message !== '' && <Text style={styles.messageText}>{message}</Text>}
          </View>

        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF9FC'
  },

  content: {
    paddingHorizontal: 24,
  },
  grettingSection: {
    marginTop: 10,
    marginBottom: 24
  },
  grettingTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#2f2d2c'
  },
  grettingSubTitle: {
    fontSize: 16,
    color: "#9b9b9b",
    marginTop: 8
  },
  featured: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
    shadowColor: "#a289acff",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 178,
    borderRadius: 16,
    marginBottom: 16,
  },

  imagecard: {
    width: "100%",
    height: 144,
    borderRadius: 16,
    marginBottom: 16,
  },

  featuredTitle: {
    fontSize: 18,
    color: '#2C1B30',
    fontWeight: '800',
  },

  // sectionMenu: {
  //   backgroundColor: "#ff0000ff",
  //   width: 168,
  //   borderRadius: 16,
  //   shadowColor: "#a289acff",
  //   shadowOffset: { width: 0, height: 8 },
  //   shadowOpacity: 0.05,
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   justifyContent: 'space-between',
  //   marginBottom: 20
  // },

  sectionMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20
  },

  featuredDescription: {
    fontSize: 14,
    color: '#9b9b9b',
    marginTop: 4
  },
  featuredPrice: {
    fontSize: 25,
    color: '#8d26b6ff',
    fontWeight: '900',
    marginTop: 12
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2f2d2c',
    marginBottom: 16
  },
  orderSection: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4
  },
  question: {
    fontSize: 18,
    fontWeight: '800',
    color: '#2f2d2c',
    marginBottom: 16
  },
  input: {
    width: '100%',
    height: 56,
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16
  },
  button: {
    backgroundColor: '#7b1fa2',
    width: 109,
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent:'space-between',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700'
  },
  messageText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#c67c4e',
    alignItems: 'center',
    margin: 'auto',
    marginTop: 20
  },
  cardItem: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000000',
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
    color: '#c77c4e',
    marginTop: 12
  },

  cardButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"

  },
  Button:{
    backgroundColor: "#7b1fa2",
    borderRadius: 20,
    width: 109,
    height: 31,
    alignItems: "center",
    justifyContent: "center"

  }
});