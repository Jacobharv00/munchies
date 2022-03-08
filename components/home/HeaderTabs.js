import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs ( { activeTab, setActiveTab } ) {
  return (
    <View style={ { flexDirection: 'row', alignSelf: 'center' } }>
      <HeaderButton
        text='Delivery'
        buttonColor='#1F1300'
        textColor='#FFEEDD'
        activeTab={ activeTab }
        setActiveTab={ setActiveTab }
      />
      <HeaderButton
        text='Pickup'
        buttonColor='#FFEEDD'
        textColor='#1F1300'
        activeTab={ activeTab }
        setActiveTab={ setActiveTab }
      />
    </View>
  )
}

const HeaderButton = ( props ) => (
  <TouchableOpacity style={ {
    backgroundColor: props.activeTab === props.text ? '#1F1300' : '#FFEEDD',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  } }
    onPress={ () => props.setActiveTab( props.text ) }
  >
    <Text style={ {
      color: props.activeTab === props.text ? '#FFEEDD' : '#1F1300', fontSize: 15,
      fontWeight: "900"
    } }
    >
      { props.text }
    </Text>
  </TouchableOpacity>
)
