import { NavBar } from '../NavBar';
import { PostCard } from '../PostCard';
import { SideBar } from '../SideBar';
import banner from '../../assets/banniere-portal.gif';

import postFile from '../../data/post.json';
import { Post } from '../../utils/type';
import { SearchBar } from '../SearchBar';
import { useEffect, useState } from 'react';
import { Footer } from '../Footer';
import { Pagination } from '@material-ui/lab';
import { Typography } from '@material-ui/core';

export const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState<Post[]>(postFile);
  useEffect(() => {
    searchValue.length
      ? setData(
          data.filter(post =>
            post.title.toLowerCase().includes(searchValue.toLowerCase())
          )
        )
      : setData(postFile);
  }, [data, searchValue]);
  return (
    <div>
      <NavBar />
      <div className="banner">
        <img src={banner} alt="banner" />
        <div className="search">
          <SearchBar value={setSearchValue} />
        </div>
      </div>
      <div className="post-container">
        <div className="post-card">
          {data &&
            data.map(
              (post: Post, index) =>
                index < page * 3 &&
                index >= (page - 1) * 3 && (
                  <PostCard post={post} key={post.id} />
                )
            )}
        </div>
        <SideBar />
      </div>
      <div className="pagination">
        <Typography className="pagenumber">{`Page : ${page}`}</Typography>
        <Pagination
          count={data.length % 3}
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
