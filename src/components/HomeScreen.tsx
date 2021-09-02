import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Zoom from '@material-ui/core/Zoom';
import { useEffect, useState } from 'react';

export const HomeScreen = () => {
  const history = useHistory();
  const [on, setOn] = useState(false);
  useEffect(() => {
    setOn(true);
  }, []);
  return (
    <Zoom in={on}>
      <div className="background">
        <p>Bienvenue sur e-kandra</p>
        <p>
          Une application créée par RAKOTOARIVO ANDRIATIANA Vatosoa Armelle
          ESIIA5 N°01
        </p>
        <Button
          className="start-button"
          variant="outlined"
          onClick={() => history.push('/emploi')}
        >
          Commencer
        </Button>
      </div>
    </Zoom>
  );
};
