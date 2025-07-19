import './Titulo.css';

function Titulo(props){
    return (
        <div className='container-titulo rt'>
            <h1>{props.titulo}</h1>
        </div>
    )
}

export default Titulo;