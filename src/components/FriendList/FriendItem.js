import PropTypes from 'prop-types';

export default function FriendItem({ avatar, name, status }) {
  return (
    <>
      <span className="status">{status ? 'онлайн' : 'офлайн'}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
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


