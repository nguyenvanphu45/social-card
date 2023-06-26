import classNames from 'classnames/bind';
import React from 'react'
import EmptyImage from '~/assets/img/empty.svg'
import styles from './Empty.module.scss'

const cx = classNames.bind(styles);

function Empty() {
    return (
        <div className={cx('container')}>
            <img src={EmptyImage} alt="" />
            <h3>No Results Found</h3>
            <p>No content matched your criteria. Try searching for something else.</p>
        </div>
    );
}

export default Empty