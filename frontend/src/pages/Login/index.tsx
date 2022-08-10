import Card from '../../Components/Card';
import Input from '../../Components/Inputs/PrimaryInput';
import ButtonLaranja from '../../Components/Buttons/ButtonLaranja';
import ButtonAzul from '../../Components/Buttons/ButtonAzul';
import ButtonContainer from '../../Components/ContainerButtons';
import { StyleDefault } from './styles';

const Login = () => {
    return(<StyleDefault>
    <Card>
        <h1>Login</h1>
        <Input type='text' descricaoPlaceholder='Login'></Input>
        <Input type='text' descricaoPlaceholder='Senha'></Input>
        <ButtonContainer>
          <ButtonLaranja>Logar</ButtonLaranja>
          <ButtonAzul>Registrar</ButtonAzul>
        </ButtonContainer>
      </Card>
    </StyleDefault>)
}

export default Login;