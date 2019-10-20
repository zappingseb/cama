import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Button, View, Text } from "react-native";
import { ECharts } from "react-native-echarts-wrapper";

import {TimelineView} from "./screens/TimelineView";
import {GridView} from "./screens/GridView";


export default class App extends Component { 
  

  render() {
    return (
 
        <View>
          <Text>asdfasdfsadfsadf</Text>
          <View style={{height:150, width: 150}}>
            <TimelineView />
          </View>
          <GridView />
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