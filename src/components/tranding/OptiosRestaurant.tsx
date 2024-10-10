import { Text, Pressable, Image, View } from 'react-native'
import React from 'react'
import { RestaurantProps } from './Restaurant'
import { Ionicons } from '@expo/vector-icons'


export function OptiosRestaurant({ restaurant }: { restaurant: RestaurantProps }) {
    return (
        <Pressable className='flex-row justify-start items-center bg-zinc-50 shadow-md shadow-zinc-800 rounded-md w-full p-4'>
            <Image
                source={{ uri: restaurant.image }}
                className='w-20 h-20 rounded-full'
            />
            <View className='flex-col gap-1 rounded-lg px-4 justify-center items-start'>
                <Text>{restaurant.name}</Text>
                <View className='flex-row justify-center items-center'>
                    <Ionicons name='star' size={14} color={'#ca8a04'} />
                    <Text className='text-[#ca8a04]'>{restaurant.id}</Text>
                </View>
            </View>
        </Pressable>
    )
}