import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../components";
import { Inicial } from "../../pages";


const LayoutPadrao = () => {
     return(
          <>
          <Cabecalho nomeUsuario="Joana"/>
          <Conteudo>
               <Inicial/>
          </Conteudo>
          <Rodape criador="Antonio Costa"/>
          </>
     );
};

export { LayoutPadrao };