import classNames from 'classnames';
import {
    Alignment,
    Classes,
    Navbar,
    NavbarGroup,
    NavbarHeading,
    NavbarDivider,
} from '@blueprintjs/core';

import styles from './navigation-bar.module.scss';

export interface NavigationBarProps {
    className?: string;
}

export const NavigationBar = ({ className }: NavigationBarProps) => {
    return (
        <Navbar className={classNames(styles.root, Classes.DARK, className)}>
            <div />
            <button>Home</button>
            <button className={styles.button1}>Schedule</button>
            <NavbarGroup align={Alignment.LEFT}>
                <NavbarHeading>PittPoint</NavbarHeading>
                <NavbarDivider />
            </NavbarGroup>
        </Navbar>
    );
};
