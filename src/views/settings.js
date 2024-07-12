import React, { useState } from 'react';
import {
  Radio,
  RadioIcon,
  RadioGroup,
  RadioLabel,
  RadioIndicator,
  VStack,
  CircleIcon,
  Switch,
  Text,
  Divider,
  HStack,
  Box,
} from '@gluestack-ui/themed';

import { Background } from '../components/background';

export const SettingsPage = () => {
  const [language, setLanguage] = useState('english');
  const [notifications, setNotifications] = useState(false);
  const [dataCollection, setDataCollection] = useState(false);

  return (
    <Background>
      <VStack
        justifyContent='center'
        alignItems='flex-start'
        space='sm'
        p={'$6'}
        padding={'$7'}
        width='100%'
      >
        <Text fontWeight='bold' mb='$4' size='lg'>
          Settings
        </Text>

        <Divider variant='horizontal' bg='$red500' $dark-bg='$red400' />

        <Text>Please Select Your Convenient Language:</Text>
        <RadioGroup
          value={language}
          onChange={(value) => setLanguage(value)}
          mb='$4'
          pl='$5'
        >
          <Radio value='english' size='md'>
            <RadioIndicator mr='$2'>
              <RadioIcon as={CircleIcon} strokeWidth={1} color='$blue400' />
            </RadioIndicator>
            <RadioLabel>English</RadioLabel>
          </Radio>
          <Radio value='french' size='md'>
            <RadioIndicator mr='$2'>
              <RadioIcon as={CircleIcon} strokeWidth={1} color='$blue400' />
            </RadioIndicator>
            <RadioLabel>French</RadioLabel>
          </Radio>
          <Radio value='german' size='md'>
            <RadioIndicator mr='$2'>
              <RadioIcon as={CircleIcon} strokeWidth={1} color='$blue400' />
            </RadioIndicator>
            <RadioLabel>German</RadioLabel>
          </Radio>
        </RadioGroup>

        <Divider variant='horizontal' bg='$emerald500' $dark-bg='$red400' />

        <HStack
          space='md'
          justifyContent='space-between'
          alignItems='center'
          width='100%'
        >
          <Text size='md' flex={1}>
            Allow Notifications
          </Text>
          <Switch
            value={notifications}
            onValueChange={(value) => setNotifications(value)}
            mt='$2'
            mb='$2'
          />
        </HStack>
        <Text size='xs' color='$grey200' mb='$4'>
          *Receive alerts and updates from the app.Stay in touch with the most
          popular events and destinations
        </Text>
        <Divider variant='horizontal' bg='$emerald500' $dark-bg='$red400' />

        <HStack
          space='md'
          justifyContent='space-between'
          alignItems='center'
          width='100%'
        >
          <Text size='md' flex={1}>
            Allow Data Collection for Enhanced User Experience
          </Text>
          <Switch
            value={dataCollection}
            onValueChange={(value) => setDataCollection(value)}
            mt='$2'
            mb='$2'
          />
        </HStack>
        <Text size='xs' color='$grey200' mb='$4'>
          *Help improve the app and improve our customer experience by allowing
          data collection.
        </Text>
      </VStack>
    </Background>
  );
};
