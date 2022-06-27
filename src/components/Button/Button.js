import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Button({
    className,
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
    rightIcon,
    leftIcon,
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
        <Comp
            className={cx('container', {
                primary,
                outline,
                small,
                large,
                text,
                disable,
                round,
                [className]: className,
            })}
            {..._props}
        >
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
Button.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    round: PropTypes.bool,
    disable: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    rightIcon: PropTypes.node,
    leftIcon: PropTypes.node,
    onClick: PropTypes.func,
};
export default Button;
