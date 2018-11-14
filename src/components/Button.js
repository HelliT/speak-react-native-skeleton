// @flow
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

// theme
import { Colors, Metrics } from '../themes'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: "#ff0000",
    borderColor: Colors.primary,
    borderWidth: 2,
    width: Metrics.buttons.width,
    height: Metrics.buttons.height,
    justifyContent: 'center',
  },
})

type Props = {|
  +onPress: () => void,
  +children: string,
|}

export default class RoundedButton extends React.PureComponent<Props> {
  render() {
    const { children, onPress } = this.props
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text>{children}</Text>
      </TouchableOpacity>
    )
  }
}
