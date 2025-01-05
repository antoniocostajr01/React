import style from './Erro.module.css';

const Erro404 = () => {
     return(
          <div className={style.Erro404}>
               <h1>404</h1>
               <h3>Erro! Página não encontrada</h3>
               <img src="https://tm.ibxk.com.br/2023/03/31/31143046922181.jpg" alt="naurto" />
          </div>
     );
};

export { Erro404 };