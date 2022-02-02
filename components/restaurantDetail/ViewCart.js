import { View, Text, TouchableOpacity } from 'react-native'

export default function ViewCart () {
  return (
    <View style={ {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      position: 'absolute',
      bottom: 130,
      zIndex: 999,
    } }>
      <View style={ {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
      } }>
        <TouchableOpacity style={ {
          marginTop: 20,
          backgroundColor: 'red',
          alignItems: 'center',
          padding: 13,
          borderRadius: 30,
          width: 300,
          position: 'relative'
        } }>
          <Text style={ { color: 'purple', fontSize: 20 } }>ViewCart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
