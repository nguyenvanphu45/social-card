import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaUpload } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { updateCard } from '~/redux/actions';
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import styles from './Action.module.scss';

const cx = classNames.bind(styles);

function EditCard() {
    const [avatar, setAvatar] = useState();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState();
    const [error, setError] = useState(false);

    const location = useLocation();
    const cardLocation = location.state;

    const dispatch = useDispatch();

    const handleAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImage(file);
    };

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(
            updateCard({
                id: cardLocation.id,
                avatar: avatar ? avatar.preview : cardLocation.avatar,
                name: name ? name : cardLocation.name,
                description: description ? description : cardLocation.description,
                image: image ? image.preview : cardLocation.image,
            }),
        );
        toast.success('Update success!!', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

    console.log(avatar)

    return (
        <div className={cx('add')}>
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <h1>EDIT CARD</h1>
                </div>
                <form onSubmit={handleEdit}>
                    <div className={cx('form')}>
                        <div className={cx('upload')}>
                            <label>Avatar</label>
                            <div className={cx('input')}>
                                <input type="file" hidden id="selectedFile1" onChange={handleAvatar} />
                                <label htmlFor="selectedFile1" className={cx('input-label')}>
                                    <FaUpload className={cx('icon')} />
                                    <span>{avatar ? avatar.name : cardLocation.avatar}</span>
                                </label>
                            </div>
                        </div>
                        <div className={cx('upload')}>
                            <label>Name</label>
                            <div className={cx('input')}>
                                <input
                                    type="text"
                                    defaultValue={cardLocation.name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={cx('upload')}>
                            <label>Description</label>
                            <div className={cx('input')}>
                                <input
                                    type="text"
                                    defaultValue={cardLocation.description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={cx('upload')}>
                            <label>Image</label>
                            <div className={cx('input')}>
                                <input type="file" hidden id="selectedFile2" onChange={handleImage} />
                                <label htmlFor="selectedFile2" className={cx('input-label')}>
                                    <FaUpload className={cx('icon')} />
                                    <span>{image ? image.name : cardLocation.image}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={cx('btn')}>
                        <button className={cx('save')}>
                            Update
                            <ToastContainer />
                        </button>
                        <Link to="/">
                            <button>Cancel</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditCard;
