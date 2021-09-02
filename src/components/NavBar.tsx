import { AppBar } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { ButtonLink } from './ButtonLink';
import imgPublier from '../assets/publier.png';

export const NavBar = () => {
  const history = useHistory();

  return (
    <AppBar color="default">
      <div className="nav-bar">
        <div className="logo">e-kandra</div>
        <ul className="menu link">
          <li>
            <Link to="/emploi">Emploi</Link>
          </li>
          <li>
            <Link to="/profils">Nos profils</Link>
          </li>
          <li>
            <a href="http://www.formation-madagascar.com/" target="_blank">
              Formation
            </a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="menu">
          <li className="box blue" onClick={() => history.push('/connexion')}>
            <Link to="/connexion">
              <ButtonLink label="Connexion" />
            </Link>
          </li>
          <li className="box green" onClick={() => history.push('/candidats')}>
            <Link to="/candidats">
              <ButtonLink label="Candidat" />
            </Link>
          </li>
          <li className="box red" onClick={() => history.push('/recruteur')}>
            <Link to="/recruteur">
              <ButtonLink label="Recruteur" />
            </Link>
          </li>
        </ul>
        <div style={{ flex: '0.5' }}>
          <p className="publish">{`Publier
                  votre
                  annonce!
              `}</p>
        </div>
        <img
          src={imgPublier}
          alt="publier"
          width="60px"
          height="60px"
          style={{ marginTop: '1%', marginLeft: '6%' }}
        />
      </div>
    </AppBar>
  );
};
