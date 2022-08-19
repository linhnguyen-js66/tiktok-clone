import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FSearch.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FPoper } from '@components/Elements';

const cx = classNames.bind(styles);

function FSearch() {
    const [searchResult, setSearchResult] = useState([]);

    return (
        <FPoper visible={searchResult.length > 0}>
            <div className={cx('search')}>
                <input placeholder="Search account and videos" spellCheck={false} />
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </FPoper>
    );
}

export default FSearch;
