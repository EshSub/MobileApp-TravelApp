import { Button, ButtonIcon, ButtonText } from '@gluestack-ui/themed';
import { AntDesign } from '@expo/vector-icons';

export const GoogleLogin = ({ text }) => {
  return (
    <Button
      variant='outline'
      borderColor='#425884'
      size='xl'
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <ButtonIcon mr={'$3'} style={{ alignItems: 'center' }}>
        <AntDesign name='google' size={20} color='#425884' />
      </ButtonIcon>
      <ButtonText color='#425884' fontSize={17}>
        {text}
      </ButtonText>
    </Button>
  );
};
