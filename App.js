import React from "react";
import {StackNavigator} from 'react-navigation';
import { StatusBar } from "react-native";
import { Content, Container, Button,Footer,Input,FooterTab,text, Item,ListItem, Text, Drawer, Thumbnail, Header, Left, StyleProvider, Body, Title, List,Tabs,Tab,TabHeading,Icon,View} from "native-base";
import Expo from "expo";
import SideBar from './Menu.js';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

import HomeScreenComponents from './HomeScreenClass.js';
import SearchScreen from './SearchClass.js';




class HomeTab extends React.Component {
  static navigationOptions: {
       header: null
    };
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  closeDrawer(){
      this._drawer._root.close()
  }

  openDrawer(){
      this._drawer._root.open()
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
     
    <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()}>

      <StatusBar hidden = {true} />
      
      <StyleProvider style={getTheme(material)}>
      
      <Container>
       
        <Header AppMain>
       <Left>
        <Button transparent onPress = {()=>this.openDrawer()}>
         <Thumbnail small source={require('./src/programmer.jpg')}/>
          <Text bold>Home</Text>
        </Button>
        </Left>
       </Header>
      
       
         <Tabs>
          <Tab heading={ <TabHeading><Icon name="home" /></TabHeading>}>
           <HomeScreenComponents />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="search" onPress={() => navigate('Search')}/></TabHeading>}>
          <Item rounded>
           <Input placeholder='Search Twitter' onFocus={() => navigate('Search')}/>
           </Item>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="ios-notifications" /></TabHeading>}>
            
          </Tab>
          <Tab heading={ <TabHeading><Icon name="ios-mail-outline" /></TabHeading>}>
            
          </Tab>
        </Tabs>
       
      <Footer>
       
       
          <Button transparent>
           <Text>{`All`}</Text>
          </Button>
          <Button transparent>
           <Text>{`Mentions`}</Text>
          </Button>
        
        <Left />
         <Button transparent>
           <Icon name='ios-settings-outline' />
          </Button>
      </Footer>
      
    
     </Container>
    
       </StyleProvider>
      
      </Drawer>
      
    );
  }
}
const RootNavigator = StackNavigator({
  Home : {screen : HomeTab},
  Search : {screen : SearchScreen}
},
{
    navigationOptions: {
      header: null,
    },
  }
);


export default RootNavigator;