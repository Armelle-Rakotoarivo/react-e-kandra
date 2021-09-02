export type Post = {
  id: number;
  title: string;
  owner: string;
  contractType: string;
  description: string;
  candidates: number;
};

export type Candidate = {
  id: number;
  post: string;
  degree: string;
  experience: string;
};
