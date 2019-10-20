import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Action from "./Action";
import { 
    deleteIcon, 
    editIcon, 
    slimTextFontFamily, 
    slimTextFontSize, 
    subheaderFontFamily, 
    subheaderFontSize, 
    mainFontColor_Light 
} from "../constants";

export default class Application extends Component {
    render() {
        return(
            <View style={[this.props.containerStyles]}>
                <View style={[styles.primaryContianer]}>
                    <Text style={styles.subheader}> {this.props.appName} </Text>
                    <View style={styles.secondaryContainer}>
                        <Action icon={deleteIcon} size={subheaderFontSize+8} action={this.props.deleteFunc} containerStyles={{marginRight: 8}}/>
                        <Action icon={editIcon} size={subheaderFontSize+8} action={this.props.editFunc}/>
                    </View>
                </View>
                <View style={styles.secondaryContainer}>
                    <Text style={styles.slimText}> {this.props.username} </Text>
                    <Text style={styles.slimText}> {this.props.password} </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    primaryContianer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 0
    },
    secondaryContainer: {
        flexDirection: "row",
        justifyContent:"space-between",
    },
    subheader: {
        fontFamily: subheaderFontFamily,
        fontSize: subheaderFontSize,
        color: mainFontColor_Light
    },
    slimText: {
        fontFamily: slimTextFontFamily,
        fontSize: slimTextFontSize,
        color: mainFontColor_Light
    }
});