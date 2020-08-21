import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import Logo from '../assets/logo.png';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
export default class SplashScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    if (deviceWidth/deviceHeight <= 0.563 ) {
      this.setState({ Islong : true });
    };
    this.props.navigation.navigate('Web', {});
  }

  render() {
    return (
      <View style={s.loader}>
        <Image
          source={Logo}
          style={ this.state.Islong ? styles.ImageIconStyle_logo_: styles.ImageIconStyle_logo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  ImageIconStyle_logo: {
    padding: 12,
    margin: 5,
    height: deviceHeight * 0.13,
    width: deviceWidth * 0.6,
    resizeMode: 'stretch',
  },

  ImageIconStyle_logo_: {
    padding: 12,
    margin: 5,
    height: deviceHeight * 0.11,
    width: deviceWidth * 0.6,
    resizeMode: 'stretch',
  },
  
})
