import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaUpload } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addCard, updateCard, resetCard } from '~/redux/actions';
import { v4 as uuidv4 } from 'uuid';
import DefaultImage from '~/assets/img/defaultImage.png';

import styles from './Action.module.scss';

const cx = classNames.bind(styles);

function ActionCard({ title, data, onClose }) {
    const [avatar, setAvatar] = useState(data === '' ? undefined : data.avatar);
    const [name, setName] = useState(data === '' ? '' : data.name);
    const [description, setDescription] = useState(data === '' ? '' : data.description);
    const [image, setImage] = useState(data === '' ? undefined : data.image);
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const handleAvatar = (e) => {
        const file = e.target.files[0];
        if (file === undefined) {
            setError(true);
        } else {
            file.preview = URL.createObjectURL(file);
            setAvatar(file.preview);
        }
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file === undefined) {
            setError(true);
        } else {
            file.preview = URL.createObjectURL(file);
            setImage(file.preview);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length === 0 || description.length === 0 || avatar === undefined) {
            setError(true);
        } else {
            data === ''
                ? dispatch(
                      addCard({
                          id: uuidv4(),
                          date: new Date(),
                          avatar: avatar,
                          name: name,
                          description: description,
                          image: image ? image : `${DefaultImage}`,
                          comments: [''],
                      }),
                  )
                : dispatch(
                      updateCard({
                          id: data.id,
                          date: new Date(),
                          avatar: avatar,
                          name: name,
                          description: description,
                          image: image,
                          comments: data.comments,
                      }),
                  );
            setAvatar();
            setName('');
            setDescription('');
            setImage();
            setError(false);
            onClose();
        }
    };

    const handleReset = (e) => {
        e.preventDefault();
        dispatch(resetCard({ id: data.id }));
        onClose();
    };

    return (
        <div className={cx('container')}>
            <h1 className={cx('title')}>{title}</h1>
            <form onSubmit={handleSubmit}>
                <div className={cx('form')}>
                    <div className={cx('upload')}>
                        <label className={cx('input-label', error && avatar === undefined ? 'error' : '')}>
                            Avatar <span>*</span>
                        </label>
                        <div className={cx('input')}>
                            <input type="file" hidden id="selectedFile1" onChange={handleAvatar} />
                            <label
                                htmlFor="selectedFile1"
                                className={cx('input-label', error && avatar === undefined && 'error')}
                            >
                                <FaUpload className={cx('icon')} />
                                <p>{avatar === undefined ? 'Upload image' : avatar}</p>
                            </label>
                        </div>
                    </div>
                    <div className={cx('upload')}>
                        <label className={error && name.length <= 0 ? cx('error') : ''}>
                            Name <span>*</span>
                        </label>
                        <div className={cx('input')}>
                            <input
                                type="text"
                                className={error && name.length <= 0 ? cx('input-error') : ''}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <span className={cx('error')}></span>
                        </div>
                    </div>
                    <div className={cx('upload')}>
                        <label className={error && description.length <= 0 ? cx('error') : ''}>
                            Description <span>*</span>
                        </label>
                        <div className={cx('input')}>
                            <input
                                type="text"
                                value={description}
                                className={error && description.length <= 0 ? cx('input-error') : ''}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <span className={cx('error')}></span>
                        </div>
                    </div>
                    <div className={cx('upload')}>
                        <label>Image</label>
                        <div className={cx('input')}>
                            <input type="file" hidden id="selectedFile2" onChange={handleImage} />
                            <label htmlFor="selectedFile2" className={cx('input-label')}>
                                <FaUpload className={cx('icon')} />
                                <p>{image === undefined ? 'Upload image' : image}</p>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={cx('btn')}>
                    {data && (
                        <button className={cx('save', 'reset')} onClick={handleReset}>
                            Reset
                        </button>
                    )}
                    <button className={cx('save')}>{data ? 'Update' : 'Save'}</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default ActionCard;
