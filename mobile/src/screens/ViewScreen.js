import React, { Component } from "react";
import { SafeAreaView, View, ScrollView, FlatList, StyleSheet} from "react-native";
import Application from "../components/Application";
import Header from "../components/Header";
import Action from "../components/Action";
import { addIcon, actionSize } from "../constants";
import { Navigation } from "react-native-navigation";

export default class ViewScreen extends Component {

    render() {
        return(
            <SafeAreaView>
                <View style={{marginBottom: 32, marginLeft: 32, marginRight: 8}}>
                    {/* <FlatList 
                        renderItem
                        /> */}
                    <Header 
                        text="Your Credentials" 
                        containerStyles={{marginBottom: 24}}
                        action={() => {
                            Navigation.popToRoot(this.props.componentId);
                        }}/>
                    <Application
                        appName="Google"
                        username="papa@gmail.com"
                        password="h@ckM3"
                        deleteFunc={() => {}}
                        editFunc={() => {}}
                        containerStyles={{marginBottom: 16}}/>
                    <Application
                        appName="Facebook"
                        username="papi@gmail.com"
                        password="h@ckM3"
                        deleteFunc={() => {}}
                        editFunc={() => {}}
                        containerStyles={{marginBottom: 16}}/>
                    <Application
                        appName="SnapChat"
                        username="raw_papi"
                        password="r@w_r0d_0f_G0D"
                        deleteFunc={() => {}}
                        editFunc={() => {}}
                        containerStyles={{marginBottom: 16}}/>
                    <Application
                        appName="Google"
                        username="papa@gmail.com"
                        password="h@ckM3"
                        deleteFunc={() => {}}
                        editFunc={() => {}}
                        containerStyles={{marginBottom: 16}}  />
                </View>
                <Action 
                    icon={addIcon}
                    text="Add Credentials"
                    size={actionSize} 
                    action={()=>{Navigation.push(this.props.componentId, {component:{name:"CreateCreds"}})}}
                    containerStyles={{alignSelf: "center"}}/>
            </SafeAreaView>
        );
    }
}