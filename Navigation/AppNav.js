import { StatusBar, StyleSheet, Text, View, Animated, Easing } from 'react-native'
import React, { useContext, useEffect, useRef } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { AppContext } from '../context/AppContext';
import { BRAND } from '../constants/color';
import { s } from 'react-native-size-matters';
import { Wave1, Wave2s } from '../Assets/svg/icons';

const Stack = createStackNavigator();

const AppNav = () => {
    const { userToken, isLoading } = useContext(AppContext);
    const wave1Anim = useRef(new Animated.Value(0)).current;
    const wave2Anim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isLoading) {
            // Create infinite wave animations
            const animateWaves = () => {
                // Wave 1 animation (continuous horizontal movement)
                Animated.loop(
                    Animated.timing(wave1Anim, {
                        toValue: 1,
                        duration: 2000,
                        easing: Easing.linear,
                        useNativeDriver: true,
                    })
                ).start();

                // Wave 2 animation (slightly different timing for natural effect)
                Animated.loop(
                    Animated.timing(wave2Anim, {
                        toValue: 1,
                        duration: 1800,
                        easing: Easing.linear,
                        useNativeDriver: true,
                    })
                ).start();
            };

            animateWaves();
        }

        return () => {
            // Clean up animations when component unmounts
            wave1Anim.stopAnimation();
            wave2Anim.stopAnimation();
        };
    }, [isLoading]);

    // Interpolate wave positions for horizontal movement
    const wave1TranslateX = wave1Anim.interpolate({
        inputRange: [0, 1],
        outputRange: [-30, 30] // Move from left to right
    });

    const wave2TranslateX = wave2Anim.interpolate({
        inputRange: [0, 1],
        outputRange: [30, -30] // Move from right to left
    });

    // Add vertical movement for more realistic wave effect
    const wave1TranslateY = wave1Anim.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [0, -3, 0, 3, 0] // Up and down movement
    });

    const wave2TranslateY = wave2Anim.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [0, 3, 0, -3, 0] // Opposite vertical movement
    });

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: BRAND.background }}>
                <StatusBar backgroundColor={BRAND.background} />
                <View style={styles.Circule}>
                    <View style={{ flex: 1, borderRadius: s(100), overflow: "hidden" }}>
                        
                        {/* Animated Wave 1 */}
                        <Animated.View style={[
                            styles.Wave1,
                            {
                                transform: [
                                    { translateX: wave1TranslateX },
                                    { translateY: wave1TranslateY }
                                ]
                            }
                        ]}>
                            <Wave1 width={s(110)} height={110} />
                        </Animated.View>

                        {/* Animated Wave 2 */}
                        <Animated.View style={[
                            styles.Wave2s,
                            {
                                transform: [
                                    { translateX: wave2TranslateX },
                                    { translateY: wave2TranslateY }
                                ]
                            }
                        ]}>
                            <Wave2s width={s(110)} height={110} />
                        </Animated.View>

                    </View>
                </View>
            </View>
        );
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {userToken ? (
                <Stack.Screen name="AppStack" component={AppStack} />
            ) : (
                <Stack.Screen name="AuthStack" component={AuthStack} />
            )}
        </Stack.Navigator>
    )
}

export default AppNav

const styles = StyleSheet.create({
    Circule: {
        width: s(100),
        height: s(100),
        borderRadius: s(100),
        borderColor: BRAND.primary,
        borderWidth: s(2),
        padding: s(8),
        overflow: 'hidden',
        position: 'relative',
    },
    Wave1: {
        position: 'absolute',
        bottom: 0,
        left: -12,
    },
    Wave2s: {
        position: 'absolute',
        bottom: 0,
        right: -20,
        zIndex: 10
    }
})