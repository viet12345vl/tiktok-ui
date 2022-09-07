import className from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icon';

import styles from './Sidebar.module.scss';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = className.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />{' '}
                <SuggestedAccounts label="Suggested Account" />
                <SuggestedAccounts label="Following Account" />
            </Menu>
        </aside>
    );
}

export default Sidebar;
