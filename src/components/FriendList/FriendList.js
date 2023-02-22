import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friends}>
      {friends.map(friend => (
          <FriendItem
            id={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
