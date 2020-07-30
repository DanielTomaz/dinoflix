import React from 'react';
import PageDefaut from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
  return (
    <PageDefaut>
      <h1>Página de Cadastro de Vídeo</h1>

      <Link to="/cadastro/categoria">
        <h1>Cadastrar Categoria</h1>
      </Link>
    </PageDefaut>
  )
}

export default CadastroVideo;