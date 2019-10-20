import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Button, View, Text, ScrollView } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {TimelineView} from "./screens/TimelineView";
import {GridView} from "./screens/GridView";
import {CalendarView} from "./screens/CalendarView";
import {CalendarViewReact} from "./screens/CalendarViewReact";



const AppNavigator = createStackNavigator({

  Home: {
    screen: GridView,
  },
  Details: {
    screen: TimelineView,
  },
  Calendar: {
    screen: CalendarViewReact,
  }
});

export default createAppContainer(AppNavigator);