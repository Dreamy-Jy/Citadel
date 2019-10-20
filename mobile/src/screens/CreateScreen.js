import React,{ Component } from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet} from "react-native";
import { 
    backgroundColor_Light, 
    mainFontColor_Light, 
    placeholderFontColor, 
    subheaderFontFamily, 
    subheaderFontSize,
    saveIcon,
    actionSize,
    highlightColor_Light,
    remakeIcon
} from "../constants";
import Action from "../components/Action";
import Header from "../components/Header";
import HighLightableTextInput from "../components/HighLightableTextInput";
import { Navigation } from "react-native-navigation";


export default class CreateScreen extends Component {
    render() {
        return(
            <SafeAreaView style={styles.screen}>
                
                <View style={styles.contentContianer}>
                    <Header 
                        text="Your Credentials" 
                        containerStyles={{marginBottom: 16}}
                        action={() => {
                            Navigation.popToRoot(this.props.componentId);
                        }}/>
                    
                    <Text style={[styles.subHeader]}>Make a Password</Text>
                    <View style={styles.passwordInputsContianer}>
                        <HighLightableTextInput
                            onChange={() => {}}
                            placeholder={"Enter Some Value"}
                            containerStyles={{width:"80%"}}/>
                        <Action icon={remakeIcon} size={24} action={() => {}}/>
                    </View>

                    <Text style={[styles.subHeader]}>App Name</Text>
                    <HighLightableTextInput
                        onChange={() => {}}
                        placeholder={"Enter Some Value"}
                        containerStyles={{marginBottom: 24}}/>

                    <Text style={[styles.subHeader]}>Username</Text>
                    <HighLightableTextInput
                        onChange={() => {}}
                        placeholder={"Enter Some Value"}
                        containerStyles={{marginBottom: 32}}/>
                </View>
                <Action 
                    text={"Save"}
                    icon={saveIcon} 
                    size={actionSize} 
                    action={() => {
                        Navigation.popToRoot(this.props.componentId);
                    }} 
                    containerStyles={{alignSelf: "center"}}/>
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
    passwordInputsContianer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24
    },
    contentContianer: {
        marginLeft: 32,
        marginRight: 32
    }
});