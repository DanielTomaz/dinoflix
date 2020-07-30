import React from 'react';
import Logo from '../../assets/Logo.png';
import './Menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom'

function Menu() {
  return(
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="DinoFlix Logo" />
      </Link>

      <Button to="/cadastro/video" className="ButtonLink" as={Link}>
        Novo vídeo
      </Button>
    </nav>
  )

}

export default Menu;