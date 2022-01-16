import { useDispatch } from 'react-redux';
import { changeFilter } from '../redux/actions';

export default function Filter() {
  const dispatch = useDispatch();
  const setFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={setFilter} />
    </label>
  );
}
