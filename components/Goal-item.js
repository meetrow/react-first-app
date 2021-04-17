import React from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
const GoalItem = props=>{
    return(
    <TouchableOpacity onPress={props.onDelete}>
    <View style={styles.test} >
    <Text >
        {props.jilani}
      </Text>
    </View>
    </TouchableOpacity>
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