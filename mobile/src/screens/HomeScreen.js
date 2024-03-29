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
    backgroundColor_Light, 
    addIcon,
    viewIcon,
    actionSize
} from "../constants";
import Action from "../components/Action";
import { Navigation } from "react-native-navigation";

export default class HomeScreen extends Component {
    render() {
        return(
            <View style={[styles.screen]}>
                <View style={[styles.titleContainer]}>
                    <FontAwesomeIcon icon={appIcon} color={mainFontColor_Light} size={72}/>
                    <Text style={[styles.titleText]}>Citadel</Text>
                </View>
                <View style={styles.actionContainer}>
                    <Action 
                        icon={addIcon}
                        text="Add Credentials"
                        size={actionSize-8} 
                        action={()=>{ Navigation.push(this.props.componentId, {component:{name:"CreateCreds"}}) }}/>
                    <Action 
                        icon={viewIcon} 
                        text="View Credentials" 
                        size={actionSize-8} 
                        action={() => { Navigation.push(this.props.componentId, {component:{name:"ViewCreds"}}) }}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: backgroundColor_Light,
        alignItems: "center",
        justifyContent: "center",
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 32
    },
    titleText: {
        fontFamily: normalTextFontFamily,
        fontSize: appTitleFontSize,
        color: mainFontColor_Light
    },
    actionContainer: {
        alignItems: "center",
        justifyContent: "space-between",
        height: 100

    }
});