import { Button } from '@material-ui/core';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import SubdirectoryArrowRightSharpIcon from '@material-ui/icons/SubdirectoryArrowRightSharp';
import WorkOutlineSharpIcon from '@material-ui/icons/WorkOutlineSharp';

export const ButtonLink = ({ label }: { label: string }) => {
  return (
    <Button style={{ color: 'white' }}>
      <div className="button-link">
        {label === 'Connexion' ? (
          <SubdirectoryArrowRightSharpIcon className="icon" />
        ) : label === 'Candidat' ? (
          <AccountCircleSharpIcon className="icon" />
        ) : label === 'Recruteur' ? (
          <WorkOutlineSharpIcon className="icon" />
        ) : null}
        {label}
      </div>
    </Button>
  );
};
