import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { RestaurantProps } from './Restaurant'

export function CardsRestaurant({restaurant}:{restaurant: RestaurantProps}) {
  return (
    <Pressable className='justify-center items-center'>
        <Image 
        source={{uri:restaurant.image}} 
        className='w-20 h-20 rounded-full'
        />
        <Text>{restaurant.name}</Text> 
    </Pressable>
  )
}