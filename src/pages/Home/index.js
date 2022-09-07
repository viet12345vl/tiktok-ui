import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import AccountPlayer from '~/components/AccountPlayer';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <AccountPlayer />
            <AccountPlayer />
        </div>
    );
}

export default Home;
