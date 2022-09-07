import { faCheckCircle, faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '../Button';
import styles from './AccountPlayer.module.scss';

const cx = classNames.bind(styles);

function AccountPlayer() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-768x768.jpg"
                alt=""
            />
            <div className={cx('contain')}>
                <div className={cx('content-title')}>
                    <div className={cx('content-video')}>
                        <div className={cx('user')}>
                            <p className={cx('nickname')}>
                                <strong>Thu_Huyen_94</strong>
                            </p>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                            <p className={cx('name')}>Thu Huyền</p>
                        </div>
                        <div className={cx('content')}>có ai ở đó không</div>
                        <div className={cx('link-music')}>
                            <FontAwesomeIcon className={cx('music-icon')} icon={faMusic} />
                            <p className={cx('song')}>Chỉ Cần Là Mình Cùng Nhau (Here We Go)</p>
                        </div>
                    </div>
                    <div>
                        <Button className={cx('button')} outline small>
                            Follow
                        </Button>
                    </div>
                </div>
                <div className={cx('video-user')}>
                    <div className={cx('video')}>
                        <img
                            className={cx('video-play')}
                            src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-768x768.jpg"
                            alt=""
                        />
                    </div>
                    <div className={cx('bar')}>
                        <div className={cx('hold-bar-icon')}>
                            <div className={cx('hold-icon')}>
                                <FontAwesomeIcon className={cx('heart')} icon={faHeart} />
                            </div>
                            <span className={cx('amount')}>200k</span>
                        </div>
                        <div className={cx('hold-bar-icon')}>
                            <div className={cx('hold-icon')}>
                                <FontAwesomeIcon className={cx('comment')} icon={faCommentDots} />
                            </div>
                            <span className={cx('amount')}>4k</span>
                        </div>
                        <div className={cx('hold-bar-icon')}>
                            <div className={cx('hold-icon')}>
                                <FontAwesomeIcon className={cx('share')} icon={faShare} />
                            </div>
                            <span className={cx('amount')}>2k</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountPlayer;
