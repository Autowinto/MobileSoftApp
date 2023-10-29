import { NavigationProp, ParamListBase } from "@react-navigation/native"
import React from "react"
import { View, StyleSheet, ImageBackground, Text } from "react-native"

export default function NavbarTop() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <ImageBackground
                    source={require("../assets/autorent-logo.png")}
                    style={styles.icon}
                ></ImageBackground>
                <Text style={styles.title}>Autorent</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 300,
        maxHeight: 57,
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 60,
        flexDirection: "row",
    },
    icon: {
        resizeMode: "contain",
        width: 57,
        height: 57,
        marginBottom: 5,
    },
    titleContainer: {
        gap: 10,
        width: 200,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
        letterSpacing: 2,
        color: "#fff",
    },
})
