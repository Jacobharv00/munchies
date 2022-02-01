import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function RestaurantItems ( { restaurantData } ) {
  return (
    <TouchableOpacity activeOpacity={ 1 } style={ { marginBottom: 30 } }>
      { restaurantData.map( ( restaurant, index ) => (
        <View key={ index }
          style={ { marginTop: 10, padding: 15, backgroundColor: '#fff' } }
        >
          <RestaurantImage image={ restaurant.image_url } />
          <RestaurantInfo
            name={ restaurant.name }
            rating={ restaurant.rating }
          />
        </View>
      ) ) }
    </TouchableOpacity>
  )
}

// Sub-Components
const RestaurantImage = ( props ) => (
  <>
    <Image source={ {
      uri: props.image
    } }
      style={ { width: '100%', height: 180 } }
    />
    <TouchableOpacity style={ { position: 'absolute', right: 20, top: 20 } }>
      <MaterialCommunityIcons name='heart-outline' size={ 25 } color='#fff' />
    </TouchableOpacity>
  </>
)

const RestaurantInfo = ( props ) => (
  <View style={ {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  } }>
    <View>
      <Text style={ { fontSize: 15, fontWeight: 'bold' } }>
        { props.name }
      </Text>
      <Text style={ { fontSize: 13, color: 'grey' } }>
        30-45 • min
      </Text>
    </View>
    <View style={ {
      backgroundColor: '#eee',
      height: 30,
      width: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15
    } }>
      <Text>{ props.rating }</Text>
    </View>

  </View>
)