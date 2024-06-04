import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import GlobalApi from '@/constants/GlobalApi'

const Slider = () => {
    

    useEffect(()=>{
        getSliders();
    },[])
    const getSliders=() => {
        GlobalApi.getSlider().then(resp=>{
            console.log("resp, resp");
        })
    }
  return (
    <View>
      <Text>Slider</Text>
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({})