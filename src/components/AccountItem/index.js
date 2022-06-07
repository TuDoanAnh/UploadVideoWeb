import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="" alt="" />
            <div className="infor">
                <p className={cx('name')}>
                    <span>Charizard</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>charizarddragon</span>
            </div>
        </div>
    );
}

export default AccountItem;
