import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
//import { NavigationActions } from 'react-navigation';


export class GridView extends Component {
  static navigationOptions = {
    title: 'cama',
    headerStyle: {
      backgroundColor: '#5eb7b7'
    },
    headerTintColor: '#eef8f8',
    headerTitleStyle: {
      fontWeight: 'normal',
      fontSize: 24,
      flexGrow: 1,
      alignSelf: 'center',
      textAlign: 'center'
    },
    headerLeft: () => (
      <TouchableOpacity 
      style={{marginLeft: 12}} 
      onPress={() => alert('You clicked the MENU')}>
        <Image source={require('../assets/icon_headerMenu.png')} style={{height:26, width: 26}}/>
      </TouchableOpacity>
      ),
    headerRight: () => (
      <TouchableOpacity 
      style={{marginRight: 12}} 
      onPress={() => alert('You clicked the ACCOUNT MENU')}>
        <Image source={require('../assets/icon_headerAccount.png')} style={{height:26, width: 26}}/>
      </TouchableOpacity>
      )
  };


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
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Image source={require('../assets/gridview_header2.png')}
            style={{ width: 360, resizeMode: 'contain' }} />
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={{ flex: 1 }}>
            <View style={styles.tileContainer}>
              <Text style={styles.tileText}>
                blood values
                </Text>
              <Image source={require('../assets/icon_bloodValue.png')}
                style={{ height: 64, width: 64, resizeMode: 'contain' }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={this.onPressMedication}>
            <Image source={require('../assets/button_timeline.png')}
              style={{ height: 150, width: 150, resizeMode: 'contain' }} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 8 }}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={this.onPressDocuments}>
            <Image source={require('../assets/button_bloodValue.png')}
              style={{ height: 150, width: 150, resizeMode: 'contain' }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={this.onPressDigimeda}>
            <Image source={require('../assets/button_digimeda.png')}
              style={{ height: 150, width: 150, resizeMode: 'contain' }} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ backgroundColor: 'white', margin: 8 }}
          >
            <Image source={require('../assets/button_myColon.png')}
              style={{ height: 164, width: 164, resizeMode: 'contain' }} />
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8
  },
  tileContainer: {
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: "#325c5d",
    borderWidth: 2,
    borderColor: '#ec9b3b'
  },
  tileText: {
    color: '#becccc',
    fontSize: 24
  },
  tileIcon: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});