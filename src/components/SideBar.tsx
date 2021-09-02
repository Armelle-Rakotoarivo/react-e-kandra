import { Card } from '@material-ui/core';
import { PubBanner } from './PubBanner';
export const SideBar = () => {
  return (
    <Card className="sidebar">
      <PubBanner
        color="red"
        title="Recruteurs"
        content={[
          "Diffusion des offres d'emploi",
          'Plateforme unique pour la gestion des candidatures',
          'Consultation des profils des candidats',
        ]}
      />
      <PubBanner
        color="blue"
        title="Formateurs"
        content={[
          'Diffusion de vos offres de formation dans notre annuaire professionnelle',
          'Organisation des séance de formation avec les entreprises partenaires',
        ]}
      />
      <PubBanner
        color="#66e031"
        title="Candidats"
        content={[
          "Consultation parmi une large offre d'emploi",
          'Postuler en ligne avec votre CV personnel',
        ]}
      />
      <div
        style={{
          backgroundColor: '#58f7eb',
          padding: '10px',
        }}
      >
        <span className="postTitle">RAPIDE, SIMPLE ET EFFICACE</span>
        <p>
          Restez en contact avec les professionnels pour développer vos
          activités ou vos projets.
        </p>
      </div>
    </Card>
  );
};
