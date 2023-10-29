import { NavigationProp, ParamListBase } from "@react-navigation/native"
import { useState } from "react"
import { View, StyleSheet, ImageBackground, Text } from "react-native"

type Props = {
    index: number,
    amountOfDots: number,
}

export default function Dots( {index, amountOfDots}: Props) {

    return (
        <View style={styles.container}>
            <View style={styles.dotsContainer}>
                {Array.from(Array(amountOfDots).keys()).map((_, i) => (
                    <View key={i} style={[styles.circle, {backgroundColor: i === index ? "#865AFF": "#1E1E1E"}]}></View>
                ))}
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
