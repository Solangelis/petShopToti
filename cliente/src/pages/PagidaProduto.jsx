import React from 'react';
import { useState } from 'react'




function Form() {
  
    const [categoria, setCategoria] = useState("");
    const [titulo, setTitulo] = useState("");
    const [descripcao, setdescripcao] = useState("");
    const [valor, setvalor] = useState("");
    const [image, setImage] = useState("");
   


const handleClickSubmit  = async (e) => {
    e.preventDefault();
    const data = {
      "categoria": categoria,
      "titulo" : titulo,
      "descripcao": descripcao,
      "valor": valor,
      "image": image,
      
    }
    
    const response = await fetch("env", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    });

    if (response.ok) {
      console.log("Seu Contato foi salvo com sucesso");
      viewProdutos();
    } else {
      console.log("ERROR", response);
    }
  };
  function viewProdutos() {
    fetch("http://localhost:3001/api/produtos")
      .then((response) => response.json())
      .then((data) => setElementos(data));
  }



 return (
    <div className='container'>
      <h2>Cadastrar novo Produto</h2>
      <form onSubmit={handleClickSubmit} className="registerProducto">
        <div className='resgister-form-group'> 
          <label>Categoria</label>
           <input type="text" name="categoria" value={categoria} onChange={e => setCategoria(e.target.value)} placeholder="Categoria"/> 
        </div>

      <div className='resgister-form-group'> 
          <label>Titulo </label> 
          <input type="text" name="titulo" value={titulo} onChange={e => setTitulo(e.target.value)} /> 
      </div>

      <div className='resgister-form-group' > 
          <label>Descripcao</label>
          <input type="text" name="descripcao" value={descripcao} onChange={e => setdescripcao(e.target.value)} />  
      </div>

      <div className='resgister-form-group' > 
          <label>Valor</label>
          <input type="text" name="valor" value={valor} onChange={e => setvalor(e.target.value)} /> 
      </div>
      
      <div className='resgister-form-group'> 
          <label>image</label>
          <input type="file" name="image" value={image} onChange={e => setImage(e.target.value)} /> 
      </div>

      <div>
      <button type="submit">Cadastrar</button>
       
      </div>


      </form>

      
      
    </div>
 )
}


export default Form;