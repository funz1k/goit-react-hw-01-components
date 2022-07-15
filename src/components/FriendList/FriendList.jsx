import PropTypes from "prop-types";
import css from "./FriendList.module.css"

const FriendList = ({ friendList }) => {
    return (
        <ul className={css.friend_list}>
            {
                friendList.map(({ avatar, name, isOnline, id }) => (
                    <li className={css.item} key={id}>
                        <span className={isOnline ? css.true : css.false}></span>
                        <img className={css.avatar} src={avatar} alt={name} width="48" />
                        <p className={css.name}>{name}</p>
                    </li>
                ))}
        </ul>
    )
}

FriendList.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
}

export default FriendList