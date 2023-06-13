import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaUpload } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addCard } from '~/redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import styles from './Action.module.scss';

const cx = classNames.bind(styles);

function AddCard() {
    const [avatar, setAvatar] = useState();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState();
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const handleAdd = () => {
        if (name.length === 0 || description.length === 0 || avatar === undefined) {
            setError(true);
        } else {
            dispatch(
                addCard({
                    id: uuidv4(),
                    avatar: avatar ? avatar.preview : undefined,
                    name: name,
                    description: description,
                    image: image ? image.preview : undefined,
                }),
            );
            toast.success('Add card success!!', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            setAvatar();
            setName('');
            setDescription('');
            setImage();
            setError(false);
        }
    };

    const handleAvatar = (e) => {
        const file = e.target.files[0];
        if (file === undefined) {
            setError(true);
        } else {
            file.preview = URL.createObjectURL(file);
            setAvatar(file);
        }
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file === undefined) {
            setError(true);
        } else {
            file.preview = URL.createObjectURL(file);
            setImage(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={cx('add')}>
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <h1>ADD NEW CARD</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={cx('form')}>
                        <div className={cx('upload')}>
                            <label>Avatar</label>
                            <div className={cx('input')}>
                                <input type="file" hidden id="selectedFile1" onChange={handleAvatar} />
                                <label htmlFor="selectedFile1" className={cx('input-label')}>
                                    <FaUpload className={cx('icon')} />
                                    <span>{avatar === undefined ? 'Upload image' : avatar.name}</span>
                                </label>
                                {error && avatar === undefined ? (
                                    <span className={cx('error')}>Avatar can't be empty</span>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                        <div className={cx('upload')}>
                            <label>Name</label>
                            {error && name.length <= 0 ? (
                                <div className={cx('input')}>
                                    <input
                                        type="text"
                                        className={cx('input-error')}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <span className={cx('error')}>Name can't be empty</span>
                                </div>
                            ) : (
                                <div className={cx('input')}>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                            )}
                        </div>
                        <div className={cx('upload')}>
                            <label>Description</label>
                            {error && description.length <= 0 ? (
                                <div className={cx('input')}>
                                    <input
                                        type="text"
                                        value={description}
                                        className={cx('input-error')}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                    <span className={cx('error')}>Description can't be empty</span>
                                </div>
                            ) : (
                                <div className={cx('input')}>
                                    <input
                                        type="text"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={cx('upload')}>
                            <label>Image</label>
                            <div className={cx('input')}>
                                <input type="file" hidden id="selectedFile2" onChange={handleImage} />
                                <label htmlFor="selectedFile2" className={cx('input-label')}>
                                    <FaUpload className={cx('icon')} />
                                    <span>{image === undefined ? 'Upload image' : image.name}</span>
                                </label>
                                {error && image === undefined ? (
                                    <span className={cx('error')}>Image can't be empty</span>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={cx('btn')}>
                        <button className={cx('save')} onClick={handleAdd}>
                            Save
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

export default AddCard;
