// import Principal from '../../comum/componentes/Principal/Principal';
// import './ListaProdutos.css';

// const ListaProdutos = () => {
//   const produtos = [
//     {
//       nome: 'Smartphone Samsung',
//       preco: 2999,
//       cores: ['#29d8d5', '#252a34', '#fc3766'],
//     },
//     {
//       nome: 'Notebook Acer',
//       preco: 4999,
//       cores: ['#ffd045', '#d4394b', '#f37c59'],
//     },
//     {
//       nome: 'Tablet Asus',
//       preco: 1499,
//       cores: ['#365069', '#47c1c8', '#f95786'],
//     },
//   ];

//   return (
//     <Principal titulo="Lista de Produtos">
//       {produtos.map((itemProduto, index) => {
//         return <div key={index}>{itemProduto.nome}</div>;
//       })}
//     </Principal>
//   );
// };

// export default ListaProdutos;


import { useNavigate} from "react-router-dom";

export const Item = () => {
    let navigate = useNavigate();
    return (
        <>
          <button onClick={() => navigate(-1)}>Back</button> 
        </>
    );
};



import React, { useState } from "react";

const ListaProdutos = ({ value, label, placeholder, type, onChange }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <div className="form-group">
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        className="form-control"
        placeholder={placeholder}
        onChange={handleChange}
      />
      
      <input
        type={type}
        value={value}
        className="form-control"
        placeholder={placeholder}
        onChange={handleChange}
      />

    <div>
      <button type="button"> Click Me </button>
    </div>

    </div>
  );
};

export default ListaProdutos;