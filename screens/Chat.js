import { FlatList, Image, Pressable, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BRAND } from '../constants/color'
import { BackIcon, StarIcon } from '../Assets/svg/icons'
import { s, vs } from 'react-native-size-matters'

const Chat = () => {




    const data = [
        {
            id: 1,
            title: "Path lab pharmacy",
            distance: 5,
            review: 120,
            rating: 4.5,
            image: require('../Assets/image/image1.jpg')
        },
        {
            id: 2,
            title: "24 pharmacy",
            distance: 9,
            review: 160,
            rating: 3.5,
            image: require('../Assets/image/medical.png')
        },
        {
            id: 3,
            title: "Path lab pharmacy",
            distance: 7,
            review: 150,
            rating: 2.5,
            image: require('../Assets/image/image1.jpg')
        },
        {
            id: 4,
            title: "Path lab pharmacy",
            distance: 12,
            review: 110,
            rating: 5.5,
            image: require('../Assets/image/medical.png')
        }
    ]
    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <TouchableOpacity onPress={() => { ToastAndroid.show('Back Click', ToastAndroid.SHORT) }}>
                    <BackIcon width={s(30)} height={s(30)} />
                </TouchableOpacity>
                <Image source={require('../Assets/image/location.gif')}
                    style={{ width: s(35), height: s(35) }}
                />
                <Text style={styles.Title}>Mohali</Text>
            </View>

            <View style={{ width: "100%" }}>
                <Text style={styles.PharmayText}>Pharmacy Nearby</Text>
            </View>
            <View style={{ width: "100%", }}>
                <FlatList
                    style={styles.flatList}
                    contentContainerStyle={styles.flatListContent}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={styles.Box}>
                            <Image
                                source={item.image}
                                style={styles.boxImage}
                            />
                            <View style={styles.boxContent}>
                                <Text style={styles.BoxTitle}>{item.title}</Text>
                                <Text style={styles.distanceText}>{item.distance}km Away</Text>
                                <View style={styles.ratingContainer}>
                                    <StarIcon width={s(15)} height={s(15)} />
                                    <Text style={styles.ratingText}>{item.rating} ({item.review} review)</Text>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
            <Text style={[styles.uploadText, { fontSize: s(24) }]}>Upload Prescription</Text>
            <Text style={[styles.uploadText, { textAlign: "center", fontSize: s(12), lineHeight: 20, marginTop: 20 }]} >We will show the pharmacy that fits as per your prescription.</Text>
            <View style={styles.Buttonconatiner}>
                <Pressable style={{ alignItems: "center", justifyContent: "center" }}
                    onPress={() => { ToastAndroid.show('Upload link clicked', ToastAndroid.SHORT) }}>
                    <Image source={require('../Assets/image/LinkFile.gif')}
                        style={{ width: s(50), height: s(50) }}
                    />
                    <Text style={styles.Label}>Upload Link</Text>
                </Pressable>
                <Pressable style={{ alignItems: "center", justifyContent: "center" }}
                    onPress={() => { ToastAndroid.show('Upload File clicked', ToastAndroid.SHORT) }}>
                    <Image source={require('../Assets/image/Download.gif')}
                        style={{ width: s(50), height: s(50) }}
                    />
                    <Text style={styles.Label}>Upload File</Text>
                </Pressable>

            </View>

            <TouchableOpacity style={styles.Button} onPress={() => { ToastAndroid.show('Continue Clicked', ToastAndroid.SHORT) }}>
                <Text style={styles.ButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: BRAND.background,
        alignItems: "center",
        paddingHorizontal: s(20)
    },
    Header: {
        width: "100%",
        flexDirection: "row",
        gap: s(15),
        height: 50,
        alignItems: "center"
    },
    Title: {
        fontSize: s(18),
        fontFamily: "BalooThambi2-Medium"
    },
    PharmayText: {
        fontSize: s(18),
        fontFamily: "BalooThambi2-Bold",
        color: BRAND.text,
    },
    flatList: {
        marginTop: s(10),
        width: "100%"
    },
    flatListContent: {
        paddingRight: s(20),
        // backgroundColor: "red",
        // height: (200)// Adds padding at the end for better scrolling
    },
    Box: {
        width: s(190),
        height: vs(160),
        marginRight: s(10), // Use marginRight instead of marginLeft for horizontal lists
        borderRadius: s(20),
        overflow: "hidden",
        borderWidth: s(0.5),
        borderColor: BRAND.text
    },
    boxImage: {
        width: "100%",
        height: s(90)
    },
    boxContent: {
        flex: 1,
        paddingHorizontal: s(10),
        paddingVertical: s(10),
        justifyContent: "space-between"
    },
    BoxTitle: {
        fontSize: s(14),
        fontFamily: 'BalooThambi2-Medium',
        color: BRAND.text,
        lineHeight: s(15)
    },
    distanceText: {
        fontSize: s(10),
        fontFamily: 'BalooThambi2-Medium',
        color: BRAND.text,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: s(5)
    },
    ratingText: {
        fontSize: s(10),
        fontFamily: 'BalooThambi2-Medium',
        color: BRAND.text,
    },
    uploadText: {
        marginTop: s(20),
        fontSize: s(16),
        fontFamily: 'BalooThambi2-Medium',
        color: BRAND.text,
    },
    Buttonconatiner: {
        width: "100%",
        borderWidth: s(0.5),
        borderColor: BRAND.text,
        // height: s(140),
        borderRadius: s(20),
        marginTop: s(30),
        alignItems: "center",
        justifyContent: 'space-between',
        paddingHorizontal: s(30),
        paddingVertical: s(30),
        flexDirection: "row"
    },
    Label: {
        fontSize: s(14),
        fontFamily: 'BalooThambi2-Medium',
        color: BRAND.text
    },
    Button: {
        width: "100%",
        backgroundColor: BRAND.primary,
        justifyContent: "center",
        alignItems: "center",
        marginTop: s(20),
        paddingVertical: s(5),
        borderRadius: s(15)
    },
    ButtonText: {
        fontSize: s(24),
        fontFamily: 'BalooThambi2-SemiBold',
        color: BRAND.background
    }
})