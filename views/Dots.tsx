import { NavigationProp, ParamListBase } from "@react-navigation/native"
import { useState } from "react"
import { View, StyleSheet, ImageBackground, Text } from "react-native"

export default function Dots( {index}: any) {

    return (
        <View style={styles.container}>
            <View style={styles.dotsContainer}>
                <View style={[styles.circle, index === 0 ? { backgroundColor: '#865AFF'} : null]}></View>
                <View style={[styles.circle, index === 1 ? { backgroundColor: '#865AFF'} : null]}></View>
                <View style={[styles.circle, index === 2 ? { backgroundColor: '#865AFF'} : null]}></View>
                <View style={[styles.circle, index === 3 ? { backgroundColor: '#865AFF'} : null]}></View>
                <View style={[styles.circle, index === 4 ? { backgroundColor: '#865AFF'} : null]}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
        flexDirection: "row",
    },
    dotsContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    circle: {
        width: 10,
        height: 10,
        borderRadius: 100,
        backgroundColor: "#1E1E1E",
    }
})
