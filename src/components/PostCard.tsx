import { Card } from '@material-ui/core';
import { FC } from 'react';
import { Post } from '../utils/type';
import { useHistory } from 'react-router-dom';
import { Star } from './Star';

interface PostProps {
  post: Post;
}

export const PostCard: FC<PostProps> = value => {
  const { id, title, owner, contractType, description } = value.post;
  const history = useHistory();
  return (
    <Card
      className="card-container"
      onClick={() => {
        history.push(`/emploi/${id}`);
      }}
    >
      <div style={{ flex: '0.1' }}>
        <Star />
      </div>
      <div
        style={{
          flex: '1',
          borderLeft: '1px solid #dddd',
          paddingLeft: '10px',
        }}
      >
        <h2 className="postTitle">{`${title.toUpperCase()}`}</h2>
        <h3 className="postOwner">{owner}</h3>
        <h4 className="contractType">Contrat {contractType}</h4>
        <p>{description}</p>
      </div>
    </Card>
  );
};
