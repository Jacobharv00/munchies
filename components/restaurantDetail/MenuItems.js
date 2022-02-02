import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { Divider } from 'react-native-elements'

// customize with real data later?
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

const styles = StyleSheet.create( {
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
} )


export default function MenuItems () {
  return (
    <ScrollView showsVerticalScrollIndicator={ false }>
      { foods.map( ( food, index ) => (
        <View key={ index }>
          <View style={ styles.menuItemStyle }>
            <BouncyCheckbox
              iconStyle={ {
                borderColor: 'lightgrey',
                borderRadius: 0,
              } }
              fillColor='purple'
              size={ 15 }
            />
            <FoodInfo food={ food } />
            <FoodImage food={ food } />
          </View>
          <Divider
            width={ 0.5 }
            orientation='vertical'
            style={ { marginHorizontal: 20 } }
          />
        </View>
      ) ) }
    </ScrollView>
  )
}

const FoodInfo = ( { food } ) => (
  <View style={ { width: 230, justifyContent: 'space-evenly' } }>
    <Text style={ styles.titleStyle }>{ food.title }</Text>
    <Text>{ food.description }</Text>
    <Text>{ food.price }</Text>
  </View>
)

const FoodImage = ( { food } ) => (
  <View>
    <Image
      source={ { uri: food.image } }
      style={ {
        width: 100,
        height: 100,
        borderRadius: 8,
      } }
    />
  </View>
)

