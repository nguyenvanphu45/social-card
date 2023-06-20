import React, { useEffect, useState } from 'react';
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';
import { AiFillHeart, AiOutlineComment } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { commentText } from '~/redux/actions';

const cx = classNames.bind(styles);

function Detail({ props }) {
    const [countHeart, setCountHeart] = useState(1);
    const [comment, setComment] = useState('');
    const cardComments = props.comments;
    const sortedComments = cardComments.sort((a, b) => b.date - a.date);

    const dispatch = useDispatch();

    const handleCountHeart = () => {
        setCountHeart(countHeart + 1);
    };

    const handlePost = () => {
        if (comment === '') return;
        dispatch(
            commentText(
                {
                    id: props.id,
                    date: Date.now(),
                },
                comment,
            ),
        );

        setComment('');
    };

    return (
        <div className={cx('container')}>
            <h1 className={cx('header')}>SOCIAL CARD DETAIL</h1>
            <div className={cx('body')}>
                <div className="avatar">
                    <div className={cx('image')}>
                        <img src={props.avatar} alt="" />
                    </div>
                    <div className={cx('name')}>
                        <p>{props.name}</p>
                        <span>04/05/2002</span>
                    </div>
                </div>
                <div className="description">{props.description}</div>
                <div className={cx('body-image')}>
                    <img src={props.image} alt="" />
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
                    {sortedComments.map((sortedComment) => {
                        return (
                            <div className={cx('comment')} key={sortedComment.comment}>
                                <p>24/12/2022</p>
                                <p>{sortedComment.comment}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Detail;
