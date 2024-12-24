import style from './Rodape.module.css';

const Rodape = (props) => {
     const { criador } = props;

     const anoAtual = (new Date).getFullYear();
     return(
          <footer className={style.Rodape}>
               <p>
                    React Básico - {anoAtual} - {criador}
               </p>
          </footer>
     );
};

export { Rodape };