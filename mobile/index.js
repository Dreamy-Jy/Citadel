/**
 * @format
 */

import App from './App';
import { Navigation } from "react-native-navigation";
import AsyncStorage from "@react-native-community/async-storage";


storeData = async () => {
    try {
        await AsyncStorage.setItem('@storage_key', 'stored value')
    } catch (e) {}
}
storeData();

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "navigation.playground.WelcomeScreen"
            }
        }
    });
});

