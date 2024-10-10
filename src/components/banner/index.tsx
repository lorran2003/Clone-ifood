import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import PagerView from 'react-native-pager-view'

export function Banner() {
  return (
    <View className='w-full h-36 my-5'>
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>

        <Pressable className='w-full h-full' key={1}>
          <Image
            source={require('../../assets/images/banner1.png')}
            className='w-full h-full rounded-2xl'
          />
        </Pressable>

        <Pressable className='w-full h-full' key={2}>
          <Image
            source={require('../../assets/images/banner2.png')}
            className='w-full h-full rounded-2xl'
          />
        </Pressable>

      </PagerView>
    </View>
  )
}