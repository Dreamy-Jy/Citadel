import React, { Component } from "react";
import { View, Text, StyleSheet} from "react-native";
import Action from "./Action";
import { backArrowIcon, headerFontFamily, headerFontSize, mainFontColor_Light } from "../constants";

export default class Header extends Component {
    render() {
        return(
            <View style={styles.contianer}>
                <Action text="Home" icon={backArrowIcon} size={16} action={() => {}} textStyles={{paddingLeft: 0}} containerStyles={{paddingHorizontal: 0}}/>
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