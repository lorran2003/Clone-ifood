import { View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CardsFood } from './CardsFood'

export interface FoodProps {
    id:string;
    name:string;
    price:number;
    time:string;
    delivery:number;
    rating:number;
    image:string;
    restaurantId:string;
}

export function Trending() {

    const [foods, setFoods] = useState<FoodProps[]>([])

    useEffect(() => {
        const getFoods = async () => {
            const response = await fetch("http://192.168.1.245:3000/foods")
            const data = await response.json();
            setFoods(data)
        }
        getFoods();
    })

    return (
        <FlatList
            data={foods}
            renderItem={({item}) => <CardsFood food={item} />}
            horizontal={true}
            contentContainerClassName='gap-3 py-4'
            showsHorizontalScrollIndicator={false}
        />
    )
}