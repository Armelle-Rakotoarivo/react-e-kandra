import { NavBar } from './NavBar';
import banner from '../assets/banniere-portal.gif';
import { SideBar } from './SideBar';
import { Footer } from './Footer';
import { CandidateCard } from './CandidateCard';
import candidateList from '../data/candidates.json';
import { Candidate } from '../utils/type';
import { useState } from 'react';
import { Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

export const Candidat = () => {
  const [page, setPage] = useState<number>(1);
  const [candidates, setCandidates] = useState<Candidate[]>(candidateList);

  return (
    <div>
      <NavBar />
      <div style={{ marginTop: '10%', textAlign: 'center' }}>
        <img src={banner} alt="" />
      </div>
      <div className="post-container">
        <div className="post-card" style={{ width: '90%' }}>
          {candidates &&
            candidates.map(
              (candidate: Candidate, index) =>
                index < page * 5 &&
                index >= (page - 1) * 5 && (
                  <CandidateCard candidate={candidate} key={candidate.id} />
                )
            )}
        </div>
        <SideBar />
      </div>
      <div className="pagination">
        <Typography className="pagenumber">{`Page : ${page}`}</Typography>
        <Pagination
          count={candidates.length % 4}
          page={page}
          onChange={(e, v) => {
            setPage(v);
          }}
        />
      </div>
      <Footer />
    </div>
  );
};
