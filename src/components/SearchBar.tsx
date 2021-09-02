import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';

export const SearchBar = ({ value }: { value: (v: string) => void }) => {
  return (
    <>
      <Fab style={{ marginRight: '5px' }} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          onChange={e => {
            value(e.target.value);
          }}
        />
      </form>
    </>
  );
};
