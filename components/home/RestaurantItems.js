import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function RestaurantItems ( { navigation, restaurantData } ) {
  return (
    <>
      { restaurantData.map( ( restaurant, index ) => (
        <TouchableOpacity
          activeOpacity={ 1 }
          style={ { marginBottom: 2 } }
          key={ index }
          onPress={ () => navigation.navigate( 'RestaurantDetail', {
            name: restaurant.name,
            image: restaurant.image_url,
            price: restaurant.price,
            reviews: restaurant.review_count,
            rating: restaurant.rating,
            categories: restaurant.categories
          } ) }
        >
          <View style={ { marginTop: 10, padding: 15, backgroundColor: '#FFEEDD' } }>
            <RestaurantImage image={ restaurant.image_url } />
            <RestaurantInfo
              name={ restaurant.name }
              rating={ restaurant.rating }
            />
          </View>
        </TouchableOpacity>
      ) )
      }
    </>
  )
}

// Sub-Components
const RestaurantImage = ( { image } ) => (
  <>
    <Image source={ { uri: image } }
      style={ { width: '100%', height: 180, borderRadius: 5 } }
    />
    <TouchableOpacity style={ { position: 'absolute', right: 20, top: 20 } }>
      <MaterialCommunityIcons
        name='heart-outline'
        size={ 25 }
        color='#FFEEDD' />
    </TouchableOpacity>
  </>
)

const RestaurantInfo = ( { name, rating, } ) => (
  <View style={ {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  } }>
    <View>
      <Text style={ { fontSize: 15, fontWeight: 'bold', color: '#1F1300' } }>
        { name }
      </Text>
      <Text style={ { fontSize: 13, color: '#1F1300' } }>
        30-45 • min
      </Text>
    </View>
    <View style={ {
      backgroundColor: '#FFEEDD',
      height: 30,
      width: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15
    } }>
      <Text style={ { color: '#1F1300' } }>{ rating }</Text>
    </View>
  </View>
)