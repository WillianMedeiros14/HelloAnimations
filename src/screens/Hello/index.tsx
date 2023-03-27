import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import Lottie from 'lottie-react-native';

import { Styles } from './styles';

import HelloAnimation from '../../assets/animations/hello.json';

export default function Hello() {
  return (
    <View style={Styles.container}>
      <StatusBar 
        barStyle={'light-content'} 
        translucent backgroundColor={'#171810'} 
      />

      <Lottie 
        style={Styles.lottie} 
        autoPlay 
        loop 
        source={HelloAnimation} 
      />

      <View style={Styles.contentLogo}>
        <Text style={[Styles.icon]}>
            {`</>`}
        </Text>
        <View style={Styles.contentTextLogo}>
          <Text style={[Styles.firstText, Styles.logo]}>
            Cabocos
          </Text>
          <Text style={[Styles.secondText,  Styles.logo]}>
            .dev
          </Text>
        </View>
      </View>
    </View>
  );
}

