import PropTypes from 'prop-types';
import defaultAvatar from '../../images/default-avatar.png';
import styles from './FreindList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      {isOnline ? (
        <span
          className={styles.status}
          style={{ backgroundColor: 'teal' }}
        ></span>
      ) : (
        <span
          className={styles.status}
          style={{ backgroundColor: 'tomato' }}
        ></span>
      )}

      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultAvatar,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
