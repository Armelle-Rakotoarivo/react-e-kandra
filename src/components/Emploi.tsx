import { useParams } from 'react-router-dom';
import potsFile from '../data/post.json';
import { Post } from '../utils/type';
import { NavBar } from './NavBar';
import { SideBar } from './SideBar';
import banner from '../assets/banniere-portal.gif';

interface param {
  id?: string;
}
export const Emploi = () => {
  const params: param = useParams();
  const { id } = params;

  const data: Post | null = id
    ? potsFile.filter((post: Post) => post.id.toString() === id)[0]
    : null;
  return (
    <>
      {data && (
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
            <div>
              {`(${data.candidates}) ${data.title} en ${data.contractType}`.toUpperCase()}
              <p>{data.description}</p>
            </div>
            <SideBar />
          </div>
        </div>
      )}
    </>
  );
};
