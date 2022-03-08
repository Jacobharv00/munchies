import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'
import { useEffect, useState } from 'react'
import firebase from '../firebase'
import MenuItems from '../components/restaurantDetail/MenuItems'

export default function OrderCompleted () {

  const { items, restaurantName } = useSelector( state => state.cartReducer.selectedItems )

  const [ lastOrder, setLastOrder ] = useState( {
    items: [
      {
        title: 'Fish Tar Tar',
        description: 'With sauce on the side and a bucket o fries',
        price: '$17.75',
        image: 'https://media-cdn.greatbritishchefs.com/media/hmojt5hm/img11436.jpg?mode=crop&width=1426&height=713&center=0.366,0.5506666666666666666666666667'
      },
    ]
  } )

  const total = items
    .map( ( item ) => Number( item.price.replace( "$", "" ) ) )
    .reduce( ( prev, curr ) => prev + curr, 0 )

  const totalUSD = total.toLocaleString( "en", {
    style: "currency",
    currency: "USD",
  } )

  useEffect( () => {
    const db = firebase.firestore()
    const unsubscribe = db
      .collection( 'orders' )
      .orderBy( 'createdAt', 'desc' )
      .limit( 1 )
      .onSnapshot( snapshot => {
        snapshot.docs.map( doc => {
          setLastOrder( doc.data() )
        } )
      } )
    return () => unsubscribe()
  }, [] )

  return (
    <SafeAreaView style={ { flex: 1, backgroundColor: 'white' } }>
      <View style={ {
        margin: 15,
        alignItems: 'center',
        height: '100%'
      } }>
        <LottieView
          style={ { height: 100, alignSelf: 'center', marginBottom: 30 } }
          source={ require( '../assets/animations/check-mark.json' ) }
          autoPlay
          speed={ 0.5 }
          loop={ false }
        />
        <Text style={ { fontSize: 20, fontWeight: 'bold' } }>
          Your order at { restaurantName } has been placed for { totalUSD }
        </Text>
        <ScrollView>
          <MenuItems
            foods={ lastOrder.items }
            hideCheckbox={ true }
            marginLeft={ 10 }
          />
          <LottieView
            style={ { height: 200, alignSelf: 'center' } }
            source={ require( '../assets/animations/cooking.json' ) }
            autoPlay
            speed={ 0.5 }
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
