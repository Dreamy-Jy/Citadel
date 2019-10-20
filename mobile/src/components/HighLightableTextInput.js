import React, { Component } from "react";
import { View, TextInput, Animated, StyleSheet } from "react-native";
import { placeholderFontColor, regularFontSize, mainFontColor_Light, highlightColor_Light } from "../constants";

export default class HighLightableTextInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundColorAnimator: new Animated.Value(0)
        };

        this.focused = this.focused.bind(this);
        this.editingEnded = this.editingEnded.bind(this);
    }

    focused() {
        Animated.timing(this.state.backgroundColorAnimator, {
            toValue: 1,
            duration: 300
        }).start();
    }

    editingEnded() {
        Animated.timing(this.state.backgroundColorAnimator, {
            toValue: 0,
            duration: 300
        }).start();
    }
    

    render() {
        const backgroundColorSpectrum = this.state.backgroundColorAnimator.interpolate({
            inputRange: [0,1],
            outputRange: ["rgba(255, 255, 255, 0)", highlightColor_Light]
        });

        return (
            <Animated.View style={[{backgroundColor: backgroundColorSpectrum}, this.props.containerStyles]}>
                <TextInput 
                    onFocus={this.focused}
                    onEndEditing={this.editingEnded}
                    onChange={this.props.onChange}
                    style={styles.input}
                    // value={this.props.value}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={placeholderFontColor}/>
            </Animated.View>
        );
    }
}


const styles = StyleSheet.create({
    input: {
        backgroundColor: "transparent",
        fontSize: regularFontSize,
        color: mainFontColor_Light,
        borderBottomWidth: 3,
        borderBottomColor: mainFontColor_Light,
        paddingVertical: 8
    },
    container: {
        backgroundColor: "transparent",
    }
});