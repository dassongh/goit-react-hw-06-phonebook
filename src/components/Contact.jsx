import { useDispatch } from 'react-redux';
import { removeContact } from '../redux/actions';

export default function Contact({ name, number }) {
  const dispatch = useDispatch();
  const deleteContact = e => dispatch(removeContact(e.currentTarget.parentNode.childNodes[0].data));

  return (
    <li className="item">
      {name}: {number}
      <button className="rmv-btn" type="button" onClick={deleteContact}>
        remove
      </button>
    </li>
  );
}
