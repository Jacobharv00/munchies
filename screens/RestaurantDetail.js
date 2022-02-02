import { View } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'


export default function RestaurantDetail ( { route, navigation } ) {
  return (
    <View style={ { flex: 1 } }>
      <About route={ route } />
      <Divider width={ 1.8 } style={ { marginVertical: 20 } } />
      <MenuItems />
      <ViewCart />
    </View>
  )
}

// Future needs for ViewCart Component
// navigation={ navigation } restaurantName={ route.params.name }