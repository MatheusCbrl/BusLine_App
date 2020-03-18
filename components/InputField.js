import React, { Component } from "react";
import colors from "./color";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing
} from "react-native";
class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput: !(props.inputType === "text" || props.inputType === "numeric"),
      scaleCheckmarkValue: new Animated.Value(0)
    };

    this.toggleShowPassword = this.toggleShowPassword.bind(this);
  }
  toggleShowPassword() {
    this.setState({ secureInput: !this.state.secureInput });
  }
  scaleCheckmark(value) {
    Animated.timing(this.state.scaleCheckmarkValue, {
      toValue: value,
      duration: 400,
      easing: Easing.easeOutBack
    }).start();
  }
  onChangeText = (name, event) => {
    // for a regular input field, read field name and value from the event
    console.log(name);
    console.log(event);
    // const fieldName = event.target.name;
    // const fieldValue = event.target.value;
    // this.props.onChangeText(fieldName, fieldValue);
  };
  render() {
    const {
      labelText,
      labelTextSize,
      labelColor,
      textColor,
      borderBottomColor,
      inputType,
      customStyle,
      onChangeText,
      showCheckmark
    } = this.props;
    const { secureInput, scaleCheckmarkValue } = this.state;
    const iconScale = scaleCheckmarkValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0.01, 1.6, 1]
    });
    const scaleValue = showCheckmark ? 1 : 0;
    this.scaleCheckmark(scaleValue);
    const color = labelColor || colors.white;
    const fontSize = labelTextSize || 14;
    const inputColor = textColor || colors.white;
    const borderBottom = borderBottomColor || "transparent";
    const keyboardType = inputType == "default" ? "default" : "default";
    return (
      <View style={[customStyle, styles.wrapper]}>
        <Animated.View
          style={[
            { transform: [{ scale: iconScale }] },
            styles.checkmarkWrapper
          ]}
        >
        </Animated.View>
        <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
        {inputType === "password" ? (
          <TouchableOpacity
            style={styles.showButton}
            onPress={this.toggleShowPassword}
          >
            <Text style={styles.showButtonText}>
              {secureInput ? "Ver" : "Esconder"}
            </Text>
          </TouchableOpacity>
        ) : null}
        <TextInput
          autoCorrect={false}
          style={[
            { color: inputColor, borderBottomColor: borderBottom },
            styles.inputFiled
          ]}
          secureTextEntry={secureInput}
          onChangeText={onChangeText}
          autoCapitalize="none"
          keyboardType={keyboardType}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    display: "flex"
  },
  label: { fontWeight: "700", marginBottom: 10 },
  inputFiled: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5
  },
  showButton: {
    position: "absolute",
    right: 0
  },
  showButtonText: {
    color: colors.white,
    fontWeight: "700"
  },
  checkmarkWrapper: {
    position: "absolute",
    right: 0,
    bottom: 12
  }
});
export default InputField;
