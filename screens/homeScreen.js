import React from 'react';
import { Container, Header, Footer, FooterTab, Button, Content, Text } from 'native-base';
import { Dimensions, View, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
var s = require('../assets/css/styles');
import more from '../assets/icons/more.png';
import home1 from '../assets/icons/home1.png';
import announce from '../assets/icons/announce.png';
import calendar from '../assets/icons/calendar.png';
import chat from '../assets/icons/chat.png';
import doc from '../assets/icons/doc.png';

export default class HomeScreen extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      tab:1,
      active: false,
    }
  }

  componentDidMount() {
    if (deviceWidth/deviceHeight <= 0.563 ){
      this.setState({ Islong : true });
    };
  }

  onCheckIn =()=> {
    this.props.navigation.navigate('CheckedIn', {});
  }

  onHome =()=> {
    this.props.navigation.navigate('Home', {});
  }

  onAnnounce =()=> {
    this.props.navigation.navigate('Announce', {});
  }

  onCalendar =()=> {
    this.props.navigation.navigate('Calendar', {});
  }

  onChat =()=> {
    this.props.navigation.navigate('Chat', {});
  }

  onDoc =()=> {
    this.props.navigation.navigate('Doc', {});
  }

  onAll =()=> {
    this.setState({
      tab: 1,
    })
  }

  onCare =()=> {
    this.setState({
      tab: 2,
    })
  }

  onService =()=> {
    this.setState({
      tab: 3,
    })
  }

  onProfile =()=> {
    this.setState({
      active: false
    });
    this.props.navigation.navigate('ProfileDetail')
  }

  onWeb =()=> {
    this.setState({
      active: false
    });
    this.props.navigation.navigate('Web');
  }

  render() {
    return (
      <Container style={s.container}>
        <Header style={s.headerContent}>
          <View style={s.spaceBetween}>
            <TouchableOpacity
              style={s.checkIn}
              onPress={() =>this.onCheckIn()}
              activeOpacity={1}>
              <Text>Check-In</Text>
            </TouchableOpacity>
            <Text style={s.title}>Home</Text>
            <TouchableOpacity
              style={s.moreIcon}
              onPress={() => this.setState({ active: !this.state.active })}
              activeOpacity={1}>
              <Image source={more}/>
            </TouchableOpacity>
            {this.state.active && 
              <View style={s.shadowBtn}>
                <TouchableOpacity
                  style={s.profileBtn}
                  onPress={() =>this.onProfile()}
                  activeOpacity={1}>
                  <Text style={s.ft15RegularBlack}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={s.formBtn}
                  onPress={() =>this.onWeb()}
                  activeOpacity={1}>
                  <Text style={s.ft15RegularBlack}>Form</Text>
                </TouchableOpacity>
              </View>
            }
          </View>            
        </Header>
        <Content style={s.mainContainer}>
          <View style={s.posRelative}>
            <TextInput
              placeholder="Search"
              onChangeText={(searchParam) => this.setState({ searchParam })}
              autoCapitalize='none'
              value={this.state.searchParam}
              style={ this.state.Islong ? styles.search: styles.search_}
            />
            <View style={ this.state.Islong ? styles.searchIcon: styles.searchIcon_}>
              <Image source={require('../assets/icons/search.png')}/>
            </View>
          </View>
          <View style={styles.spaceBetween}>
            <Button onPress={this.onAll} style={ this.state.tab==1 ? styles.btnActive: styles.btnDeactive}>
              <Text style={ this.state.tab==1 ? styles.activeTxt: styles.deactiveTxt}>All</Text>
            </Button>
            <Button onPress={this.onCare} style={ this.state.tab==2 ? styles.btnActive: styles.btnDeactive}>
              <Text style={ this.state.tab==2 ? styles.activeTxt: styles.deactiveTxt}>Dental Care</Text>
            </Button>
            <Button onPress={this.onService} style={ this.state.tab==3 ? styles.btnActive: styles.btnDeactive}>
              <Text style={ this.state.tab==3 ? styles.activeTxt: styles.deactiveTxt}>Dental Services</Text>
            </Button>
          </View>
          <WebView source={{ uri: 'https://reactnative.dev/' }} style={styles.card}/>
          <WebView source={{ uri: 'https://reactnative.dev/' }} style={styles.card}/>
          <WebView source={{ uri: 'https://reactnative.dev/' }} style={styles.card}/>
          <WebView source={{ uri: 'https://reactnative.dev/' }} style={styles.card}/>
          <WebView source={{ uri: 'https://reactnative.dev/' }} style={styles.card}/>
        </Content>
        <Footer>
          <FooterTab style={s.footerContent}>
            <Button onPress={this.onHome}><Image source={home1}/></Button>
            <Button onPress={this.onAnnounce}><Image source={announce}/></Button>
            <Button onPress={this.onCalendar}><Image source={calendar}/></Button>
            <Button onPress={this.onChat}><Image source={chat}/></Button>
            <Button onPress={this.onDoc}><Image source={doc}/></Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    borderRadius: 8,
    borderColor: '#E0E0E0',
    paddingLeft:35,
    width: '100%',
    fontFamily: 'NunitoSans-Light',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 19,
    color: '#173147',
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: "rgba(157, 157, 157, 0.2);",
    shadowOffset: {
      width: 1,
      height: 5
    },
    shadowRadius: 8,
    shadowOpacity: 1.0,
    elevation: 2,
    height: 30,
  },
  search_: {
    borderRadius: 8,
    borderColor: '#E0E0E0',
    paddingLeft:35,
    width: '100%',
    fontFamily: 'NunitoSans-Light',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 19,
    color: '#173147',
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: "rgba(157, 157, 157, 0.2);",
    shadowOffset: {
      width: 1,
      height: 5
    },
    shadowRadius: 8,
    shadowOpacity: 1.0,
    elevation: 2
  },
  btnActive: {
    height: 38,
    backgroundColor: '#173147',
    borderRadius: 8,
    borderColor: '#173147',
    borderWidth: 1,
  },
  activeTxt: {
    fontFamily: 'Lato-Light',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 17,
    color:'#FFFFFF',
  },
  btnDeactive: {
    height: 38,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#173147',
    borderWidth: 1,
  },
  deactiveTxt: {
    fontFamily: 'Lato-Light',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 17,
    color: '#173147',
    borderColor:'#173147',
  },
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  card: {
    padding: 15,
    borderRadius: 8,    
    marginBottom: 18,
    height: 119,
    width: '100%', 
    backgroundColor: '#fff',
    shadowColor: "rgba(157, 157, 157, 0.2);",
    shadowOffset: {
      width: 1,
      height: 5
    },
    shadowRadius: 8,
    shadowOpacity: 1.0,
    elevation: 2
  },

  ft10Gray: {
    fontFamily: 'NunitoSans-Light',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 14,
    color: '#AAAAAA',
    paddingLeft:20,
    right:0,
    bottom: 0, 
    position:'absolute',
  },

  searchIcon_: {
    position: 'absolute', 
    top: 18, left: 10,
  },

  searchIcon: {
    position: 'absolute', 
    top: 5, left: 10,
  },

})
