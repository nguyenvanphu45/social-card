import React from 'react';
import styles from './Card.module.scss';
import classNames from 'classnames/bind';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCard } from '~/redux/actions';

const cx = classNames.bind(styles);

function Card({ id, avatar, name, description, image }) {

    const dispatch = useDispatch();

    const handleRemove = (e) => {
        e.preventDefault()
        dispatch(
            deleteCard({id: id})
        )
    }

    return (
        <div className={cx('card')}>
            <div className={cx('card-header')}>
                <div className="avatar">
                    <div className={cx('image')}>
                        <img src={avatar} />
                    </div>
                    <div className={cx('name')}>
                        <p>{name}</p>
                        <span>04/05/2002</span>
                    </div>
                </div>
                <div className={cx('right')}>
                    <button>
                        <Link to={`/edit/${id}`} state={{ id, avatar, name, description, image }}>
                            <FaPencilAlt className={cx('edit')} />
                        </Link>
                    </button>
                    <button onClick={handleRemove}>
                        <FaTrash className={cx('remove')} />
                    </button>
                </div>
            </div>
            <div className="description">{description}</div>
            <div className="card-img">
                <img src={image} />
            </div>
        </div>
    );
}

export default Card;
