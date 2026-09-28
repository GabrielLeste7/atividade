import { Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { Outfit_400Regular, Outfit_500Medium, Outfit_600SemiBold, Outfit_700Bold, Outfit_800ExtraBold, useFonts } from '@expo-google-fonts/outfit'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CoffeeCard from './components/CoffeCard';
import ButtonPedido from './components/ButtonPedido';
import Footer from './components/Footer';

export default function App() {
  const [nameUser, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleOrder = () => {
    if (nameUser.trim() == '') {
      setMessage('  Por favor, informe seu nome!');
    } else {
      setMessage(`  Olá, ${nameUser}! Pedido iniciado com sucesso.`);
    }
  }
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={30}
    >
      <ScrollView>

         <View style={styles.content}>
          <View style={styles.grettingSection}>
            <View>
              <Text style={styles.grettingTitle}>Açaí Prime</Text>
              <Text style={styles.grettingSubTitle}>O sabor puro da Amazônia</Text>
            </View>
            <View style={styles.avatarPlaceholder}>
              <Ionicons name="person" size={20} color="#000000ff"></Ionicons>
            </View>
            </View>
            <View>
            <Text style={styles.grettingTitle}>Refresque seu dia!</Text>
            <Text style={styles.grettingSubTitle}>Escolha seu açaí favorito de hoje</Text>
            </View>
           

          <View style={styles.featured}>
            <Image source={require('./assets/featured-image.png')} style={styles.image}></Image>
            <View style={styles.dois}>
              <Text style={styles.featuredTitle}>Açaí Turbinado 500ml</Text>
              <Text style={styles.secundTitle}>MAIS PEDIDO</Text>
            </View>
            <Text style={styles.featuredDescription}>Açaí puro batido com morango, banana, leite condensado e granola crocante</Text>
            <View style={styles.cardButton}>
              <Text style={styles.featuredPrice}>R$ 22,90</Text>
              <TouchableOpacity style={styles.button}>
                <Feather name="shopping-bag" size={14} color="white" /><Text style={styles.buttonText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Nossos Copos & Tigelas</Text>

          <View style={styles.sectionMenu}>
            <CoffeeCard image={require('./assets/product-image (1).png')} name='Açaí Tradicional' description='Açaí cremoso com banana e granola tradicional' price='14,00' />
            <CoffeeCard image={require('./assets/product-image.png')} name='Copo Tropical' description='Camadas de açaí, morango, kiwi e leite em pó' price='18,50' />
            <CoffeeCard image={require('./assets/product-image (2).png')} name='Vitamina de Açaí' description='Bebida energética batida com guaraná e aveia' price='12,00' />
            <CoffeeCard image={require('./assets/product-image (3).png')} name='Açaí Fit Zero' description='Zero adição de açúcar, com chia e castanhas' price='16,90' />
          </View>

          <View style={styles.orderSection}>

            <Text style={styles.question}>Qual é o seu nome?</Text>
            <TextInput
              style={styles.input}
              placeholder='Digite seu nome'
              value={nameUser}
              onChangeText={setName}
            >
            </TextInput>

            <ButtonPedido title='Fazer seu pedido' onPress={handleOrder}></ButtonPedido>
            {message !== '' && <Text style={styles.messageText}><FontAwesome name="check-circle" size={20} color="green" style={styles.messageIcon} />{message}</Text>}
          </View>

        </View>
        <Footer>
        </Footer>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF9FC'

  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    backgroundColor: "#f3e5f5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: "50%",
    borderColor: "#7B1FA2",
    borderWidth: 1,
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 50,
  },
  grettingSection: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  grettingTitle: {
    fontSize: 32,
    fontWeight: '800',
    gap: 10,
    color: '#2f2d2cff',
    fontFamily: "Inter_700Bold"

  },
  grettingSubTitle: {
    marginBottom: 24,
    fontSize: 16,
    color: "#644d6a",
    fontFamily: "Inter_400Regular",

  },
  featured: {
    backgroundColor: "#ffffffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
    shadowColor: "#a289acff",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
  },
  dois: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontSize: 20,
    color: '#2C1B30',
    fontFamily: "Inter_700Bold"
  },

  sectionMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20
  },

  featuredDescription: {
    fontSize: 14,
    color: '#644d6a',
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
    backgroundColor: '#f1edf4',
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16
  },
  button: {
    backgroundColor: '#7b1fa2',
    width: 129,
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700'
  },
  messageText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2e7d32',
    backgroundColor: '#e8f5e9',
    marginTop: 20,
    width: '100%',
    height: 40,
    borderRadius: 12,
    paddingHorizontal:15,
    paddingVertical:7,
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

  cardButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"

  },
  Button: {
    backgroundColor: "#7b1fa2",
    borderRadius: 20,
    width: 109,
    height: 31,
    alignItems: "center",
    justifyContent: "center"

  },
  questionName: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2f2d2c"
  },
  subquestionName: {
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "400",
    color: "#6C757D",
    marginBottom: 16
  },
  messageIcon: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 10
  },

  secundTitle: {
    backgroundColor: '#f3e5f5',
    color: '#7b1fa2',
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
    borderRadius: 6,
    textAlign: 'center',
    padding: 3,
    height: 24,
    width: 100,
  }
});