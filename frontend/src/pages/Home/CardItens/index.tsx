import ButtonLaranja from "../../../Components/Buttons/ButtonLaranja";
import ButtonAzul from "../../../Components/Buttons/ButtonAzul";
import { ContainerSmall } from "./styles";

const CardItens = () => {
  return (
        // <ContainerCards>
          <ContainerSmall>
            <ul>
              <li>Tipo</li>
              <li>Login</li>
              <li>Senha</li>
              <li>Instituicao</li>
              <li>Obs:</li>
            </ul>
            <div>
              <ButtonAzul>Editar</ButtonAzul>
              <ButtonLaranja>Remove</ButtonLaranja>
            </div>
          </ContainerSmall>
        // </ContainerCards>
  );
};

export default CardItens;
