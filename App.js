import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Button, View, Text, ScrollView } from "react-native";
import { ECharts } from "react-native-echarts-wrapper";

import {TimelineView} from "./screens/TimelineView";
import {GridView} from "./screens/GridView";
//import {CalendarView} from "./screens/CalendarView";


export default class App extends Component { 
  

  render() {
    return (
 
        <ScrollView>
          
          <View style={{height: 800}}>
            <GridView />
          </View>
          <View style={{height: 800}}>
            <TimelineView />
          </View>
          <View style={{height: 300}}>
            <View />
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