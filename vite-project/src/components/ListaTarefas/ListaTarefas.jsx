import { useAppContext } from "../../hooks";
import { ListaTarefasItem } from "./ListaTarefasItem";
import style from './ListaTarefas.module.css';

const ListaTarefas = () => {
     const { tarefas } = useAppContext();
     return(
          <ul className={style.ListaTarefas}>
               {!tarefas.length && (
                    <p>Não há tarefas cadastradas.</p>
               ) }
               {tarefas.map(item=> (
                    <ListaTarefasItem
                    key={item.id}
                    id={item.id} 
                    nome={item.nome}
                    />
               ))}
          </ul>
     );
};

export { ListaTarefas };

// No React a propriedade "key" é muito importante nos elementos com LISTAGEM DINÂMICA pq o react vai usar ela pra saber qual elemento é qual na hora de renderiza-lo

//Além do que, caso não seja usada o react vai emeit uma mensagem no console informando o