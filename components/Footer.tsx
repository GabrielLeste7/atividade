import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Açaí Prime • O sabor autêntico da Amazônia</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        padding: 13,
        alignItems: "center",
        marginBlock: 13
    },
    footerText: {
        fontSize: 11,
        fontWeight: "500",
        color: "#6C757D"
    }
});