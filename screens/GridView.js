import React, { Component } from "react";
import { StyleSheet, View, Text, Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DraggableGrid } from 'react-native-draggable-grid'; // Terminal installation: "npm install react-native-draggable-grid --save"


interface MyTestProps {
}
interface MyTestState {
  data: { key: string, name: string }[];
}

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


  onPressDocuments = () => {
    this.props.navigation.navigate('Details')
  }

  onPressTimeline = () => {
    this.props.navigation.navigate('Calendar')
  }

  onPressDigimeda = () => {
    this.props.navigation.navigate('Webapp')
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
        style={{backgroundColor:'white'}}
        key={item.key}>
        <TouchableOpacity style={styles.tileContainer}>
          <Text style={styles.tileText}>{item.name}</Text>
          <Image source={item.icon}
            style={{ height: 64, width: 64, resizeMode: 'contain' }} />
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
          style={{ flex: 1 }}
          numColumns={2}
          renderItem={this.renderItem}
          data={this.state.data}
          onItemPress={this.onPressTimeline}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tileContainer: {
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: "#325c5d",
    borderWidth: 2,
    borderColor: '#ec9b3b'
  },
  tileText: {
    color: '#cfdddd',
    fontSize: 24
  },
  tileIcon: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});