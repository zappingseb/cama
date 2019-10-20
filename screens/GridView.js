import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
//import { NavigationActions } from 'react-navigation';


export class GridView extends Component { 
    
  onPressDocuments = () => {
    this.props.navigation.navigate('Details')
  }

  onPressMedication = () => {
    this.props.navigation.navigate('Calendar')
  }

  onPressDigimeda = () => {
    this.props.navigation.navigate('Webapp')
  }
  
    render() {
      return (
        <ScrollView style={{flex:1}}>
          <View style={{flex:1}}>
            <Image source={require('../assets/gridview_header.png')}
                 style={{resizeMode: 'cover'}} />
          </View>

          <View style={{flexDirection:'row',backgroundColor:'white', height: 180}}>
            <TouchableOpacity
            style={{backgroundColor:'white', margin: 8}}>
              <Image source={require('../assets/button_documents.png')}
                 style={{height: 164, width: 164, resizeMode: 'contain'}} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor:'white', margin: 8}}
             onPress={this.onPressMedication}>
              <Image source={require('../assets/button_timeline.png')}
                 style={{height: 164, width: 164, resizeMode: 'contain'}} />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row',backgroundColor:'white', height: 180}}>
            <TouchableOpacity
            style={{backgroundColor:'white', margin: 8}}
             onPress={this.onPressDocuments}>
              <Image source={require('../assets/button_bloodValue.png')}
                 style={{height: 164, width: 164, resizeMode: 'contain'}} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor:'white', margin: 8}}
             onPress={this.onPressDigimeda}>
              <Image source={require('../assets/button_digimeda.png')}
                 style={{height: 164, width: 164, resizeMode: 'contain'}} />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row',backgroundColor:'white', height: 180}}>
            <TouchableOpacity
              style={{backgroundColor:'white', margin: 8}}
             >
              <Image source={require('../assets/button_myColon.png')}
                 style={{height: 164, width: 164, resizeMode: 'contain'}} />
            </TouchableOpacity>
          </View>

        </ScrollView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    chartContainer: {
      flex: 1,
      backgroundColor: "#F5FCFF"
    }
  });