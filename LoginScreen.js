import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Image, TextInput, TouchableHighlight, Linking } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');

export default function App() {

  handleOnPressSignin = () => {
    alert('Yahoooooo!!!!!!!!')
  }
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ marginTop: 40 }}>
          <Image 
            source={{ uri: 'https://wilcity.com/wp-content/uploads/2018/12/sample-logo-design-png-3.png' }} 
            style={styles.logoImage}
          />
        </View>
        <Text style={styles.paragraph}>
          Login Screen
        </Text>
        <View>
          <View style={styles.textInputView}>
            <FontAwesome name="phone" size={20} color={"#808080"}/>
            <TextInput 
              style={styles.textInputStyle}
              placeholder="Mobile Number"
              placeholderTextColor="#808080"
              underlineColorAndroid="transparent"
              maxLength={20}
            />
          </View>
          <View style={styles.textInputView}>
            <FontAwesome name="lock" size={20} color={"#808080"}/>
            <TextInput 
              style={styles.textInputStyle}
              placeholder="Password"
              placeholderTextColor="#808080"
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              maxLength={20}
            />
          </View>
        </View>
        
        <TouchableHighlight activeOpacity={1} underlayColor={"#ad1111"} style={styles.signinButton} onPress={() => this.handleOnPressSignin()}>
          <Text style={styles.signinButtonText}>Submit OTP</Text>
        </TouchableHighlight>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          2020 <Text onPress={() => Linking.openURL('http://vanns35.com')} style={{ color: '#1e3274' }}>vanns35.com</Text> App v1.0
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ad1111'
  },
  logoImage: {
    height: height / 5,
    width: width / 1.5,
    alignSelf: 'center'
  },
  textInputView: {
    flexDirection: 'row',
    borderBottomColor: '#808080',
    borderBottomWidth: 2,
    height: 30,
    marginTop: 30
  },
  textInputStyle: {
    flex: 1,
    paddingLeft: 10,
    marginTop: -10,
    fontSize: 14,
    color: '#808080'
  },
  signinButton: {
    borderColor: '#ad1111',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  signinButtonText: {
    textAlign: 'center',
    color: '#ad1111',
    fontSize: 14,
  },
  footer: {
    backgroundColor: '#cccccc',
    width: width
  },
  footerText: {
    margin: 10, 
    fontSize: 12, 
    marginRight: 2, 
    color: '#000', 
    fontWeight: 'bold', 
    textAlign: 'center'
  }
});
