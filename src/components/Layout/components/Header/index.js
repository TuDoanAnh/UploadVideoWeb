import classNames from 'classnames/bind';
import {
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMessage,
    faPersonRifle,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import image from '~/assets/image';
import Typpi from '@tippyjs/react';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { faGetPocket } from '@fortawesome/free-brands-svg-icons';
import { UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'KeyBoard Shortcuts',
    },
];
const currentUser = true;
function Header() {
    const handleMenuChange = () => {};

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faPersonRifle} />,
            title: 'View Profile',
            to: '/@charizard',
        },
        {
            icon: <FontAwesomeIcon icon={faGetPocket} />,
            title: 'Bruh Bruh',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="pokemon" />
                </div>
                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Typpi content="Upload Video" placement="bottom" delay={(0, 200)}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Typpi>
                            <Typpi content="Message" placement="bottom" delay={(0, 200)}>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Typpi>
                        </>
                    ) : (
                        <>
                            <Button text>Log in</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image src={'aaa'} className={cx('user-avatar')} alt="Charizard" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
