import React from "react";
import { StatusBar } from "react-native";
import { Container, Button, text, ListItem, Text, Drawer, Thumbnail, Header, Left, StyleProvider, Body, Title, List,Content} from "native-base";
import Expo from "expo";
import SideBar from './Menu.js';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

export default class Home extends React.Component {

	constructor(props) {
    super(props);
    this.state = { loading: true };
  }

   async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render(){
  	if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return(
    	
    	<Text>Hello</Text>
    	

    	);

  }

}