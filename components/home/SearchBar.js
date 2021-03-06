import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import config from '../../config'

const key = config.api.PLACES

export default function SearchBar ( { cityHandler } ) {
  return (
    <View style={ { marginTop: 15, flexDirection: 'row' } }>
      <GooglePlacesAutocomplete
        query={ { key: key } }
        onPress={ ( data, details = null ) => {
          const city = data.description.split( ',' )[ 0 ]
          cityHandler( city )
        } }
        placeholder='Search'
        styles={ {
          textInput: {
            backgroundColor: '#E4BE9E',
            color: '#1F1300',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7
          },
          textInputContainer: {
            backgroundColor: '#E4BE9E',
            borderColor: '#1F1300',
            borderWidth: '1em',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10
          },
        } }
        renderLeftButton={ () => (
          <View style={ { marginLeft: 10 } }>
            <Ionicons name='location-sharp' size={ 24 } />
          </View>
        ) }
        renderRightButton={ () => (
          <View style={ {
            flexDirection: 'row',
            marginRight: 8,
            backgroundColor: '#E4BE9E',
            // borderColor: '#DB5461',
            // borderWidth: '1px',
            padding: 9,
            borderRadius: 30,
            alignItems: 'center'
          } }>
            <AntDesign name='clockcircle' size={ 11 } style={ { marginRight: 6 } } />
            <Text>Search</Text>
          </View>
        ) }
      />
    </View>
  )
}
