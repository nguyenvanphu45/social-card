import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { cardsRemainingSelector } from '~/redux/selectors';
import { searchName, undoDelete } from '~/redux/actions';
import Card from '~/components/Card';
import EmptyCard from '~/components/EmptyCard';
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

    const cards = useSelector(cardsRemainingSelector);
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
                    <ActionCard title="Add new card" data={''} onClose={closeModal} />
                </Modal>
                <input type="text" value={search} onChange={handleSearchName} placeholder="Search name ..." />
                <AiOutlineSearch className={cx('icon')} />
            </div>

            {cards.length === 0 ? (
                <EmptyCard />
            ) : (
                <div className={cx('cards')}>
                    {cards.map((card) => (
                        <Card card={card} key={card.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
