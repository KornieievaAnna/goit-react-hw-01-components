import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendItem({ id, avatar, name, status }) {
  return (
    <li key={id} className={css.item}>
      <span className={status ? css.online : css.offline}></span>
      <img
        className={css.avatar}
        src={avatar}
        alt={name}
        width="48"
        height="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

// const Friend = ({ avatar, name, isOnline }) =>{
//     return (
//         <>
//             <span className="status">{isOnline ? 'онлайн' : 'офлайн'}</span>
//             <img
//               className="avatar"
//               src={avatar}
//               alt={name}
//               width="48"
//             />
//             <p className="name">{name}</p>
//           </>
//     )
// }
// export default Friend;
