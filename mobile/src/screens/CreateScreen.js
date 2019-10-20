import React,{ Component } from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet} from "react-native";
import { 
    backgroundColor_Light, 
    mainFontColor_Light, 
    headerFontFamily, 
    headerFontSize, 
    placeholderFontColor, 
    subheaderFontFamily, 
    subheaderFontSize,
    deleteIcon,
    saveIcon,
    actionSize
} from "../constants";
import Action from "../components/Action";
import Header from "../components/Header";

export default class CreateScreen extends Component {
    render() {
        return(
            <SafeAreaView style={styles.screen}>
                
                <View>
                    <Header text="Your Credentials" />

                    <Text style={[styles.subHeader]}>Make a Password</Text>
                    <TextInput style={[styles.input]} placeholder={"Enter Some Value"} placeholderTextColor={placeholderFontColor}/>
                </View>
                <Action text={"Save"} icon={saveIcon} size={actionSize} action={() => {}} containerStyles={{alignSelf: "center"}}/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: backgroundColor_Light
    },
    subHeader: {
        color: mainFontColor_Light,
        fontFamily:subheaderFontFamily,
        fontSize: subheaderFontSize
    },
    input: {
        backgroundColor: "transparent",
        fontSize: 16,
        color: mainFontColor_Light,
        borderBottomWidth: 2,
        borderBottomColor: mainFontColor_Light
    }

});