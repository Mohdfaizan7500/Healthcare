// import { View, Platform, StyleSheet } from 'react-native';
// import { useLinkBuilder, useTheme } from '@react-navigation/native';
// import { Text, PlatformPressable } from '@react-navigation/elements';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { HomeIcon, PlayIcon, SettingIcon, UserIcon } from '../Assets/svg/icon';
// import TabBarButton from './TabBarButton';
// import { useState } from 'react';
// import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

// export function TabBar({ state, descriptors, navigation }) {
//     const { colors } = useTheme();
//     const { buildHref } = useLinkBuilder();

//     const [dimenstion, setdimenstion] = useState({ height: 20, width: 50 });

//     const buttonwidth = dimenstion.width / state.routes.length;

//     const onTabBarLayout = (e) => {
//         setdimenstion({
//             height: e.nativeEvent.layout.height,
//             width: e.nativeEvent.layout.width,


//         })
//     }

//     const tabPositionX = useSharedValue(0);

//     const animatedStyle = useAnimatedStyle(() => {
//         return {
//             transform: [{
//                 translateX: tabPositionX.value
//             }]
//         }
//     })




//     return (

//         <View onLayout={onTabBarLayout} style={styles.tabBar}>
//             <Animated.View style={[animatedStyle, {
//                 position: "absolute",

//                 width: buttonwidth - 0,
//                 height: buttonwidth - 5,
//                 backgroundColor: 'red',
//                 borderRadius: 16,
//                 // marginHorizontal: ,

//             }]} />

//             {state.routes.map((route, index) => {
//                 const { options } = descriptors[route.key];
//                 const label =
//                     options.tabBarLabel !== undefined
//                         ? options.tabBarLabel
//                         : options.title !== undefined
//                             ? options.title
//                             : route.name;

//                 const isFocused = state.index === index;

//                 const onPress = () => {
//                     tabPositionX.value = withSpring(buttonwidth * index, { duration: 500 })
//                     const event = navigation.emit({
//                         type: 'tabPress',
//                         target: route.key,
//                         canPreventDefault: true,
//                     });

//                     if (!isFocused && !event.defaultPrevented) {
//                         navigation.navigate(route.name, route.params);
//                     }
//                 };

//                 const onLongPress = () => {
//                     navigation.emit({
//                         type: 'tabLongPress',
//                         target: route.key,
//                     });
//                 };

//                 return (
//                     <TabBarButton
//                         key={route.name}
//                         onPress={onPress}
//                         onLongPress={onLongPress}
//                         isFocused={isFocused}
//                         routeName={route.name}
//                         label={label}
//                     />
//                     // <PlatformPressable
//                     //     key={route.name}
//                     //     href={buildHref(route.name, route.params)}
//                     //     accessibilityState={isFocused ? { selected: true } : {}}
//                     //     accessibilityLabel={options.tabBarAccessibilityLabel}
//                     //     testID={options.tabBarButtonTestID}
//                     //     onPress={onPress}
//                     //     onLongPress={onLongPress}
//                     //     style={styles.tabBarItem}
//                     // >
//                     //     {icon[route.name]({
//                     //         width: 25, height: 25,
//                     //         stroke: isFocused ? 'red' : colors.text
//                     //     })}
//                     //     <Text style={[{ color: isFocused ? 'red' : colors.text }, { fontSize: 12 }]}>
//                     //         {label}
//                     //     </Text>
//                     // </PlatformPressable>
//                 );
//             })}
//         </View>
//     );
// }


// const styles = StyleSheet.create({
//     tabBar: {
//         // height: 100,
//         flexDirection: "row",
//         justifyContent: 'space-between',
//         alignItems: "center",
//         backgroundColor: "#ffff",
//         borderRadius: 0,
//         paddingVertical: 18,
//         // bottom: 20,
//         // position: "absolute",
//         // marginHorizontal: 50,
//         // borderRadius: 50


//     },
//     // tabBarItem: {
//     //     flex: 1,
//     //     alignItems: "center",
//     //     justifyContent: "center",
//     //     gap: 5
//     // }

// })