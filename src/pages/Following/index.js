import classNames from 'classnames/bind';
import styles from './Following.module.scss';

import AccountPlayer from '~/components/AccountPlayer';

const cx = classNames.bind(styles);

function Following() {
    return (
        <div className={cx('wrapper')}>
            <AccountPlayer />
            <AccountPlayer />
        </div>
    );
}

export default Following;
