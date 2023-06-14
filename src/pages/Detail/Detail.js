import React, { useState } from 'react';
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';
import { AiFillHeart, AiOutlineComment } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { commentText } from '~/redux/actions';

const cx = classNames.bind(styles);

function Detail() {
    const [countHeart, setCountHeart] = useState(1);
    const [comment, setComment] = useState('');
    const location = useLocation();
    const cardLocation = location.state.cardList;

    const dispatch = useDispatch();

    const handleCountHeart = () => {
        setCountHeart(countHeart + 1);
    };

    const handlePost = () => {
        if (comment === '') return;
        dispatch(
            commentText(
                {
                    id: cardLocation.id,
                },
                comment,
            ),
        );

        setComment('');
    };

    const cardComments = cardLocation.comments;
    console.log(cardComments)

    return (
        <div className={cx('container')}>
            <h1 className={cx('header')}>SOCIAL CARD DETAIL</h1>
            <div className={cx('body')}>
                <div className="avatar">
                    <div className={cx('image')}>
                        <img src={cardLocation.avatar} />
                    </div>
                    <div className={cx('name')}>
                        <p>{cardLocation.name}</p>
                        <span>04/05/2002</span>
                    </div>
                </div>
                <div className="description">{cardLocation.description}</div>
                <div className={cx('body-image')}>
                    <img src={cardLocation.image} />
                </div>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('interact')}>
                    <div className={cx('icon')} onClick={handleCountHeart}>
                        <AiFillHeart />
                        <span>{countHeart}</span>
                    </div>
                    <div className={cx('icon')}>
                        <AiOutlineComment />
                        <span>{cardComments.length}</span>
                    </div>
                </div>
                <div className={cx('comments')}>
                    <div className={cx('post')}>
                        <textarea rows="5" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                        <button onClick={handlePost}>Post</button>
                    </div>
                    {cardComments.map((cardComment) => {
                        return (
                            <div className={cx('comment')} key={cardComment}>
                                <p>22/04/2022</p>
                                <p>{cardComment}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Detail;
