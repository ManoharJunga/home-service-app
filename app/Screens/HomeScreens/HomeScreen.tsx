import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'

const HomeScreen = () => {
  return (
    <View>
      {/* Header */}
      <Header />
      {/* Slider */}
      <Slider />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})