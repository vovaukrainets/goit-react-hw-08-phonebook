import { setFilter } from '../redux/filter/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../redux/filter/selectors';
import { TextField } from '@mui/material';

export const Filter = () => {
  const { filter } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleSetFilter = e => {
    const value = e.target.value;
    dispatch(setFilter(value));
  };

  return (
    <TextField
      label="Find contacts by name"
      variant="outlined"
      type="text"
      name="filter"
      value={filter}
      onChange={handleSetFilter}
    />
  );
};
