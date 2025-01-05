import { FormCriarTarefa, ListaTarefas } from "../../components";

import style from './Incial.module.css';




const Inicial = () => {
     return (
          <div className={style.Inicial}>
               <FormCriarTarefa/>
               <ListaTarefas/>
          </div>
     );
}

export { Inicial };