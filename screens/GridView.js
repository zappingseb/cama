import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export class GridView extends Component { 
    
  
    render() {
      return (
        <View>
            <Text>
                
            </Text>
            <Image source={require('../assets/gridview_header.png')}
                 style={{margin: 2}} />

            <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
              <Image source={require('../assets/button_documents.png')}
                 style={{margin: 2}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/button_medication.png')}
                 style={{margin: 2}} />
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
              <Image source={require('../assets/button_bloodValue.png')}
                 style={{margin: 2}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/button_myColon.png')}
                 style={{margin: 2}} />
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
              <Image source={require('../assets/button_timeline.png')}
                 style={{margin: 2}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/button_myColon.png')}
                 style={{margin: 2}} />
            </TouchableOpacity>
            </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    chartContainer: {
      flex: 1,
      backgroundColor: "#F5FCFF"
    }
  });