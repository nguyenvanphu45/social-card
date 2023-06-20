import React from 'react';
import styles from './Card.module.scss';
import classNames from 'classnames/bind';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCard } from '~/redux/actions';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Card({ cardList }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRemove = (e) => {
        e.preventDefault();
        dispatch(deleteCard({ id: cardList.id }));
    };

    const handleEdit = (e) => {
        e.preventDefault();
        navigate(`/edit/${cardList.id}`, { state: { cardList } });
    };

    return (
        <div className={cx('card')}>
            <div className={cx('card-header')}>
                <div className="avatar">
                    <div className={cx('image')}>
                        <img src={cardList.avatar} alt="" />
                    </div>
                    <div className={cx('name')}>
                        <p>{cardList.name}</p>
                        <span>04/05/2002</span>
                    </div>
                </div>
                <div className={cx('right')}>
                    <button onClick={handleEdit}>
                        {/* <Link to={`/edit/${id}`} state={{ id, avatar, name, description, image }}> */}
                        <FaPencilAlt className={cx('edit')} />
                        {/* </Link> */}
                    </button>
                    <button onClick={handleRemove}>
                        <FaTrash className={cx('remove')} />
                    </button>
                </div>
            </div>
            <div className="description">{cardList.description}</div>
            <div className="card-img">
                <img src={cardList.image} alt="" />
            </div>
        </div>
    );
}

export default Card;
