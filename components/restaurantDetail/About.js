import { View, Text, Image } from 'react-native'

const yelpRestaurantInfo = {
  name: 'Farmhouse Kitchen Thai Cuisine',
  image: 'https://brecknetwork.com/wp-content/uploads/2015/05/Hearthstone_Hearthstone-Restaurant-1.jpg',
  price: '$$',
  reviews: '1500',
  rating: 4.5,
  categories: [
    { title: 'Indian' },
    { title: 'Comfort Food' },
    { title: 'Spicy' }
  ]
}

const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo

const formattedCategories = categories.map( cat => cat.title ).join( ' • ' )

const description = `${formattedCategories} ${price ? ' • ' + price : ''} • 🎫 • ${rating} ⭐ (${reviews}+)`


export default function About () {
  return (
    <View>
      <RestaurantImage image={ image } />
      <RestaurantName name={ name } />
      <RestaurantDescription description={ description } />
    </View>
  )
}

const RestaurantImage = ( { image } ) => (
  <Image
    source={ { uri: image } }
    style={ { width: '100%', height: 180 } }
  />
)

const RestaurantName = ( { name } ) => (
  <Text
    style={ {
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15
    } }>
    { name }
  </Text>
)

const RestaurantDescription = ( { description } ) => (
  <Text style={ {
    marginTop: 10,
    marginHorizontal: 10,
    fontWeight: '400',
    fontSize: 15.5
  } }>
    { description }
  </Text>
)


