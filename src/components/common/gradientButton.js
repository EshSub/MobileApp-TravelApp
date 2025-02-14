import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, LinearGradient } from '@gluestack-ui/themed';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';

export const GradientButton = ({
  title,
  onPress,
  children,
  height,
  p,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ height: height }}>
      <LinearGradient
        p={p || '$3'}
        // width="50%"
        colors={['#5495FF', '#8BD8F9']}
        borderRadius={10}
        start={[0, 0]}
        end={[1, 1]}
        as={ExpoLinearGradient}
      >
        {title ? (
          <Text
            textAlign='center'
            size='xl'
            fontWeight={600}
            color='#fff'
            px={'$2'}
          >
            {title}
          </Text>
        ) : (
          children
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export const GradientChip = ({ text, selected, index, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        p='$2'
        pl={'$5'}
        pr={'$5'}
        colors={
          selected == index ? ['#5495FF', '#8BD8F9'] : ['#ffffff', '#ffffff']
        }
        style={{ borderRadius: 10 }}
        start={[0, 0]}
        end={[1, 1]}
        as={ExpoLinearGradient}
      >
        <Text
          textAlign='center'
          size='sm'
          fontWeight={600}
          color={selected == index ? '#ffffff' : '#5E6A81'}
        >
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
