import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
export function Input() {
    return (
        <View className='w-full h-14 bg-slate-50 rounded-md shadow shadow-zinc-800 px-2 flex-row gap-2 items-center'>

            <Feather name='search' size={24} color={'#27272aa9'} />

            <TextInput
                placeholder='Procurar...'
                cursorColor={'#FF0000'}
                className=' w-full h-full flex-1'
            />
        </View>
    )
}