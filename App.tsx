import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';


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
            <Text style={styles.featuredPrice}>R$ 22,90</Text>
          </View>

          <Text style={styles.sectionTitle}>Nosso Cardápio</Text>

          <View style={styles.sectionMenu}>
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
    backgroundColor: '#f9f9f9'
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
  featuredTitle: {
    fontSize: 20,
    color: '#2f2d2c',
    fontWeight: '800'
  },
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
    backgroundColor: '#c67c4e',
    width: '100%',
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 16,
    alignItems: 'center',
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
  }
});