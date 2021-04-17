import React,{ useState } from 'react'
import {View,StyleSheet,TextInput,Button,TouchableOpacity} from 'react-native'


const GoalView = props =>{
    const[textInput,settextInput]=useState('')

    const GoalCourse = (goal)=>{
        settextInput(goal)
      }

    console.log(props)

    return(

    <TouchableOpacity onPress={props.aka}>
        <View style={styles.inputConatiner}>
            <TextInput   placeholder="Course Goal" style={styles.input} onChangeText={GoalCourse} value={textInput} ></TextInput>
            <Button onPress={props.itemComp.bind(this,textInput)} title="ADD"/>
      </View>
      </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    input:{
        padding:30,
        borderBottomWidth:2,
        borderColor:"black",
        margin:20,
        width:"80%"
       },
    inputConatiner:{flexDirection:"row",
       justifyContent:"space-between",
       alignItems:'center'},
})
export default GoalView