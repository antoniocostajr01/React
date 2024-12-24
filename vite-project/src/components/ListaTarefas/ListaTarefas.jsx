import { ListaTarefasItem } from "./ListaTarefasItem";
import style from './ListaTarefas.module.css';

const ListaTarefas = () => {
     const tarefas = [
          { id: 1, nome: 'Item 1'},
          { id: 2, nome: 'Item 2'},
          { id: 3, nome: 'Item 3'},
     ];
     return(
          <ul className={style.ListaTarefas}>
               {tarefas.map(item=> <ListaTarefasItem key={item.id} nome={item.nome} />)}
          </ul>
     );
};

export { ListaTarefas };

// No React a propriedade "key" é muito importante nos elementos com LISTAGEM DINÂMICA pq o react vai usar ela pra saber qual elemento é qual na hora de renderiza-lo

//Além do que, caso não seja usada o react vai emeit uma mensagem no console informando o