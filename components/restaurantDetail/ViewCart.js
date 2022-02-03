import { View, Text, TouchableOpacity } from 'react-native'

export default function ViewCart () {
  return (
    <View
      style={ {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        position: "absolute",
        bottom: 50,
        zIndex: 999,
      } }
    >
      <View
        style={ {
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        } }
      >
        <TouchableOpacity
          style={ {
            marginTop: 20,
            borderWidth: 0.5,
            borderColor: 'red',
            backgroundColor: 'white',
            flexDirection: "row",
            justifyContent: "flex-end",
            padding: 12,
            borderRadius: 30,
            width: 300,
            position: "relative",
          } }
        >
          <Text style={ {
            color: "red",
            fontWeight: '600',
            fontSize: 20,
            marginRight: 30,
          } }>
            View Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
