import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import { ECharts } from "react-native-echarts-wrapper";


export class TimelineView extends Component { 

  static navigationOptions = {
    title: 'blood values',
    headerStyle: {
      backgroundColor: '#5eb7b7'
    }
  }
  // Test Line Chart
  option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
             "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
             "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
             "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [820, 932, 1100, 934, 1290, 1220, 1320,
               1000, 932, 990, 1100, 1290, 1330, 1320,
               1241, 932, 1000, 934, 1290, 1330, 1100,
               1000, 932, 950, 934, 1290, 1330, 1320],
        type: "line",
        symbolSize:30
      }
    ],
    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 49
        },
        {
            show: true,
            type: 'slider',
            start:0,
            end: 49
        }
    ],
  };
  additionalCode = `
        chart.on('click', function(param) {
            var obj = {
            type: 'event_clicked',
            data: param.data
            };

            sendData(JSON.stringify(obj));
        });
    `;

  onData = param => {
    const obj = JSON.parse(param);

    if (obj.type === "event_clicked") {
      alert(`Value: ${obj.data}`);
    }
  };

  onRef = ref => {
    if (ref) {
      this.chart = ref;
    }
  };

  onButtonClearPressed = () => {
    this.chart.clear();
  };

  render() {
    return (
      <SafeAreaView style={styles.chartContainer}>
        <ECharts
          ref={this.onRef}
          option={this.option}
          additionalCode={this.additionalCode}
          onData={this.onData}
          onLoadEnd={() => {
            this.chart.setBackgroundColor("rgba(93, 169, 81, 0.1)");
          }}
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