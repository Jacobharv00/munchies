import { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem'
import firebase from '../../firebase'


export default function ViewCart ( { navigation } ) {
  const [ modalVisible, setModalVisible ] = useState( false )
  const { items, restaurantName } = useSelector( state => state.cartReducer.selectedItems )

  const total = items
    .map( ( item ) => Number( item.price.replace( "$", "" ) ) )
    .reduce( ( prev, curr ) => prev + curr, 0 )

  const totalUSD = total.toLocaleString( "en", {
    style: "currency",
    currency: "USD",
  } )

  console.log( 'items =', items )
  console.log( 'totalUSD =', totalUSD )

  const addOrderToFireBase = () => {
    const db = firebase.firestore()
    db.collection( 'orders' ).add( {
      items: items,
      restaurantName: restaurantName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    } )
    setModalVisible( false )
    navigation.navigate( 'OrderCompleted' )
  }

  // Styles for Modal
  const styles = StyleSheet.create( {
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: "rgba(0,0,0,0.7)"
    },
    modalCheckoutContainer: {
      backgroundColor: 'white',
      padding: 16,
      height: 500,
      borderWidth: 1
    },
    restaurantName: {
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 20,
      marginBottom: 10
    },
    subtotalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20
    },
    subTotalText: {
      textAlign: 'left',
      fontWeight: '600',
      fontSize: 16,
      marginBottom: 10
    }
  } )

  const checkoutModalContent = () => {
    return (
      <>
        <View style={ styles.modalContainer }>
          <View style={ styles.modalCheckoutContainer }>
            <Text style={ styles.restaurantName }>{ restaurantName }</Text>
            { items.map( ( item, index ) => (
              <OrderItem key={ index } item={ item } />
            ) ) }
            <View style={ styles.subtotalContainer }>
              <Text style={ styles.subTotalText }>Subtotal</Text>
              <Text>{ totalUSD }</Text>
            </View>
            <View style={ { flexDirection: 'row', justifyContent: 'center' } }>
              <TouchableOpacity style={ {
                marginTop: 20,
                borderWidth: 0.5,
                borderColor: 'red',
                backgroundColor: 'white',
                alignItems: 'center',
                padding: 13,
                borderRadius: 30,
                width: 300,
                position: 'relative'
              } }
                onPress={ () => addOrderToFireBase() }
              >
                <Text style={ {
                  color: 'red',
                  fontSize: 20,
                  right: 40,
                  fontWeight: '600',
                } }>
                  Checkout
                </Text>
                <Text style={ {
                  position: 'absolute',
                  color: 'red',
                  right: 45,
                  fontSize: 20,
                  fontWeight: '500',
                  top: 13
                } }>
                  { total ? totalUSD : '' }
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    )
  }

  return (
    <>
      <Modal
        animationType='slide'
        visible={ modalVisible }
        transparent={ true }
        onRequestClose={ () => setModalVisible( false ) }
      >
        { checkoutModalContent() }
      </Modal>
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
                position: "relative"
              } }
              onPress={ () => setModalVisible( true ) }
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
