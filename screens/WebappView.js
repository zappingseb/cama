import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import {WebView} from "react-native-webview";

export class WebappView extends Component { 
  

  render() {
    return (
      <SafeAreaView style={styles.chartContainer}>
        <WebView
        source={{uri: 'http://127.0.0.1:8080/'}}
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