import { View } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

// customize with real data later
const foods = [
  {
    title: 'Lasagna',
    description: "With butter lettuce, tomato and sauce bechamel",
    price: '$13.50',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'
  },
  {
    title: 'Taco Alapoo',
    description: "A taco filled with poo",
    price: '$10.00',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'
  },
  {
    title: 'Cer al of the l',
    description: "With milk from a goat",
    price: '$7.25',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'
  },
  {
    title: 'Toad in a hole',
    description: "With milk from a cow",
    price: '$7.25',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'
  },
  {
    title: 'Toad in a hole',
    description: "With milk from a cow",
    price: '$7.25',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'
  },
  {
    title: 'Toad in a hole',
    description: "With milk from a cow",
    price: '$7.25',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'
  },
  {
    title: 'Toad in a hole',
    description: "With milk from a cow",
    price: '$7.25',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'
  },
  {
    title: 'Toad in a hole',
    description: "With milk from a cow",
    price: '$7.25',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'
  },
]


export default function RestaurantDetail ( { route, navigation } ) {
  return (
    <View style={ { flex: 1 } }>
      <About route={ route } />
      <Divider width={ 1.8 } style={ { marginVertical: 20 } } />
      <MenuItems restaurantName={ route.params.name } foods={ foods } />
      <ViewCart navigation={ navigation } />
    </View>
  )
}

