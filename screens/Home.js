import { View, SafeAreaView, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems from '../components/RestaurantItems'

const YELP_API_KEY =
  'meD7v2TekSd1YSLQKj9OEeKgRmruTBFa0cjs5lk4snkM7kjtQBster-GpOLTe-bj4Lvky5nvjQmHvVRH9wsmhiPaE4W3_vEg0DR5gWlyQ4J7XiZHQXO3iFjsJN7xYXYx'

export default function Home () {
  const [ restaurantData, setRestaurantData ] = useState( [] )

  const getRestaurantsFromYelp = () => {
    const yelpUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego'

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`
      }
    }

    return fetch( yelpUrl, apiOptions )
      .then( resp => resp.json() )
      .then( data => setRestaurantData( data.businesses ) )
  }


  useEffect( () => {
    getRestaurantsFromYelp()
  }, [] )


  return (
    <SafeAreaView style={ { backgroundColor: '#eee', flex: 1 } }>
      <View style={ { backgroundColor: 'white', padding: 15 } }>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={ false }>
        <Categories />
        <RestaurantItems restaurantData={ restaurantData } />
      </ScrollView>
    </SafeAreaView>
  )
}
