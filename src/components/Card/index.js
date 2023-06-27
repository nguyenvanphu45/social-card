import React, { useState } from 'react';
import styles from './Card.module.scss';
import classNames from 'classnames/bind';
import Modal from 'react-modal';
import Pencil from '~/assets/img/pencil.svg';
import Trash from '~/assets/img/trash.svg';
import Delete from '../Delete';
import ActionCard from '../ActionCard';
import { Link } from 'react-router-dom';
import moment from 'moment';

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

function Card({ cardList }) {
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);

    const closeModal = () => {
        setOpenModalEdit(false);
        setOpenModalDelete(false);
    };

    const dateFormat = moment(cardList.date).format('DD/MM/YYYY');

    return (
        <div className={cx('card')}>
            <div className={cx('card-header')}>
                <div className="avatar">
                    <div className={cx('image')}>
                        <img src={cardList.avatar} alt="" />
                    </div>
                    <div className={cx('name')}>
                        <div className={cx('name-top')}>
                            <p>{cardList.name}</p>
                            <div className={cx('right')}>
                                <button onClick={() => setOpenModalEdit(true)}>
                                    <img src={Pencil} className={cx('edit')} alt="" />
                                </button>
                                <Modal
                                    isOpen={openModalEdit}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    ariaHideApp={false}
                                >
                                    <ActionCard title="Edit card" data={cardList} onClose={closeModal} />
                                </Modal>
                                <button onClick={() => setOpenModalDelete(true)}>
                                    <img src={Trash} className={cx('remove')} alt="" />
                                </button>
                                <Modal
                                    isOpen={openModalDelete}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    ariaHideApp={false}
                                >
                                    <Delete id={cardList.id} onClose={closeModal} />
                                </Modal>
                            </div>
                        </div>
                        <span>{dateFormat}</span>
                    </div>
                </div>
            </div>
            <div className="description">{cardList.description}</div>
            <Link to={`/detail/${cardList.id}`} state={{ cardList }} key={cardList.id}>
                <div className="card-img">
                    <img src={cardList.image} alt="" />
                </div>
            </Link>
        </div>
    );
}

export default Card;
