import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Image, TextInput, TouchableHighlight, Linking } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
export default function App() {
  onPressLogin = () => {
    alert('Yahoooooo!!!!!!!!!!!!!!!!!!!')
  }
  return (
    <View style={styles.container}>
     <ScrollView>
      <View style={{ marginTop: 10}}>
        <Image 
          source={{ uri: 'https://wilcity.com/wp-content/uploads/2018/12/sample-logo-design-png-3.png'}}
          style={styles.logoImage}
        />
      </View>
      <Text style={styles.paragraph}>
        Login Screen
      </Text>
      <View style={{ marginTop: 10}}>
        <View style={styles.textinputView}>
          <FontAwesome name="phone" size={20} color="#bc0000" />
          <TextInput 
            style={styles.textinputStyle}
            placeholder="Mobile Number"
            placeholderTextColor="#bc0000"
            underlineColorAndroid="transparent"
            maxLength={10}
          />
        </View>
        <View style={styles.textinputView}>
          <FontAwesome name="lock" size={20} color="#bc0000" />
          <TextInput 
            style={styles.textinputStyle}
            placeholder="Password"
            placeholderTextColor="#bc0000"
            underlineColorAndroid="transparent"
            maxLength={50}
          />
        </View>
      </View>
      
      <TouchableHighlight style={styles.signinButton} onPress={()=>this.onPressLogin()}>
        <Text style={styles.signinButtonText}> Sign In </Text>
      </TouchableHighlight>
     </ScrollView>
     <View style={styles.footerView}>
       <Text style={styles.footerText}>2020 <Text onPress={()=> Linking.openURL('http://vanns35.com')} style={{ color: '#1e3274' }}>vanns35.com </Text>App v1.0</Text>
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
    color: '#808080'
  },
  logoImage: {
    height: height/4,
    width: width / 1.5,
    alignSelf: 'center'
  },
  textinputView: {
    flexDirection: 'row',
    borderBottomColor: '#bc0000',
    borderBottomWidth: 2,
    height: 30,
    marginTop: 30
  },
  textinputStyle: {
    flex: 1, 
    paddingLeft: 10,
    marginTop: -10,
    fontSize: 14, 
    color: '#bc0000'
  },
  signinButton: {
    borderColor: '#BC0000',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    marginTop: 30
  },
  signinButtonText: {
    textAlign: 'center',
    color: '#bc0000',
    fontSize: 14
  },
  footerView: {
    backgroundColor: '#cccccc',
    width: width
  },
  footerText: {
    margin: 10,
    fontSize: 12,
    marginRight: 5,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
