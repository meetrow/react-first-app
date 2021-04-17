import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View,ScrollView, FlatList } from 'react-native';
import Itemdat from './components/Goal-item'
import ItemView from './components/Goal-view'
export default function App() {
  const[data,setdata]=useState([])
  let i=0;
  const GoalCoursefill = inputGoal=>{
    setdata(data=>[...data,{inputGoal,key: Math.random().toString()}])
  }
  
  
  const aka=()=>{
    console.log("sdsdsd")
    console.log(data)
  }
  const dele = deletes=> {
    let kaka=data.filter((el)=>{console.log(el,'jjilani'); return el.key!=deletes})
    setdata( kaka
    )
  }
  return (
    
    <View style={styles.screen}>
      <ItemView aka={aka} itemComp={GoalCoursefill} />
      <FlatList  style={styles.output,{marginVertical :10}} data={data} renderItem={itemdata=><Itemdat onDelete={dele(this,itemdata.item.key)}  jilani={itemdata.item.inputGoal}/>} />
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{padding:50},


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
