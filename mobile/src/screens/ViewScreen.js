import React, { Component } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import Application from "../components/Application";
import Header from "../components/Header";
import Action from "../components/Action";
import { addIcon } from "../constants";

export default class ViewScreen extends Component {
    render() {
        return(
            <SafeAreaView>
                <View>
                    <Header text="Your Credentials"/>
                    <Application
                        appName="Google"
                        username="papa@gmail.com"
                        password="h@ckM3"
                        deleteFunc={() => {}}
                        editFunc={() => {}} />
                </View>
                <Action 
                    icon={addIcon}
                    text="Add Credentials"
                    size={16} 
                    action={()=>{}}/>
            </SafeAreaView>
        );
    }
}