import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { Container, Button, text, ListItem, Text, Thumbnail, Content, List, Icon, Form, Picker, Left, Right, StyleProvider, Footer} from "native-base";
import Expo from "expo";
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

export default class Menu extends React.Component {
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

  render() {
    const styles = this.props.style;
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
      <StyleProvider style={getTheme(material)}>
      
       <Content>
        
        <StatusBar hidden={false} />

        <Thumbnail large source={require('./src/programmer.jpg')}/>
        <List>
        <ListItem>
         <List>
          <ListItem noBorder>
          <Text extraBold>{`Jignesh Patel          `}</Text>
          <Icon drop name='ios-arrow-down-outline' />
          </ListItem>
          <ListItem noBorder>
          <Text boldNote>@jigu_1997</Text>
          </ListItem>
          <ListItem noBorder>
          <Text bold>{`690 `}</Text><Text boldNote>following</Text><Text bold>{` 653 `}</Text><Text boldNote>followers</Text>
          </ListItem>
         </List>
            
          <Right />
          
          </ListItem>
          <ListItem>
          <List>
          <ListItem  buttonItems>
          <Button transparent>
          <Icon name='ios-person-outline' />
          <Text>{`Profile`}</Text>
          </Button>
          </ListItem>

          <ListItem  buttonItems>
          <Button transparent>
          <Icon name='ios-list-box-outline' />
          <Text>{`Lists`}</Text>
          </Button>

          </ListItem>
          <ListItem  buttonItems>
          <Button transparent>
          <Icon name='ios-flash-outline' />
          <Text>{`Moments`}</Text>
          </Button>

          </ListItem>
          <ListItem  buttonItems>
          <Button transparent>
          <Icon name='ios-photos-outline' />
          <Text>{`Highlights`}</Text>
          </Button>

          </ListItem>

          </List>
          </ListItem>


          <ListItem>
          <List>
          <ListItem buttonItems>
          <Button transparent>
          <Text>Settings and Privacy</Text>
          </Button>
          </ListItem>

          <ListItem buttonItems>
          <Button transparent>
          <Text>Help Centre</Text>
          </Button>
          </ListItem>
          </List>
          </ListItem>


          <ListItem >
       
        <Left>
            <Button transparent>
            <Icon name='ios-moon-outline' />
            </Button>
        </Left>
        <Right>
          <Button transparent>
          <Icon name='ios-apps-outline' />
          </Button>
        </Right>
        </ListItem>
     </List>
     

          

        </Content>

     
      </StyleProvider>
      
       
      </Container>
    );
  }
}
