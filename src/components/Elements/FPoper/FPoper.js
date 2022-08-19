import React from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './FPoper.module.scss';
const cx = classNames.bind(styles);

function FPoper({ children, visible, interactive, props }) {
    return (
        <Tippy
            {...props}
            visible={visible}
            interactive={interactive}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    Ket qua
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default FPoper;
