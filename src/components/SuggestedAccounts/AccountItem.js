// import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div>
            <Tippy interactive delay={[800, 0]} placement="bottom" render={() => <h1>content</h1>}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-768x768.jpg"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nick-name')}>
                            <strong>Vietdeptrai</strong>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Nguyễn Văn Việt</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
