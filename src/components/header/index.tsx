import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Ionicons, Feather } from '@expo/vector-icons'
export function Header() {
    return (
        <View className='w-full flex flex-row items-center justify-between'>
            <Pressable className='w-10 h-10 bg-zinc-50 rounded-md shadow shadow-zinc-800 flex justify-center items-center'>
                <Ionicons name='menu' size={20} color='#27272a' />
            </Pressable>

            <View className='items-center justify-center'>
                <Text className='opacity-60'>Localização</Text>

                <View className='flex-row items-center justify-center gap-1'>
                    <Feather
                        name='map-pin'
                        size={20}
                        color='#FF0000'
                    />
                    <Text className='text-lg'>Campo Grande</Text>

                </View>

            </View>

            <Pressable className='w-10 h-10 bg-zinc-50 rounded-md shadow shadow-zinc-800 flex justify-center items-center'>
                <Feather name='bell' size={20} color='#27272a' />
            </Pressable>
        </View>
    )
}