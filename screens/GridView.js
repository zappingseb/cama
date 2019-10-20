import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
//import { NavigationActions } from 'react-navigation';


export class GridView extends Component { 
    
  onPressDocuments = () => {
    this.props.navigation.navigate('Details')
  }

  onPressMedication = () => {
    this.props.navigation.navigate('Calendar')
  }
  
    render() {
      return (
        <View>
            <Text>
                
            </Text>
            <Image source={require('../assets/gridview_header.png')}
                 style={{margin: 3}} />

            <View style={{flexDirection:'row'}}>
            <TouchableOpacity
             onPress={this.onPressDocuments}>
              <Image source={require('../assets/button_documents.png')}
                 style={{margin: 3}} />
            </TouchableOpacity>
            <TouchableOpacity
             onPress={this.onPressMedication}>
              <Image source={require('../assets/button_medication.png')}
                 style={{margin: 3}} />
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
              <Image source={require('../assets/button_bloodValue.png')}
                 style={{margin: 3}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/button_myColon.png')}
                 style={{margin: 3}} />
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
              <Image source={require('../assets/button_timeline.png')}
                 style={{margin: 3}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/button_myColon.png')}
                 style={{margin: 3}} />
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