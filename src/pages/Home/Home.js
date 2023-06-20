import React, { useState } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { AiOutlineSearch } from 'react-icons/ai';
import Card from '~/components/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cardsRemainingSelector } from '~/redux/selectors';
import { searchName, undoDelete } from '~/redux/actions';

const cx = classNames.bind(styles);

function Home() {
    const [search, setSearch] = useState('');

    const cardLists = useSelector(cardsRemainingSelector);
    const dispatch = useDispatch();

    const handleSearchName = (e) => {
        setSearch(e.target.value);
        dispatch(searchName(e.target.value));
    };

    const handleUndoDelete = () => {
        dispatch(undoDelete());
    };

    return (
        <div className={cx('container')}>
            <h1 className={cx('header')}>LIST SOCIAL CARD</h1>
            <div className={cx('button')}>
                <button className={cx('revert')} onClick={handleUndoDelete}>
                    Revert
                </button>
                <Link to="/add">
                    <button className={cx('add')}>Add new</button>
                </Link>
                <input type="text" value={search} onChange={handleSearchName} placeholder="Search name ..." />
                <AiOutlineSearch className={cx('icon')} />
            </div>
            <div className={cx('cards')}>
                {cardLists.map((cardList) => (
                    <Link to={`/detail/${cardList.id}`} key={cardList.id}>
                        <Card cardList={cardList} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;
