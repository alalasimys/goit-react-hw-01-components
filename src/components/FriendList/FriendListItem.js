import PropTypes from "prop-types";
import defaultAvatar from "../../images/default-avatar.png";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
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
