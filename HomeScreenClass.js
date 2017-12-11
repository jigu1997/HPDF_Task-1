import React from "react";
import {StackNavigator,TabNavigator} from 'react-navigation';
import { StatusBar } from "react-native";
import { Content, Container, Button,Badge,Footer,FooterTab,View,ListItem,Image,Text,Fab, Drawer, Thumbnail, Header, Left, StyleProvider, Body, Title, List,Tabs,Tab,TabHeading,Icon} from "native-base";
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import SideBar from './Menu.js';

export default class HomeScreenClass extends React.Component {
   
   render(){
   	return(
   	
      <Container>
   		<List>

   		 <ListItem>
   		  <List>
   		   
   		   <ListItem noBorder>
   		    <Thumbnail medium source={require('./src/iot_profile.jpg')} />
            <Text extraBold>{` Techy Geeks `}</Text>
   		    <Badge style={{ backgroundColor: '#87cefa' }}>
   		    	<Icon name="ios-checkmark" />
   		    </Badge>
   		    <Text note>{`  @techydevil  .  24m  `}</Text>
   		    <Icon drop name='ios-arrow-down-outline' />
   		   </ListItem>
   		   <ListItem noBorder>
   		   <Text>The tastiest Raspberry Pi 3 and Pi Zero projects to  baking today. From beginner builds to more advanced Pi uses, all the ideas you need are right here.</Text>
   		   </ListItem>
   		   <ListItem noBorder>
   		   <Thumbnail square imageSized source={require('./src/raspberry.jpg')} />
   		   </ListItem>
   		   <ListItem noBorder>
   		   <Button iconLeft transparent>
   		    <Icon name='ios-chatbubbles-outline' />
   		    <Text>25</Text>
   		   </Button>
   		   <Button iconLeft transparent>
   		    <Icon name='ios-git-compare' />
   		    <Text>5</Text>
   		   </Button>
   		   <Button iconLeft transparent>
   		    <Icon name='ios-heart-outline' />
   		    <Text>45</Text>
   		   </Button>
   		   <Button iconLeft transparent>
   		    <Icon name='ios-mail-outline' />
   		   </Button>
   		   </ListItem>

   		  </List>
   		 </ListItem>



   		 <ListItem>
   		  <List>
   		   
   		   <ListItem noBorder>
   		    <Thumbnail medium source={require('./src/wanderlust.jpg')} />
            <Text extraBold>{` Wanderers `}</Text>
   		    <Badge style={{ backgroundColor: '#87cefa' }}>
   		    	<Icon name="ios-checkmark" />
   		    </Badge>
   		    <Text note>{`  @travel_lust23  .  24m  `}</Text>
   		    <Icon drop name='ios-arrow-down-outline' />
   		   </ListItem>
   		   <ListItem noBorder>
   		   <Text>Explore the Beauty of Lake in the Nainital City</Text>
   		   </ListItem>
   		   <ListItem noBorder>
   		   <Thumbnail square imageSized source={require('./src/nainital.jpg')} />
   		   </ListItem>
   		   <ListItem noBorder>
   		   <Button iconLeft transparent>
   		    <Icon name='ios-chatbubbles-outline' />
   		    <Text>40</Text>
   		   </Button>
   		   <Button iconLeft transparent>
   		    <Icon name='ios-git-compare' />
   		    <Text>100</Text>
   		   </Button>
   		   <Button iconLeft transparent>
   		    <Icon name='ios-heart-outline' />
   		    <Text>300</Text>
   		   </Button>
   		   <Button iconLeft transparent>
   		    <Icon name='ios-mail-outline' />
   		   </Button>
   		   </ListItem>

   		  </List>
   		 </ListItem>


   		</List>
          <Fab
           
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            >
            <Icon name="ios-leaf-outline" />
           </Fab>

           </Container>
   
   		);
   }
   
}