import React, { Component } from "react";
import { 
    SafeAreaView, 
    View, 
    Text, 
    StyleSheet 
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { 
    appIcon, 
    normalTextFontFamily, 
    appTitleFontSize, 
    mainFontColor_Light, 
    backgroundColor_Light 
} from "../constants";

export default class HomeScreen extends Component {
    render() {
        return(
            <SafeAreaView style={[styles.screen]}>
                <View style={[styles.titleContainer]}>
                    <FontAwesomeIcon icon={appIcon} color={mainFontColor_Light} size={72}/>
                    <Text style={[styles.titleText]}>Citadel</Text>
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
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    titleText: {
        fontFamily: normalTextFontFamily,
        fontSize: appTitleFontSize,
        color: mainFontColor_Light
    }
});