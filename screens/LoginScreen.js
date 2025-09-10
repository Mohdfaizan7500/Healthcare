import { StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { BRAND } from '../constants/color'
import { s, vs } from 'react-native-size-matters'
import { EmailIcon, LockIcon } from '../Assets/svg/icons';
import { AppContext } from '../context/AppContext';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { Login } = useContext(AppContext);

    const loginHandle = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (!email || !password) {
            ToastAndroid.show("Please enter email and password", ToastAndroid.SHORT);
            return;
        }

        if (!emailRegex.test(email)) {
            ToastAndroid.show("Email must be a valid @gmail.com address", ToastAndroid.SHORT);
            return;
        }

        ToastAndroid.show("Login Successful", ToastAndroid.SHORT);
        Login(email,password);
        setEmail('');
        setPassword('');
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={BRAND.background} />
            <Text style={styles.loginTitle}>LOGIN</Text>
            <Text style={styles.healthcareTitle}>Healthcare</Text>

            {/* Email Input */}
            <View style={[styles.inputContainer, { marginTop: vs(60) }]}>
                <EmailIcon width={s(20)} height={vs(20)} />
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={styles.textInput}
                    cursorColor={BRAND.primary}
                    placeholderTextColor={BRAND.text + '80'}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Text style={styles.inputLabel}>Email Address</Text>
            </View>

            {/* Password Input */}
            <View style={[styles.inputContainer, { marginTop: vs(40) }]}>
                <LockIcon width={s(20)} height={vs(20)} />
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    style={styles.textInput}
                    cursorColor={BRAND.primary}
                    placeholderTextColor={BRAND.text + '80'}
                />
                <Text style={styles.inputLabel}>Password</Text>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Registration Prompt */}
            <Text style={styles.registerText}>
                Don't have an account?{' '}
                <Text style={styles.registerLink}>Click here to register</Text>
            </Text>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={loginHandle}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: BRAND.background,
        paddingHorizontal: s(20)
    },
    loginTitle: {
        fontSize: s(16),
        fontFamily: "BalooThambi2-Medium",
        color: BRAND.text,
        marginTop: vs(20)
    },
    healthcareTitle: {
        fontSize: s(30),
        color: BRAND.text,
        fontFamily: "BalooThambi2-Medium",
        marginTop: s(60)
    },
    inputContainer: {
        borderWidth: s(0.5),
        width: '100%',
        height: vs(50),
        borderColor: BRAND.text,
        borderRadius: s(10),
        alignItems: 'center',
        flexDirection: "row",
        paddingHorizontal: s(15)
    },
    textInput: {
        fontSize: s(16),
        color: BRAND.text,
        marginLeft: s(10),
        flex: 1,
        height: '100%',
    },
    inputLabel: {
        fontSize: s(12),
        color: BRAND.text,
        fontFamily: "BalooThambi2-Medium",
        position: "absolute",
        top: -vs(10),
        left: s(15),
        backgroundColor: BRAND.background,
        paddingHorizontal: s(8)
    },
    forgotPasswordButton: {
        width: "100%",
        marginTop: s(10),
        alignItems: 'flex-end'
    },
    forgotPasswordText: {
        fontSize: s(14),
        color: BRAND.primary,
        fontFamily: "BalooThambi2-Medium",
    },
    registerText: {
        fontSize: s(12),
        color: BRAND.text,
        fontFamily: "BalooThambi2-Medium",
        textAlign: "center",
        marginTop: vs(30)
    },
    registerLink: {
        color: BRAND.primary
    },
    loginButton: {
        backgroundColor: BRAND.primary,
        width: "100%",
        height: vs(60),
        borderRadius: s(10),
        justifyContent: "center",
        alignItems: "center",
        marginTop: vs(70)
    },
    loginButtonText: {
        fontSize: s(24),
        color: BRAND.background,
        fontFamily: "BalooThambi2-Medium",
    }
})