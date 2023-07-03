import React from 'react';
import classNames from 'classnames/bind';

import { useDispatch } from 'react-redux';
import { deleteCard } from '~/redux/actions';
import styles from './DeleteCard.module.scss';
import Trash from '~/assets/img/trash.svg';

const cx = classNames.bind(styles);

function DeleteCard({ id, onClose }) {
    const dispatch = useDispatch();

    const handleRemove = (e) => {
        e.preventDefault();
        dispatch(deleteCard({ id: id }));
        onClose()
    };

    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <h3>Your about to delete a item</h3>
                <img src={Trash} alt="" />
                <p>This will delete your item form list Are you sure?</p>
            </div>
            <div className={cx('btn')}>
                <button className={cx('save')} onClick={handleRemove}>
                    Delete
                </button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}

export default DeleteCard;
