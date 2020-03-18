import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { TouchableHighlight, StyleSheet, View, Image } from "react-native";
import colors from "./color";

export default class NextArrowButton extends Component {
  render() {
    const { disabled, handelPress } = this.props;
    // console.log()
    return (
      <View style={styles.buttonWrapper}>
        <TouchableHighlight
          onPress={handelPress}
          style={[{ opacity: 0.9 }, styles.button]}
          disabled={disabled}
        >
           <Image
              source={require('../assets/next.png')}
              style={{
                width: 20,
                height: 20,
                margin: 10,
                tintColor: '#FFFF',
              }}
            />
        </TouchableHighlight>
      </View>
    );
  }
}

NextArrowButton.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func
};

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: "flex-end",
    right: 15,
    bottom: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    width: 60,
    height: 60,
    backgroundColor: colors.darkOrange
  },
});
