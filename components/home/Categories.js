import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'

const items = [
  {
    image: require( '../../assets/images/shopping-bag.png' ),
    text: 'Pick-up'
  },
  {
    image: require( '../../assets/images/soft-drink.png' ),
    text: 'Soft Drinks'
  },
  {
    image: require( '../../assets/images/bread.png' ),
    text: 'Bakery Items'
  },
  {
    image: require( '../../assets/images/fast-food.png' ),
    text: 'Fast Foods'
  },
  {
    image: require( '../../assets/images/deals.png' ),
    text: 'Deals'
  },
  {
    image: require( '../../assets/images/coffee.png' ),
    text: 'Coffee & Tea'
  },
  {
    image: require( '../../assets/images/desserts.png' ),
    text: 'Desserts'
  }
]

export default function Categories () {
  return (
    <View style={ {
      marginTop: 4,
      backgroundColor: '#FFEEDD',
      paddingVertical: 10,
      paddingLeft: 20,
      borderRadius: 3
    } }>
      <ScrollView horizontal showsHorizontalScrollIndicator={ false }>
        { items.map( ( item, index ) => (
          <View key={ index } style={ { alignItems: 'center', marginRight: 30 } }>
            <TouchableOpacity style={ { alignItems: 'center' } }>
              <Image source={ item.image } style={ {
                width: 50,
                height: 40,
                resizeMode: 'contain'
              } } />
              <Text style={ {
                fontSize: 13,
                fontWeight: '900',
                color: '#1F1300'
              } }>
                { item.text }
              </Text>
            </TouchableOpacity>
          </View>
        ) ) }
      </ScrollView>
    </View>
  )
}
