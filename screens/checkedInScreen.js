import React from 'react';
import { Text } from 'native-base';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
var s = require('../assets/css/styles');

export default class CheckedInScreen extends React.Component {
  constructor(props) {

    super(props);
    
  }

  componentDidMount() {
    
  }


  onCheckedIn =()=> {
    this.props.navigation.navigate('Home', {});
  }

  onSignup =()=> {
    // this.props.navigation.navigate('SingUp');
  }

  onForgot =()=> {
    // this.props.navigation.navigate('Forget');
  }

  render() {
    return (
      <View style={[s.loader, s.padding20]}>
        <Text style={s.title}>CheckedIn</Text>
        <TouchableOpacity
          style={[styles.btnActive, s.w100]}
          onPress={this.onCheckedIn}
          activeOpacity={1}>
          <Text style={ styles.activeTxt}>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  btnActive: {
    height: 50,
    backgroundColor: '#173147',
    borderRadius: 8,
    borderColor: '#173147',
    borderWidth: 1,
    marginVertical: 30,
    width: '100%',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeTxt: {
    fontFamily: 'Lato-Light',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 17,
    color:'#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  
})
