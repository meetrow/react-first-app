import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View,ScrollView, FlatList } from 'react-native';
import Itemdat from './components/Goal-item'
export default function App() {
  const[textInput,settextInput]=useState(null)
  const[data,setdata]=useState([])
  const GoalCourse = (goal)=>{
    settextInput(goal)
  }
  const GoalCoursefill = ()=>{
    setdata(data=>[...data,textInput])
  }
  let i=0;
  return (
    <View style={styles.screen}>
      <View style={styles.inputConatiner}>
        <TextInput   placeholder="Course Goal" style={styles.input} onChangeText={GoalCourse} value={textInput} ></TextInput>
        <Button onPress={GoalCoursefill} title="ADD"/>
      </View>
    {/* {data.length>0 &&  <ScrollView style={styles.outputConatiner,{marginVertical :10}}>
      {data.map(el=>{
        
        return <Text style={styles.output} key={i++} >
        {el}
      </Text>})}

      </ScrollView>} */}
      <FlatList  style={styles.output,{marginVertical :10}} data={data} renderItem={itemdata=><Itemdat jilani={itemdata.item}/>} />
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{padding:50},

 inputConatiner:{flexDirection:"row",
 justifyContent:"space-between",
 alignItems:'center'},

 input:{
  padding:30,
  borderBottomWidth:2,
  borderColor:"black",
  margin:20,
  width:"80%"
 },
 output:{
  borderBottomWidth:1,
  borderBottomColor:'grey',
  margin:5,
  padding:5
 },
 outputConatiner:{
   
   borderWidth:2,
   borderColor:"grey",
   
 }
});
