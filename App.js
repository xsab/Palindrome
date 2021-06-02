//Nur Sabrina Binti Nor Azhar | 1727772
//LabTest

import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput  } from 'react-native';

  
export default class App extends Component {  
    constructor() {  
        super();  
        this.state = {
          //declaring variables
          word: '',
          consonent: 0,
          vowel: 0,
          character: 0
        };  
    }  
    //function to count the occurrences of the C character in the string
    countChar(){

      let str=this.state.word;
      var total_char = str.length;

      this.setState({

          character: total_char

          });
    }

   //function for reversing word
   isPalindrome = (str) => {
     
    string.split('').reverse().join('')
    var text = str.replace(/[.,'!?\- \"]/g, "")
    return text.search(
      new RegExp(
        text
          .split("")
          .reverse()
          .join(""),
        "i"
      )
    ) !== -1;
  }

    render() {  
        return (  
          
            <View style={styles.container}>  

             <Text style={styles.header}>A Palindrome Detector {"\n"} </Text>

                <TextInput
                  style={styles.textinput}
                  value={this.state.word}
                  placeholder="Word"  
                  onChangeText={word => this.setState({word})}
                />
               

                <Button title="Check" color="grey" onPress={() => {this.countChar(), this.isPalindrome()}}/>
                

              <Text style={styles.contents}>Word: {this.state.word}</Text>
              <Text style={styles.contents}>Reverse: {this.state.isPalindrome} </Text>
              <Text style={styles.contents}>No of Characters: {this.state.character} </Text> 
                
            </View>  
        );  
    }  
}  
//CSS part
const styles = StyleSheet.create({ 
  container: {
  flex: 1,
  justifyContent: 'flex-start', 
  alignItems: 'center', 
  backgroundColor: 'white',

  }, 
  
  header: {
  marginTop: 200,
  fontSize: 40, 
  fontFamily: 'Courier New',
  textAlign: 'center', 
  margin: 10,
  marginBottom: 10,
  },
 
  contents: {
  textAlign: 'center', 
  marginTop: 20,
  fontFamily: 'Helvetica',
  color: 'blue', 
  marginBottom: 5,
  },

  textinput: {
  height: 60, 
  textAlign: 'center', 
  width: 300,
  borderColor: 'black', 
  borderWidth: 2 ,
  marginBottom: 10
 },

})
