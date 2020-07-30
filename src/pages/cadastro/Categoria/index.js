import React from 'react';
import PageDefaut from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return (
    <PageDefaut>
     <h1>Cadastro de Categoria</h1>

<form>

  <label>
    Nome da Categoria:
    <input
      type="text"
    />
  </label>

  <button>
    Cadastrar
  </button>
</form>


<Link to="/">
  Ir para home
</Link>
    </PageDefaut>
  )
}

export default CadastroCategoria;