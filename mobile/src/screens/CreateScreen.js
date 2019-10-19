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
    deleteIcon
} from "../constants";
import Action from "../components/Action";

export default class CreateScreen extends Component {
    render() {
        return(
            <SafeAreaView style={styles.screen}>
                <View>
                    <View>
                        <Text style={styles.headerText}>Create Credentials</Text>
                    </View>
                    <Text style={[styles.subHeader]}>Make a Password</Text>
                    <TextInput style={[styles.input]} placeholder={"Enter Some Value"} placeholderTextColor={placeholderFontColor}/>
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                        <Action icon={deleteIcon} text="Hello World" size={20} action={()=>{}}/>
                        <Action icon={deleteIcon} size={24} action={()=>{}}/>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: backgroundColor_Light
    },
    headerText: {
        color: mainFontColor_Light,
        fontFamily: headerFontFamily,
        fontSize: headerFontSize
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