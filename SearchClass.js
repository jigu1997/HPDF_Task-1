import React from "react";
import {StackNavigator,TabNavigator,NavigationActions} from 'react-navigation';
import { StatusBar } from "react-native";
import { Content, Container, Button, text, ListItem, Item,Input,Text, Drawer, Thumbnail, Header, Left, StyleProvider, Body, Title, List,Tabs,Tab,TabHeading,Icon} from "native-base";
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';




 export default class SearchClass extends React.Component {


 render(){
  const {goBack} = this.props.navigation;
 
  return(
  <StyleProvider style={getTheme(material)}>
   <Container>
        <Header AppMain> 
          <Item>
             <Icon name="ios-arrow-round-back" onPress={() => goBack()}/>
            <Input placeholder="Search Twitter" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            
          </Button>
          </Header>

        
      </Container>
    </StyleProvider>
    );
 }

}


