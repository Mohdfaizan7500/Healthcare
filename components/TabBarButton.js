// import { Pressable, StyleSheet, Text, View } from 'react-native'
// import React, { useEffect } from 'react'
// import { icon } from '../components/TabBarIcons';
// import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
// import { s } from 'react-native-size-matters';


// const TabBarButton = ({ onPress, onLongPress, isFocused, routeName, label }) => {

//     const scale = useSharedValue(0);

//     useEffect(() => {
//         scale.value = withSpring(typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused, { duration: 350 })
//     }, [scale, isFocused])

//     const animatedTextStyle = useAnimatedStyle(() => {
//         const opacity = interpolate(scale.value, [0, 1], [1, 0])

//         return {
//             opacity
//         }
//     })

//     const animatedIconStyle = useAnimatedStyle(() => {
//         const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);

//         const top = interpolate(scale.value, [0, 1], [0, 9])

//         return {
//             transform: [{
//                 scale: scaleValue
//             }],
//             top
//         }
//     })


//     return (
//         <Pressable

//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={styles.tabBarItem}
//         >
//             <Animated.View style={animatedIconStyle}>
//                 {icon[routeName]({
//                     width: 25, height: 25,
//                     stroke: isFocused ? '#fff' : 'red',
//                     // fill :isFocused ? BRAND.white : BRAND.muted,
//                 })}
//             </Animated.View >
//             <Animated.Text style={[{ color: isFocused ? '#fff' : 'red' }, { fontSize: 12 }, animatedTextStyle]}>
//                 {label}
//             </Animated.Text>
//         </Pressable>
//     )
// }

// export default TabBarButton

// const styles = StyleSheet.create({
//     tabBarItem: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         gap: 5,
//     }
// })