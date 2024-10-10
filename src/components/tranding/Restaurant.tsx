import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CardsRestaurant } from './CardsRestaurant'
import { OptiosRestaurant } from './OptiosRestaurant'
import { Section } from '../section/Section'

export interface RestaurantProps {
    id: string
    name: string
    image: string
}

export function Restaurant() {

    const [restaurant, setRestaurant] = useState<RestaurantProps[]>([])

    useEffect(() => {
        const getRestaurant = async () => {
            const response = await fetch("http://192.168.1.245:3000/restaurants");
            const data = await response.json();
            setRestaurant(data)
        }
        getRestaurant();
    })

    return (
        <View>
            <FlatList
                data={restaurant}
                horizontal={true}
                renderItem={({ item }) => <CardsRestaurant restaurant={item} />}
                contentContainerClassName='gap-4 py-2'
                showsHorizontalScrollIndicator={false}
            />

            <Section
                name="Restaurantes"
                label="Veja mais"
                action={() => alert('ola')}
                size="text-xl"
            />
            <View className='gap-5'>
                {restaurant.map((item) => <OptiosRestaurant restaurant={item} key={item.id} />)}
            </View>
        </View>
    )
}