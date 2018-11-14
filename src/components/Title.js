// @flow
import React from 'react'
import { StyleSheet, Text } from 'react-native'

// theme
import { Colors } from '../themes'

const styles = StyleSheet.create({
  title: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
  },
})

type Props = {|
  +children: string,
|}

export default class Title extends React.PureComponent<Props> {
  render() {
    const { children } = this.props
    return (
        <Text style={styles.title}>{children}</Text>
    )
  }
}
