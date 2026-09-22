import { StyleSheet, Text, View } from "react-native";

type CoffeeCardProps = {
    name: string,
    description: string,
    price: string;
};

export default function CoffeeCard({ name, description, price }: CoffeeCardProps) { 
    return (        
            <View style={styles.cardItem}>
                <Text style={styles.cardTitle}>{name}</Text>
                <Text style={styles.cardDescription}>{description}</Text>
                <Text style={styles.cardPrice}>R$ {price}</Text>
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
  }
})