// @flow
import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'

// theme
import { Colors } from '../themes'

const styles = StyleSheet.create({
 
  image: {
     width: 450,
     height: 150,
  },
})


export default class ImageWrap extends React.PureComponent<Props> {
  render() {
    const { uri } = this.props
    return (
        <Image source={uri} style={styles.image} />
   
    )
  }
}
