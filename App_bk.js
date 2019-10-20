import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import { ECharts } from "react-native-echarts-wrapper";


export default class App extends Component { 
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
        data: [820, 932, 901, 934, 1290, 1330, 1320,
               820, 932, 901, 934, 1290, 1330, 1320,
               820, 932, 901, 934, 1290, 1330, 1320,
               820, 932, 901, 934, 1290, 1330, 1320],
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
  option = {
    tooltip: {
    },
    calendar: [{
        left: 'center',
        top: 'middle',
        cellSize: [70, 70],
        yearLabel: {show: false},
        orient: 'vertical',
        dayLabel: {
            firstDay: 1,
            nameMap: 'cn'
        },
        monthLabel: {
            show: false
        },
        range: '2017-03'
    }],
    series: [{
        type: 'custom',
        coordinateSystem: 'calendar',
        renderItem: renderItem,
        dimensions: [null, {type: 'ordinal'}],
        data: getVirtulData(2017)
    }]
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
      alert(`you tapped the chart series: ${obj.data}`);
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
        <Button title="Clear" onPress={this.onButtonClearPressed} />

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