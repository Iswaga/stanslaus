import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React,{useState,useEffect} from 'react';

const App =() =>{
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)
  const url = "https://fiscofox.giannidev.it/sample-user-data.json";

  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((json)=>setData(json.data))
    .catch((error)=>console.error(error))
    .finally(() => setLoading(false));
  },[])

  return (

    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.list} >
      <View style={styles.header}>
        <Text style={[styles.heading, {width:80}]}>FirstName</Text>
        <Text style={[styles.heading, {width:80}]}>LastName</Text>
        <Text style={[styles.heading, {width:150}, {textAlign:'center'}]}>dateOfBirth</Text>
        <Text style={[styles.heading, {width:150},{textAlign:'center'}]}>address</Text>
        <Text style={[styles.heading, {width:100}]}>houseNumber</Text>
        <Text style={[styles.heading, {width:150}]}>fixedPhone</Text>
        <Text style={[styles.heading, {width:150}]}>mobilePhone</Text>
        <Text style={[styles.heading, {width:150}]}>city</Text>
        <Text style={[styles.heading, {width:200}]}>email</Text>
      </View>
      {loading ? ( <Text>loading  .......</Text>):
      <FlatList data={data} renderItem={post}
      />
    }
    </View>  
    </ScrollView>
    </View>
  );
}

const post = ({item}) => (
  <View style={styles.row}>
   <Text style={[styles.cell, {width:80}]}>{item.firstName}</Text>
   <Text style={[styles.cell, {width:80}]}>{item.lastName}</Text>
   <Text style={[styles.cell, {width:150}]}>{item.dateOfBirth}</Text>
   <Text style={[styles.cell, {width:150},{textAlign:'center'}]}>{item.address}</Text>
   <Text style={[styles.cell, {width:100}, {textAlign:'center'}]}>{item.houseNumber}</Text>
   <Text style={[styles.cell, {width:150}]}>{item.fixedPhone}</Text>
   <Text style={[styles.cell, {width:150}]}>{item.mobilePhone}</Text>
   <Text style={[styles.cell, {width:150}]}>{item.city}</Text>
   <Text style={[styles.cell, {width:200}]}>{item.email}</Text>
</View>)
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    paddingVertical:30,
    paddingHorizontal:20,
    top:25,
  },

  list: {
    flex:1,
  },
header:{
  flexDirection:'row',
  justifyContent:'space-between',
  paddingVertical:10,
  backgroundColor: '#6AB7E2',
  borderBlockColor:'slate',
  borderRadius:3,
  textAlign:'left',
  width:'100%'
},
heading:{
  fontSize:14,
  flex:1,
  color:'white',
},
row:{
  flexDirection:'row',
  justifyContent: 'space-between',
  borderRadius: 3,
  marginVertical: 8,
  marginHorizontal:1,
  backgroundColor:'#fff',
  borderBlockColor:'slate',
  backgroundColor:'slate',
  paddingHorizontal:6,
  paddingVertical:10,
  width:'100%',
  elevation:1,
},
cell:{
  fontSize:14,
  flex:1,
  textAlign:'left',
},
});

