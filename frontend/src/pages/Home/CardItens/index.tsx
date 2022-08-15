
import { ContainerSmall } from "./styles";
import { useFetch } from '../../../Hooks/useFetch';


type Conta = {
  id?: number;
  tipo?: string;
  login?: string;
  senha?: string;
  instituicao?: string;
  obs?: string;
  children?:JSX.Element | JSX.Element[];
};

const CardItens:React.FC<Conta> = ({
  tipo,
  login,
  senha,
  instituicao,
  obs,
  children
}) => {
  return (
          <ContainerSmall >
            <ul>
              <li>Tipo : {tipo}</li>
              <li>Login : {login}</li>
              <li>Senha : {senha}</li>
              <li>Instituicao : {instituicao}</li>
              <li>Obs: {obs}</li>
            </ul>
            {children}
          </ContainerSmall>
  );
};

export default CardItens;
