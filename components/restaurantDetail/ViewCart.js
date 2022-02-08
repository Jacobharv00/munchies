import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

export default function ViewCart () {
  const items = useSelector( state => state.cartReducer.selectedItems.items )

  const total = items
    .map( ( item ) => Number( item.price.replace( "$", "" ) ) )
    .reduce( ( prev, curr ) => prev + curr, 0 )

  const totalUSD = total.toLocaleString( "en", {
    style: "currency",
    currency: "USD",
  } )

  console.log( 'items =', items )
  console.log( 'totalUSD =', totalUSD )

  return (
    <>
      { total ? (
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
                justifyContent: "center",
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
              <Text style={ { color: 'red', fontSize: 20 } }>{ totalUSD }</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      ) }
    </>
  )
}
