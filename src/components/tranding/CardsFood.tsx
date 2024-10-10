import { Text, Pressable, Image, View } from 'react-native'
import React from 'react'
import { FoodProps } from './Trending'
import { Ionicons } from '@expo/vector-icons'

export function CardsFood({ food }: { food: FoodProps }) {
    return (
        <Pressable className='relative flex-col rounded-xl bg-zinc-50 shadow shadow-zinc-800 p-2'>
            <Image
                source={{ uri: food.image }}
                className='w-44 h-36 rounded-xl'
            />

            <View className='absolute flex-row bg-zinc-800/90 gap-1 rounded-lg p-1 top-2 left-2 justify-center items-center'>
                <Ionicons name='star' size={14} color={'#ca8a04'}/>
                <Text className='text-zinc-50'>{food.rating}</Text>
            </View>

            <Text className='text-green-700 text-lg'>R$ {food.price}</Text>
            <Text className='text-zinc-900 my-1'>{food.name}</Text>
            <Text className='text-neutral-600'>{food.time} - R$ {food.delivery}</Text>
        </Pressable>
    )
}