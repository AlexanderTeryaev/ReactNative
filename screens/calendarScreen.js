import React from 'react';
import { Container, Header, Footer, FooterTab, Button, Content, Text } from 'native-base';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {Calendar} from 'react-native-calendars';
var s = require('../assets/css/styles');
import more from '../assets/icons/more.png';
import home from '../assets/icons/home.png';
import announce from '../assets/icons/announce.png';
import calendar1 from '../assets/icons/calendar1.png';
import chat from '../assets/icons/chat.png';
import doc from '../assets/icons/doc.png';

export default class CalendarScreen extends React.Component {

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
            <Text style={s.title}>Calendar</Text>
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
        <Content style={s.margin20}>
          <Calendar 
            markedDates={{
              '2020-08-16': {selected: true, marked: true, selectedColor: 'blue'},
              '2020-08-17': {marked: true},
              '2020-08-18': {marked: true, dotColor: 'red', activeOpacity: 0},
              '2020-08-19': {disabled: true, disableTouchEvent: true}
            }}
            style={s.mb20}
          />
          <View style={[styles.title, s.mb10]}>
            <Text style={s.ft20Black}>Today</Text>
            <Text style={[s.ft14300Gray, styles.pl20]}>7/16/20</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.title}>
              <View style={styles.mark}></View>
              <Text style={[s.ft17Gray,]}>
                Routin Appointment
              </Text>
            </View>
            <Text style={[s.ft12Gray, s.mb5, styles.ml25]}>Following up one week after</Text>
            <View style={[s.spaceBetween, styles.pl20]}>
              <Text style={s.ft12Gray}>11:00-11:30</Text>
              <Text style={s.ft12Gray}>Dr. Jess Ann</Text>
            </View>
          </View>
          <View style={[styles.title, s.mb10]}>
            <Text style={s.ft20Black}>WendesDay</Text>
            <Text style={[s.ft14300Gray, styles.pl20]}>7/12/20</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.title}>
              <View style={styles.demark}></View>
              <Text style={[s.ft17Gray,]}>
                Follow Appointment
              </Text>
            </View>
            <Text style={[s.ft12Gray, s.mb5, styles.ml25]}>Following up one week after</Text>
            <View style={[s.spaceBetween, styles.pl20]}>
              <Text style={s.ft12Gray}>11:00-11:30</Text>
              <Text style={s.ft12Gray}>Dr. Jess Ann</Text>
            </View>
          </View>
        </Content>
        <Footer>
          <FooterTab style={s.footerContent}>
            <Button onPress={this.onHome}><Image source={home}/></Button>
            <Button onPress={this.onAnnounce}><Image source={announce}/></Button>
            <Button onPress={this.onCalendar}><Image source={calendar1}/></Button>
            <Button onPress={this.onChat}><Image source={chat}/></Button>
            <Button onPress={this.onDoc}><Image source={doc}/></Button>
          </FooterTab>
        </Footer>
      </Container >
    );
  }
}

const styles = StyleSheet.create({

  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  pl20: {
    paddingLeft: 20,
    paddingTop: 5,
  },

  demark: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#39587F',
    marginRight: 15,
  },

  mark: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#DADADA',
    marginRight: 15,
  },

  ml25: {
    marginLeft: 25
  },

  card: {
    padding: 15,
    borderRadius: 8,    
    marginBottom: 18,
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
