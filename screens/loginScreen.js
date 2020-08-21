import React from 'react';
import { Dimensions, View, TouchableOpacity, StyleSheet, TextInput, Text } from 'react-native';
var s = require('../assets/css/styles');
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default class LoginScreen extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      phone: '',
    };
  }

  componentDidMount() {
    if (deviceWidth/deviceHeight <= 0.563 ){
      this.setState({ Islong : true });
    };
  }


  onSendCode =()=> {
    if (this.state.phone == '') {
      alert("Please insert phone number");
      return;
    }
    this.props.navigation.navigate('Confirm', {});
  }

  onSignup =()=> {
    // this.props.navigation.navigate('SingUp');
  }

  render() {
    return (
      <View style={[s.loader, s.padding20]}>
        <Text style={s.title}>LOGIN</Text>
        <Text style={[s.ft12Black, s.mv25, styles.textLeft]}>Phone</Text>
        <TextInput
          placeholder="phone number"
          onChangeText={(phone) => this.setState({ phone })}
          autoCapitalize='none'
          value={this.state.phone}
          style={ this.state.Islong ? styles.inputText: styles.inputText_}
        />        
        <TouchableOpacity
          style={styles.btnActive}
          onPress={this.onSendCode}
          activeOpacity={1}>
          <Text style={ styles.activeTxt}>Send Code</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.onSignup}
          activeOpacity={1}>
          <Text style={styles.lineBtnTxt}>New here? Create an account.</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textLeft: {
    textAlign:'left',
    width: '100%',
    paddingLeft: 10,
  },
  inputText: {
    borderRadius: 8,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    paddingLeft:10,
    width: '100%',
    fontFamily: 'NunitoSans-Light',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 19,
    color: '#173147',
    backgroundColor: '#fff',
    height: 30,
  },
  inputText_: {
    borderRadius: 8,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    width: '100%',
    fontFamily: 'NunitoSans-Light',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 19,
    paddingLeft:10,
    color: '#173147',
    backgroundColor: '#fff',
    
  },
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
  lineBtnTxt: {
    borderBottomColor: '#B2B2B2',
    marginTop: 20,
    borderBottomWidth: 1
  },
  pr40: {
    paddingRight: 50,
  },
})
