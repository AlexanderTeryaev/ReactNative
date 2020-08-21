import React from 'react';
import { Container, Header, Footer, FooterTab, Button, Content, Text } from 'native-base';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
var s = require('../assets/css/styles');
import more from '../assets/icons/more.png';
import home from '../assets/icons/home.png';
import announce1 from '../assets/icons/announce1.png';
import calendar from '../assets/icons/calendar.png';
import chat from '../assets/icons/chat.png';
import doc from '../assets/icons/doc.png';

export default class AnnounceScreen extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      active: false
    }
  }

  componentDidMount() {
    
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
              style={s.checkInEm}
              activeOpacity={1}>
            </TouchableOpacity>
            <Text style={s.title}>Announce</Text>
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
          <Text style={[s.ft17Gray, s.mb15]}>This Week</Text>
          <TouchableOpacity style={[styles.card, s.shadowStyle]} onPress={this.onDetail}>
            <Image source={require('../assets/images/image1.png')} style={{borderRadius:8}} />
            <View style={{flex: 1, paddingLeft: 20}}>
              <Text style={[s.ft14BoldBlack, s.mb5]}>Exclusive Offers for Existing Patients</Text>
              <Text style={s.ft14300Gray}>Don't miss out!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, s.shadowStyle]} onPress={this.onDetail}>
            <Image source={require('../assets/images/image2.png')} style={{borderRadius:8}} />
            <View style={{flex: 1, paddingLeft: 20}}>
            <Text style={[s.ft14BoldBlack, s.mb5]}>Exclusive Offers for Existing Patients</Text>
              <Text style={s.ft14300Gray}>Don't miss out!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, s.shadowStyle]} onPress={this.onDetail}>
            <Image source={require('../assets/images/image3.png')} style={{borderRadius:8}} />
            <View style={{flex: 1, paddingLeft: 20}}>
            <Text style={[s.ft14BoldBlack, s.mb5]}>Exclusive Offers for Existing Patients</Text>
              <Text style={s.ft14300Gray}>Don't miss out!</Text>
            </View>
          </TouchableOpacity>
          <Text style={[s.ft17Gray, s.mb15]}>Past</Text>
          <TouchableOpacity style={[styles.card, s.shadowStyle]} onPress={this.onDetail}>
            <Image source={require('../assets/images/image4.png')} style={{borderRadius:8}} />
            <View style={{flex: 1, paddingLeft: 20}}>
            <Text style={[s.ft14BoldBlack, s.mb5]}>Exclusive Offers for Existing Patients</Text>
              <Text style={s.ft14300Gray}>Don't miss out!</Text>
            </View>
          </TouchableOpacity>
        </Content>        
        <Footer>
          <FooterTab style={s.footerContent}>
            <Button onPress={this.onHome}><Image source={home}/></Button>
            <Button onPress={this.onAnnounce}><Image source={announce1}/></Button>
            <Button onPress={this.onCalendar}><Image source={calendar}/></Button>
            <Button onPress={this.onChat}><Image source={chat}/></Button>
            <Button onPress={this.onDoc}><Image source={doc}/></Button>
          </FooterTab>
        </Footer>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },

  date: {
    fontFamily: 'Lato-Light',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 17.262,
    lineHeight: 21,
    color: '#B2B2B2',
    marginBottom: 15,
  },

  card: {
    padding: 15,
    borderRadius: 8,    
    marginBottom: 18,
    flexDirection: 'row',
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
})
