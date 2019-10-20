import React, { Component } from "react";
import { View, Text, StyleSheet} from "react-native";
import Action from "./Action";
import { backArrowIcon, headerFontFamily, headerFontSize, mainFontColor_Light } from "../constants";
import { Navigation } from "react-native-navigation";

export default class Header extends Component {
    render() {

        const id = this.props.screenId;
        return(
            <View style={[styles.contianer, this.props.containerStyles]}>
                <Action 
                    text="Home" 
                    icon={backArrowIcon} 
                    size={16} 
                    action={this.props.action}
                    textStyles={{paddingLeft: 0}} 
                    containerStyles={{paddingHorizontal: 0, paddingBottom: 0}}/>
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        justifyContent: "flex-start"

    },
    text: {
        fontFamily: headerFontFamily,
        fontSize: headerFontSize,
        color: mainFontColor_Light
    }
});