import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const weekDaysNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

class CalendarDayComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onDayPress = this.onDayPress.bind(this);
  }

  getContentStyle() {
    const { state, marking = {}, date, current } = this.props;
    const style= {
      content: {},
      text: {
        color: '#181c26'
      }
    };


    if (marking.soldOut) {
      style.text.color = '#fff';
      style.content.backgroundColor = '#e35052';
      style.content.borderRadius = 50;
    } else if (marking.blocked) {
      style.text.color = '#fff';
      style.content.backgroundColor = '#c1c2c1';
      style.content.borderRadius = 50;
    } else if (state === 'disabled') {
      style.text.color = '#c1c2c1';
    } else if (state === 'today') {
      style.text.color = '#fff';
      style.content.backgroundColor = '#216bc9';
      style.content.borderRadius = 50;
    } else if (current === date.dateString) {
      style.content.borderRadius = 50;
      style.content.borderWidth = 1;
      style.content.borderColor = '#216bc9';
    }

    return style;
  }

  getFooterTextStyle() {
    const { marking = {} } = this.props;
    const style = {
      color: '#c1c2c1',
      borderRadius: 100
    };

    if (marking.inventory > 0) {
      style.color = '#4caf50';
    }
    if (marking.inventory > 0) {
      style.height = (marking.inventory * 4);
      style.width = (marking.inventory * 4);
      style.backgroundColor = '#4caf50';
    }
    if (marking.visit > 0) {
      style.height = (marking.visit * 4);
      style.width = (marking.visit * 4);
      style.backgroundColor = '#FF5722';
    }
    if (marking.tablette > 0) {
      style.height = (marking.tablette * 4);
      style.width = (marking.tablette * 4);
      style.backgroundColor = '#294B4C';
    }
    return style;
  }

  getInventoryCount() {
    const { marking = {} } = this.props;
    if (typeof marking === 'object') {
      if (marking.inventory >= 0) {
        return marking.inventory;
      }
    }
    return '';
  }
  getVisitCount() {
    const { marking = {} } = this.props;
    if (typeof marking === 'object') {
      if (marking.visit >= 0) {
        return marking.visit;
      }
    }
    return '';
  }

  onDayPress() {
    this.props.onPress(this.props.date);
  }

  render() {
    const contentStyle = this.getContentStyle();

    return (
      <View >
        <View >
          {
            this.props.horizontal ?
              <Text style={styles.weekName} numberOfLines={1}>
                {
                  weekDaysNames[this.props.date.weekDay]
                }
              </Text>
              :
              null
          }
        </View>
        <TouchableOpacity
          style={[contentStyle.content, styles.content]}
        >
          <Text style={[contentStyle.text]}>
            {String(this.props.children)}
          </Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <View style={this.getFooterTextStyle()} />
        </View>
      </View>
    );
  }
}

CalendarDayComponent.propTypes = {
  children: PropTypes.any,
  state: PropTypes.string,
  marking: PropTypes.any,
  horizontal: PropTypes.bool,
  date: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  current: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
    marginRight: 7
  },
  weekName: {
    width: 32,
    textAlign: 'center',
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#7c7c7c'
  },
  content: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentText: {
    fontSize: 18
  }
});

export default CalendarDayComponent;