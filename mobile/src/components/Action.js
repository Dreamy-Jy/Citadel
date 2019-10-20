import React, {Component} from 'react'
import { 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    Animated
} from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    actionColor_Light,
    actionFontFamily,
    highlightColor_Light,
} from '../constants';

//export class name for button component
export default class Action extends Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundColorAnimator: new Animated.Value(0)
        };

        this.pressedIn = this.pressedIn.bind(this);
        this.pressedOut = this.pressedOut.bind(this);
    }

    pressedIn() {
        Animated.timing(this.state.backgroundColorAnimator, {
            toValue: 1,
            duration: 62.5
        }).start();
    }

    pressedOut() {
        Animated.timing(this.state.backgroundColorAnimator, {
            toValue: 0,
            duration: 500
        }).start();

        this.props.action();
    }

    render(){
        const backgroundColorSpectrum = this.state.backgroundColorAnimator.interpolate({
            inputRange: [0,1],
            outputRange: ["rgba( 255, 255, 255, 0)", highlightColor_Light]
        });
        return (
            <TouchableWithoutFeedback onPressIn={this.pressedIn} onPressOut={this.pressedOut}>
                <Animated.View style={[styles.container, {backgroundColor: backgroundColorSpectrum}, this.props.containerStyles]}>
                    <FontAwesomeIcon 
                        icon={this.props.icon}
                        size={this.props.size}
                        color={actionColor_Light}/>

                    {this.props.text == null? null : (
                        <Text style={[styles.text, {fontSize: this.props.size}, this.props.textStyles]}>
                            {this.props.text}
                        </Text>
                    )}
                </Animated.View>
            </TouchableWithoutFeedback>
        );   
    }
}

//Button stylings for the buttons color and background colors
const styles = new StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        paddingHorizontal: 8,
        paddingVertical: 8
    },
    text: {
        fontFamily: actionFontFamily,
        color: actionColor_Light,
        fontSize: 16,
        paddingLeft: 16,
        paddingRight:8
    }
})