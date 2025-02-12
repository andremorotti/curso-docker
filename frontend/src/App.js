import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('/api01/cards')
      .then(res => setCards(res.data.cartas))  // A resposta contém o array em 'cartas'
      .catch(err => console.error("Erro ao buscar cartas:", err));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cor</th>
            <th>Tipo</th>
            <th>Raridade</th>
            <th>Preço</th>
            <th>Estoque</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <tr key={card.id}>
              <td>{card.id}</td>
              <td>{card.nome}</td>
              <td>{card.cor}</td>
              <td>{card.tipo}</td>
              <td>{card.raridade}</td>
              <td>R${card.preco.toFixed(2)}</td> {/* Formatação para 2 casas decimais */}
              <td>{card.estoque}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;