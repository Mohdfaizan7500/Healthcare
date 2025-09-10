import { Dimensions, Pressable, StyleSheet, Text, ToastAndroid, TouchableOpacity, View, Image, StatusBar, ScrollView, Alert } from 'react-native'
import React, { useContext } from 'react'
import { CalenderIcon, DrawerIcon, HealthLogo, MessageIcon, MiceIcon, QuestionIcon, ReminderIcon } from '../Assets/svg/icons'
import { BRAND } from '../constants/color'
import { s, vs } from 'react-native-size-matters'
import { AppContext } from '../context/AppContext'
// import {use} from 'react-native-r'

const Home = () => {


  const { logout } = useContext(AppContext);


  const logouthandle = () => {
    Alert.alert(
      'Alert',
      'Do you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => logout()
        }
      ]
    );
  };


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={BRAND.background} />
      {/* Header */}
      <View style={styles.Header} >
        <View style={{ flexDirection: "row", alignItems: "center", gap: s(30) }}>
          <Pressable onPress={() => { ToastAndroid.show("Drawer Clicked", ToastAndroid.SHORT) }}>
            <DrawerIcon width={s(24)} height={s(24)} />
          </Pressable>
          <HealthLogo />
        </View>
        <Pressable style={styles.MiceCircule} onPress={logouthandle}>
          <MiceIcon width={s(20)} height={s(20)} />
        </Pressable>
      </View>
      <ScrollView style={{ width: "100%", zIndex: 1 }}  >

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.Button} onPress={() => { ToastAndroid.show("Questions Clicked", ToastAndroid.SHORT) }}>
            <Text>Questions</Text>
            <QuestionIcon width={s(20)} height={s(20)} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button} onPress={() => { ToastAndroid.show("Reminders Clicked", ToastAndroid.SHORT) }}>
            <Text>Reminders</Text>
            <ReminderIcon width={s(20)} height={s(20)} />
          </TouchableOpacity>
        </View>

        <View style={[styles.buttonContainer, { marginTop: s(10) }]}>
          <TouchableOpacity style={styles.Button} onPress={() => { ToastAndroid.show("Messages Clicked", ToastAndroid.SHORT) }}>
            <Text>Messages</Text>
            <MessageIcon width={s(20)} height={s(20)} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button} onPress={() => { ToastAndroid.show("Calendar Clicked", ToastAndroid.SHORT) }}>
            <Text>Calendar</Text>
            <CalenderIcon width={s(20)} height={s(20)} />
          </TouchableOpacity>
        </View>

        {/* Upload Prescription */}
        <View style={{ width: "100%" }}>
          <Text style={styles.uploadText}>UPLOAD PRESCRIPTION</Text>
          <Text style={styles.uploadDescription}>Upload a Prescription and Tell Us What you Need. We do the Rest!</Text>
        </View>

        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: s(10) }}>
          <View style={{ alignItems: 'flex-start', width: '60%' }}>
            <Text style={styles.offerText}>Flat 25% OFF ON MEDICINES</Text>
          </View>
          <TouchableOpacity style={styles.OrderButton} onPress={() => { ToastAndroid.show("Order Now Clicked", ToastAndroid.SHORT) }}>
            <Text style={styles.OrderText}>ORDER NOW</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.servicesContainer}>
          <View>
            <View style={{ width: '75%' }}>
              <Text style={styles.serviceTitle}>Get the Best Medical Service</Text>
            </View>
            <View style={{ width: "90%" }}>
              <Text style={styles.serviceDescription}>Rem illum facere quo corporis Quis in saepe itaque ut quos pariatur. Qui numquam rerum hic repudiandae rerum id amet tempore nam molestias omnis qui earum voluptatem!</Text>
            </View>
          </View>
          <Image
            source={require('../Assets/image/Docter.png')}
            style={{ width: s(65), height: vs(150), }}
            resizeMode='contain'
          />
        </View>

        <View style={[styles.servicesContainer2, { backgroundColor: '#D7D0FF' }]}>
          <View >
            <View style={{ justifyContent: "space-between", flex: 1 }}>
              <View>
                <View style={{ flexDirection: "row", alignItems: "center", }}>
                  <View style={styles.rotatedText}>
                    <Text style={[styles.UptoText,]}>UPTO </Text>
                  </View>
                  <View>
                    <Text style={[styles.UptoText, { fontSize: s(30) }]}>80%</Text>
                    <Text style={styles.UptoText}>offer</Text>
                  </View>
                </View>
                <Text style={[styles.UptoText, { fontSize: s(16), marginTop: s(10) }]}>On Health Products</Text>
              </View>
              <TouchableOpacity style={[styles.ShopButton]} onPress={() => { ToastAndroid.show('Shop Now Clicked', ToastAndroid.SHORT) }}>
                <Text style={[styles.OrderText, { fontSize: s(14) }]}>SHOP NOW</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Image
            source={require('../Assets/image/Medicin.png')}
            style={{ width: s(80), height: s(130), }}
            resizeMode='contain'
          />

        </View>
      </ScrollView>
      <View style={styles.BGDesign}></View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: BRAND.background,
    paddingHorizontal: s(20)
  },
  Header: {
    width: '100%',
    height: vs(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  MiceCircule: {
    width: s(40),
    height: s(40),
    borderRadius: s(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: s(1),
    borderColor: BRAND.text,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Button: {
    width: Dimensions.get('window').width / 2 - s(30),
    borderWidth: s(1),
    borderColor: '#6C6060',
    borderRadius: s(10),
    justifyContent: 'space-between',
    paddingHorizontal: s(15),
    paddingVertical: vs(10),
    alignItems: 'center',
    flexDirection: 'row',
  },
  uploadText: {
    fontSize: s(16),
    color: '#3A3A3A',
    fontFamily: 'BalooThambi2-Bold',
    marginTop: s(10)
  },
  uploadDescription: {
    fontSize: s(12),
    color: BRAND.muted,
    fontFamily: 'BalooThambi2-SemiBold',
    lineHeight: vs(15),
  },
  offerText: {
    fontSize: s(14),
    color: '#4A4A4A',
    fontFamily: 'BalooThambi2-Medium',
    textAlign: 'left',
    lineHeight: vs(15),
  },
  OrderButton: {
    backgroundColor: BRAND.accent,
    padding: s(10),
    borderRadius: s(10),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  OrderText: {
    fontSize: s(16),
    color: '#fff',
    fontFamily: 'BalooThambi2-Medium',
  },
  servicesContainer: {
    width: '100%',
    backgroundColor: '#C8F5C4',
    borderRadius: s(15),
    marginTop: s(20),
    paddingHorizontal: s(45),
    paddingVertical: vs(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  serviceTitle: {
    fontSize: s(14),
    color: BRAND.text,
    fontFamily: 'BalooThambi2-Bold',
    lineHeight: vs(18),
  },
  serviceDescription: {
    fontSize: s(10),
    color: BRAND.muted,
    fontFamily: 'BalooThambi2-Medium',
    marginTop: s(5),
    lineHeight: vs(15),
  },
  BGDesign: {
    position: 'absolute',
    width: "70%",
    height: vs(150),
    left: 0,
    bottom: vs(100),
    backgroundColor: '#F5E1E9',
    borderTopRightRadius: s(20),
    borderBottomRightRadius: s(20),
    zIndex: 0
  },
  servicesContainer2: {
    flexDirection: "row",
    borderRadius: s(10),
    marginTop: s(20),
    marginBottom: s(30),
    justifyContent: "space-between",
    paddingVertical: s(20),
    paddingHorizontal: s(20)

  },
  UptoText: {
    fontSize: s(16),
    fontFamily: "BalooThambi2-SemiBold",
    lineHeight: s(20)
  },
  rotatedText: {
    transform: [{ rotate: '-90deg' }],
    height: s(20)
    // fontSize: 18,
    // fontWeight: 'bold',
  },
  ShopButton: {
    backgroundColor: "#1C82DF",
    width: s(110),
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: s(10),
    paddingVertical: s(5),
    borderRadius: s(10),
    elevation: 5
  }
})