import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = className.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://gamek.mediacdn.vn/thumb_w/640/2019/6/9/photo-1-15600670510121112081840.jpg"
                alt="hoa"
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
