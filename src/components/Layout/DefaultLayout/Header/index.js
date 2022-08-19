import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import svg from '@assets/svg';
import { FSearch, FAction } from '@components/Elements';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={svg.logo} alt="tiktok" />
                </div>
                <FSearch />
                <FAction />
            </div>
        </header>
    );
}

export default Header;
