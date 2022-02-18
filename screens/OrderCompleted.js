import { View, Text, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'

export default function OrderCompleted () {

  const { items, restaurantName } = useSelector( state => state.cartReducer.selectedItems )

  const total = items
    .map( ( item ) => Number( item.price.replace( "$", "" ) ) )
    .reduce( ( prev, curr ) => prev + curr, 0 )

  const totalUSD = total.toLocaleString( "en", {
    style: "currency",
    currency: "USD",
  } )

  return (
    <SafeAreaView style={ { flex: 1, backgroundColor: 'white' } }>
      <LottieView
        style={ { height: 100, alignSelf: 'center', marginBottom: 30 } }
        source={ require( '../assets/animations/check-mark.json' ) }
        autoPlay
        speed={ 0.5 }
        loop={ false }
      />
      <Text>Your order at { restaurantName } has been placed for { totalUSD }</Text>
      {/* <menuItems foods={lastOrder} hideCheckbox={true} /> */ }
      <LottieView
        style={ { height: 200, alignSelf: 'center' } }
        source={ require( '../assets/animations/cooking.json' ) }
        autoPlay
        speed={ 0.5 }
      />
    </SafeAreaView>
  )
}
