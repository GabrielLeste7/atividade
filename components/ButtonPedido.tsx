import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonPedidoProps = {
    title: string;
    onPress: () => void;
};

export default function ButtonPedido({ title, onPress }: ButtonPedidoProps) {
    return (
        <TouchableOpacity style={styles.buttonPedido} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonPedido: {
        backgroundColor: '#7b1fa2',
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
    }
})