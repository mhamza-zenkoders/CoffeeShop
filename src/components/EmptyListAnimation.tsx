import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';

interface EmptyListAnimationProps {
  title: string;
}

const EmptyListAnimation: React.FC<EmptyListAnimationProps> = ({title}) => {
  return (
    <View style={styles.EmptyCartContainer}>
      <LottieView
        source={require('../lottie/coffeecup.json')}
        style={styles.LottieStyle}
        autoPlay
      />
      <Text style={styles.LottieText}>{title}</Text>
    </View>
  );
};

export default EmptyListAnimation;

const styles = StyleSheet.create({
  EmptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LottieStyle: { 
    height: 300,
    width: 300,
  },
  LottieText: {
    fontFamily:FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
    textAlign:'center'
  },
});
