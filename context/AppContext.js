import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = createContext();



export const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const Login = async () => {
        try {
            setIsLoading(true);
            await AsyncStorage.setItem('userToken', "yuryuruy");
            setUserToken("yuryuruy");
            setIsLoading(false);
        } catch (error) {
            console.error("Error logging in:", error);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    }

    const logout = async () => {
        try {
            setIsLoading(true);
            // AsyncStorage.removeItem('userToken');
            setUserToken(null);
            setIsLoading(false);
        } catch (error) {
            console.error("Error logging out:", error);
            setIsLoading(false);
        }
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            const token = await AsyncStorage.getItem('userToken');
            setUserToken(token);
        } catch (error) {
            console.error("Error checking login status:", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, [])

    return (
        <AppContext.Provider value={{ userToken, setUserToken, isLoading, logout, Login }}>
            {children}
        </AppContext.Provider>
    )
}






