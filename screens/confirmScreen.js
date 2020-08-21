import React from 'react';
import { Dimensions, View, TouchableOpacity, StyleSheet, TextInput, Text, Image } from 'react-native';
var s = require('../assets/css/styles');
import backBtn from '../assets/icons/backBtn.png';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default class ConfirmScreen extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      verifyNum: '',
    };
  }

  componentDidMount() {
    if (deviceWidth/deviceHeight <= 0.563 ){
      this.setState({ Islong : true });
    };
  }


  onSummit =()=> {
    if (this.state.verifyNum == '') {
      alert("Please insert verification code");
      return;
    }
    this.props.navigation.navigate('Home', {});
  }

  onBack =()=> {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={[s.loader, s.padding20]}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={this.onBack}
          activeOpacity={1}>
          <Image source={backBtn}/>
        </TouchableOpacity>
        <Text style={s.title}>ENTER CONFIRMATION CODE</Text>
        <TextInput
          placeholder="confirm code"
          onChangeText={(verifyNum) => this.setState({ verifyNum })}
          autoCapitalize='none'
          value={this.state.verifyNum}
          style={ this.state.Islong ? styles.inputText: styles.inputText_}
        />        
        <TouchableOpacity
          style={styles.btnActive}
          onPress={this.onSummit}
          activeOpacity={1}>
          <Text style={ styles.activeTxt}>Submit</Text>
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
    marginVertical: 40,
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
    marginVertical: 40,
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
  backBtn: {
    position: 'absolute',
    left: 25,
    top: 40,
  }
})
