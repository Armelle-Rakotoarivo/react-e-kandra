import { Footer } from './Footer';
import { NavBar } from './NavBar';
import { SideBar } from './SideBar';
import banner from '../assets/banniere-portal.gif';

export const Connexion = () => {
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: '10%', textAlign: 'center' }}>
        <img src={banner} alt="" />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '2% 5%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
          }}
        >
          <div style={{ color: 'red' }}>INSCRIPTION</div>
          <hr style={{ color: 'red', border: '1px solid', width: '100%' }} />
          <form>
            <div className="form-group">
              <label htmlFor="nom">Nom d'utilisateur</label>
              <input
                type="text"
                className="form-control"
                id="nom"
                placeholder="Enter votre nom"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter votre email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mdp">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="mdp"
                placeholder="Enter votre mot de passe"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <button
                type="submit"
                className="btn"
                style={{
                  background: '#f7007f',
                  color: 'white',
                  marginRight: '5%',
                }}
              >
                S'inscrire
              </button>
              <button type="button" className="btn btn-success">
                Annuler
              </button>
            </div>
          </form>
        </div>
        <SideBar />
      </div>
      <Footer />
    </div>
  );
};
