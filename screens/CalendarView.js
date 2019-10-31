import React, { Component } from 'react';
import { View } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';
import moment from 'moment';

import CalendarDayComponent from './CalendarDayComponent';

let calendarDate = moment();

export class CalendarView extends Component {

  static navigationOptions = {
    title: 'timeline',
    headerStyle: {
      backgroundColor: '#5eb7b7'
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      calendarDate: calendarDate.format('YYYY-MM-DD'),
      horizontal: false
    };

    this.onPressListView = this.onPressListView.bind(this);
    this.onPressGridView = this.onPressGridView.bind(this);
    this.onDayPress = this.onDayPress.bind(this);
  }


  onPressListView() {
    this.setState({ horizontal: true });
  }

  onPressGridView() {
    this.setState({ horizontal: false });
  }

  onDayPress(date) {
    calendarDate = moment(date.dateString);
    this.updateCalendarDate();
  }

  updateCalendarDate() {
    this.setState({
      calendarDate: calendarDate.format('YYYY-MM-DD')
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CalendarList
          //the two upper <CalendarList is needed for a scrollable Calendar -> You may use <Calendar only instead
          current="2019-10-19"
          dayComponent={CalendarDayComponent}
          headerData={{
            calendarDate: calendarDate.format('DD MMM, YYYY')
          }}
          style={{
            paddingLeft: 0, paddingRight: 0
          }}
          onPressArrowLeft={substractMonth => substractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          onPressListView={this.onPressListView}
          onPressGridView={this.onPressGridView}
          markedDates={{
            '2019-10-19': {soldOut: true},
            '2019-10-20': {blocked: true},
            '2019-10-21': {inventory: 1},
            '2019-10-22': {inventory: 2},
            '2019-10-23': {visit: 1},
            '2019-10-24': {visit: 2},
            '2019-10-25': {tablette: 1},
            '2019-10-26': {tablette: 2},
            '2019-10-27': {inventory: 1, visit: 1, tablette: 1},
            '2019-03-23': { soldOut: false, blocked: false, inventory: 2, visit: 1, tablette: 1 },
            '2019-03-24': { soldOut: true, blocked: false, inventory: 2, visit: 1 },
            '2019-03-25': { soldOut: false, blocked: true, inventory: 0, },
            '2019-03-26': { soldOut: true, blocked: true, inventory: 2 },
            "2019-03-12": { soldOut: false, blocked: false, inventory: 3, tablette: 1 },
            "2019-03-10": { soldOut: false, blocked: true, inventory: 2, tablette: 1 },
            "2019-03-09": { soldOut: false, blocked: true, visit: 2 },
            "2019-03-04": { soldOut: false, blocked: true, inventory: 3 },
            "2019-03-01": { soldOut: false, blocked: false, inventory: 3, visit: 1 },
            "2019-03-15": { soldOut: false, blocked: false, inventory: 3, tablette: 1 },
          }}
          horizontal={this.state.horizontal}
          onDayPress={this.onDayPress}
        />
      </View>
    );
  }
}

