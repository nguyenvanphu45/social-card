/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { commentText } from '~/redux/actions';
import { cardsRemainingSelector } from '~/redux/selectors';
import HeartIcon from '~/assets/img/heart.svg';
import MessageIcon from '~/assets/img/message.svg';
import useLocalStorage from '~/components/LocalStorage';
import moment from 'moment/moment';

const cx = classNames.bind(styles);

function Detail() {
    const location = useLocation();
    const params = useParams();
    const cardLocation = location.state.cardList;
    // Find id to get comments
    const cardLists = useSelector(cardsRemainingSelector);
    const findId = cardLists.find(({ id }) => id == params.id);

    const [countHeart, setCountHeart] = useLocalStorage(`countHeart_${cardLocation.id}`, 1);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useLocalStorage(`comments_${cardLocation.id}`, findId.comments);
    const [error, setError] = useState(false);

    // Sort comments newsest
    const sortedComments = comments.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

    const dispatch = useDispatch();

    const handleCountHeart = () => {
        setCountHeart(countHeart + 1);
    };

    const handlePost = () => {
        if (comment === '') {
            setError(true);
        } else {
            dispatch(
                commentText(
                    {
                        id: cardLocation.id,
                        date: new Date(),
                    },
                    comment,
                ),
            );

            setError(false);
            setComments([...comments, { date: new Date(), comment }]);
            setComment('');
        }
    };

    const dateFormat = moment(cardLocation.date).format('DD/MM/YYYY');

    return (
        <div className={cx('container')}>
            <h1 className={cx('header')}>SOCIAL CARD DETAIL</h1>
            <div className={cx('body')}>
                <div className="avatar">
                    <div className={cx('image')}>
                        <img src={cardLocation.avatar} alt="" />
                    </div>
                    <div className={cx('name')}>
                        <p>{cardLocation.name}</p>
                        <span>{dateFormat}</span>
                    </div>
                </div>
                <div className="description">{cardLocation.description}</div>
                <div className={cx('body-image')}>
                    <img src={cardLocation.image} alt="" />
                </div>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('interact')}>
                    <div className={cx('icon')} onClick={handleCountHeart}>
                        <img src={HeartIcon} alt="" />
                        <span>{countHeart}</span>
                    </div>
                    <div className={cx('icon')}>
                        <img src={MessageIcon} alt="" />
                        <span>{comments.length}</span>
                    </div>
                </div>
                <div className={cx('comments')}>
                    {sortedComments.map((sortedComment, index) => {
                        const commentDateFormat = moment(sortedComment.date).format('DD/MM/YYYY');
                        return (
                            <div className={cx('comment')} key={index}>
                                <p>{commentDateFormat} (day create)</p>
                                <p>{sortedComment.comment}</p>
                            </div>
                        );
                    })}
                </div>
                <div className={cx('post')}>
                    <h3>Post a new coment</h3>
                    <textarea
                        className={error ? cx('error') : ''}
                        rows="5"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add comment..."
                    ></textarea>
                    <button onClick={handlePost}>Post</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;
