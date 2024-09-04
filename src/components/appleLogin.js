import { Button, ButtonIcon, ButtonText } from '@gluestack-ui/themed';
import { AntDesign } from '@expo/vector-icons';

export const AppleLogin = ({ text }) => {
  return (
    <Button
      variant='outline'
      borderColor='black'
      size='xl'
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <ButtonIcon mr={'$3'} style={{ alignItems: 'center' }}>
        <AntDesign name='apple1' size={19} color='black' />
      </ButtonIcon>
      <ButtonText color='black' fontSize={17}>
        {text}
      </ButtonText>
    </Button>
  );
};
