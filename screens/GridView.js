import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DraggableGrid } from 'react-native-draggable-grid'; // Terminal installation: "npm install react-native-draggable-grid --save"

interface MyTestProps {
}
interface MyTestState {
  data: { key: string, name: string }[];
}

const tileHeight = Math.round(Dimensions.get('window').width / 2 - 20);
const tileWidth = Math.round(Dimensions.get('window').width / 2 - 20);


export class GridView extends Component<MyTestProps, MyTestState>{
  //header customization of grid view
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
        style={{ marginLeft: 12 }}
        onPress={() => alert('You clicked the MENU')}>
        <Image source={require('../assets/icon_headerMenu.png')} style={{ height: 26, width: 26 }} />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        style={{ marginRight: 12 }}
        onPress={() => alert('You clicked the ACCOUNT MENU')}>
        <Image source={require('../assets/icon_headerAccount.png')} style={{ height: 26, width: 26 }} />
      </TouchableOpacity>
    )
  };



  onPressGridElement = (item) => {
    if (item.key == 'module_timeline'){
      this.props.navigation.navigate('Calendar')
    }
    if (item.key == 'module_bloodValues'){
      this.props.navigation.navigate('Timeline')
    }
    if (item.key == 'module_myColon'){
      this.props.navigation.navigate('Webapp')
    }
    if (item.key == 'module_documents'){
      alert('Module documents clicked');
    }
    if (item.key == 'module_medication'){
      alert('Module medication clicked');
    }
  }


  constructor(props: MyTestProps) {
    super(props);
    this.state = {
      data: [
        { name: 'documents', key: 'module_documents', icon: require('../assets/icon_documents.png') },
        { name: 'blood values', key: 'module_bloodValues', icon: require('../assets/icon_bloodValues.png') },
        { name: 'medication', key: 'module_medication', icon: require('../assets/icon_medication.png') },
        { name: 'my colon', key: 'module_myColon', icon: require('../assets/icon_myColon.png') },
        { name: 'timeline', key: 'module_timeline', icon: require('../assets/icon_timeline.png') },
      ],
    };
  }

  renderItem = (item: { name: string, key: string }) => {
    return (
      <View
        style={{flex: 1}}
        key={item.key}>
        <TouchableOpacity style={styles.tileContainer}>
          <Text style={styles.tileText}>{item.name}</Text>
          <Image source={item.icon}
            style={{resizeMode: 'contain'}} />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image 
        source={require('../assets/gridview_header2.png')}
        style={{height: 32, width: 340, marginBottom: 4, resizeMode: 'cover'}} />

        <DraggableGrid
          style={{ flex: 1}}
          numColumns={2}
          renderItem={this.renderItem}
          data={this.state.data}
          onItemPress={this.onPressGridElement}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tileContainer: {
    height: tileHeight,
    width: tileWidth,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: "#325c5d",
    borderWidth: 2,
    borderColor: '#ec9b3b',
  },
  tileText: {
    flex: 1,
    color: '#cfdddd',
    fontSize: 24
  },
});