import { StatusBar, StyleSheet, Text, View, Animated, Easing, Dimensions, Alert } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { BRAND } from '../constants/color'
import { s, vs } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window')

const SplashScreen = () => {
    const scaleAnim = useRef(new Animated.Value(0)).current
    const textOpacity = useRef(new Animated.Value(1)).current

    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            // Start both animations in parallel
            Animated.parallel([
                // Scale up the circle
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 12000,
                    easing: Easing.out(Easing.exp),
                    useNativeDriver: true,
                }),
                // Fade out the text
                Animated.timing(textOpacity, {
                    toValue: 0,
                    duration: 3000, // Faster fade out
                    easing: Easing.out(Easing.exp),
                    useNativeDriver: true,
                })
            ]).start()
        }, 2000); // 3 seconds delay
        const timer2 = setTimeout(() => {

            // Alert.alert("Welcome to Healthcare App")
            navigation.replace('AppNav');
            // You can navigate to another screen here if needed
        }, 4000); // Total duration before navigating away

        return () => clearTimeout(timer, timer2);
    }, [])

    const circleScale = scaleAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, Math.max(width, height) / 100]
    })

    return (
        <View style={styles.Container}>
            <StatusBar hidden={true} />

            {/* Animated Circle */}
            <Animated.View style={[
                styles.Circle,
                {
                    transform: [{ scale: circleScale }]
                }
            ]} />

            {/* Static Text (not affected by circle scale) */}
            <Animated.Text style={[
                styles.Title,
                {
                    opacity: textOpacity,
                    position: 'absolute', // Keep text in center
                }
            ]}>
                Healthcare
            </Animated.Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BRAND.background,
        overflow: 'hidden'
    },
    Circle: {
        width: s(200),
        height: s(200),
        borderRadius: s(150),
        backgroundColor: BRAND.primary,
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
    },
    Title: {
        fontSize: s(30),
        color: BRAND.background,
        fontFamily: "BalooThambi2-Medium",
        // fontWeight: 'bold'
    }
})