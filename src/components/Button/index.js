import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    round = false,
    disable = false,
    small = false,
    large = false,
    children,
    onClick,
    ...passProp
}) {
    let Comp = 'button';
    const _props = { onClick, ...passProp };

    if (disable) {
        Object.keys(_props).forEach((key) => {
            if (key.startsWith('on') && typeof _props[key] === 'function') {
                delete _props[key];
            }
        });
    }
    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={cx('container', { primary, outline, small, large, text, disable, round })} {..._props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
