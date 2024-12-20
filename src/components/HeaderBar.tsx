import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';

interface HeaderBarProps {
  title?: string;
  backHandler?: any;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title, backHandler}) => {
  return (
    <View style={styles.HeaderContainer}>
      {backHandler ? (
        <TouchableOpacity onPress={() => backHandler()}>
          <GradientBGIcon
            name="left"
            color={COLORS.primaryLightGreyHex}
            size={SPACING.space_16}
          />
        </TouchableOpacity>
      ) : (
        <GradientBGIcon
          name="menu"
          color={COLORS.primaryLightGreyHex}
          size={SPACING.space_16}
        />
      )}
      {/* <GradientBGIcon
        name="menu"
        color={COLORS.primaryLightGreyHex}
        size={SPACING.space_16}
      /> */}
      <Text style={styles.HeaderText}>{title}</Text>
      <ProfilePic />
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});
