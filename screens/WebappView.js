import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import {WebView} from "react-native-webview";

export class WebappView extends Component { 
  static navigationOptions = {
    title: 'digimeda',
    headerStyle: {
      backgroundColor: '#5eb7b7'
    }
  }
  

  render() {
    return (
      <SafeAreaView style={styles.chartContainer}>
        <WebView
        source={{uri: 'https://www.digimeda.de'}}
        style={{marginTop: 20}}
      />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  chartContainer: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});