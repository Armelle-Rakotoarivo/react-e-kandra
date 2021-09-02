import { Card } from '@material-ui/core';
import { FC } from 'react';
import { Candidate } from '../utils/type';
import { Circle } from './Circle';

interface CandidateCardProps {
  candidate: Candidate;
}
export const CandidateCard: FC<CandidateCardProps> = value => {
  const { id, post, degree, experience } = value.candidate;
  return (
    <Card className="card-container">
      <div style={{ flex: '0.1' }}>
        <Circle label={id} />
      </div>
      <div
        style={{
          flex: '1',
          borderLeft: '1px solid #dddd',
          paddingLeft: '10px',
        }}
      >
        <h2 className="postTitle">{`${post.toUpperCase()}`}</h2>
        <h3 className="postOwner">{degree}</h3>
        <h4 className="contractType">{`${experience} expériences`}</h4>
      </div>
    </Card>
  );
};
