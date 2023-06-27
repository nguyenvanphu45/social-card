import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { cardsRemainingSelector } from '~/redux/selectors';
import { searchName, undoDelete } from '~/redux/actions';
import Card from '~/components/Card';
import Empty from '~/components/Empty';
import ActionCard from '~/components/ActionCard';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: 0,
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '10px',
    },
    overlay: {
        background: '#8F8E8E91',
    },
};

function Home() {
    const [search, setSearch] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);

    const cardLists = useSelector(cardsRemainingSelector);
    const dispatch = useDispatch();

    const handleSearchName = (e) => {
        setSearch(e.target.value);
        dispatch(searchName(e.target.value));
    };

    const handleUndoDelete = () => {
        dispatch(undoDelete());
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className={cx('container')}>
            <h1 className={cx('header')}>LIST SOCIAL CARD</h1>
            <div className={cx('button')}>
                <button className={cx('revert')} onClick={handleUndoDelete}>
                    Revert
                </button>
                <button className={cx('add')} onClick={() => setIsOpen(true)}>
                    Add new
                </button>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} ariaHideApp={false}>
                    <ActionCard title="ADD NEW CARD" data={''} onClose={closeModal} />
                </Modal>
                <input type="text" value={search} onChange={handleSearchName} placeholder="Search name ..." />
                <AiOutlineSearch className={cx('icon')} />
            </div>

            {cardLists.length === 0 ? (
                <Empty />
            ) : (
                <div className={cx('cards')}>
                    {cardLists.map((cardList) => (
                        <Card cardList={cardList} key={cardList.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
