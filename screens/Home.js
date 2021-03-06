import { View, SafeAreaView, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems from '../components/home/RestaurantItems'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs'
import config from '../config'

const YELP_API_KEY = config.api.YELP

export default function Home ( { navigation } ) {
  const [ restaurantData, setRestaurantData ] = useState( [] )
  const [ city, setCity ] = useState( "Denver" )
  const [ activeTab, setActiveTab ] = useState( 'Delivery' )

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`
      }
    }

    return fetch( yelpUrl, apiOptions )
      .then( resp => resp.json() )
      .then( data => setRestaurantData(
        data.businesses.filter( business =>
          business.transactions.includes( activeTab.toLowerCase() )
        ) ) )
  }


  useEffect( () => {
    getRestaurantsFromYelp()
  }, [ city, activeTab ] )


  return (
    <SafeAreaView style={ { backgroundColor: '#E4BE9E', flex: 1 } }>
      <View style={ { backgroundColor: '#E4BE9E', padding: 15 } }>
        <HeaderTabs activeTab={ activeTab } setActiveTab={ setActiveTab } />
        <SearchBar cityHandler={ setCity } />
      </View>
      <ScrollView showsVerticalScrollIndicator={ false }>
        <Categories />
        <RestaurantItems
          restaurantData={ restaurantData }
          navigation={ navigation }
        />
      </ScrollView>
      <Divider width={ 1 } />
      <BottomTabs />
    </SafeAreaView>
  )
}
