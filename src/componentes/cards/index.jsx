function Cards ({valor, texto}){
    
    return(
        <div className="card-entradas">
            <div className="icone1">
          
            </div>
            <div className="Entradas">
                <p className="text-entrada">{texto}</p>
                <p className="textentrada"> R$ {valor}</p>
            </div>
        </div>
    )

}
export default Cards