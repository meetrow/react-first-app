import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
const GoalItem = ({jilani})=>{
    return(
    <View style={styles.test} key="1">
    <Text >
        {jilani}
      </Text>
    </View>
    )
}
const styles = StyleSheet.create({
    test : {
        marginVertical:10,
        padding :10,
        backgroundColor:'#ccc',
        borderColor:'black'
    }
})
export default GoalItem;