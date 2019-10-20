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

  onPressMyColon = () => {
    this.props.navigation.navigate('Webapp')
  }
  
    render() {
      return (
        <View style={{flex:1}}>
          <View style={{flex:1}}>
            <Image source={require('../assets/gridview_header.png')}
                 style={{resizeMode: 'cover'}} />
          </View>
          <View style={{flex: 1, flexDirection:'row'}}>
            <TouchableOpacity
             onPress={this.onPressDocuments}>
              <Image source={require('../assets/button_documents.png')}
                 style={{resizeMode: 'cover'}} />
            </TouchableOpacity>
            <TouchableOpacity
             onPress={this.onPressMedication}>
              <Image source={require('../assets/button_medication.png')}
                 style={{resizeMode: 'cover'}} />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection:'row'}}>
            <TouchableOpacity>
              <Image source={require('../assets/button_bloodValue.png')}
                 style={{resizeMode: 'cover'}} />
            </TouchableOpacity>
            <TouchableOpacity
             onPress={this.onPressMyColon}>
              <Image source={require('../assets/button_myColon.png')}
                 style={{resizeMode: 'cover'}} />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection:'row'}}>
            <TouchableOpacity>
              <Image source={require('../assets/button_timeline.png')}
                 style={{resizeMode: 'cover'}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/button_myColon.png')}
                 style={{resizeMode: 'cover'}} />
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