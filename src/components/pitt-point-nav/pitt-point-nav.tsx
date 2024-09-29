import classNames from 'classnames';
import styles from './pitt-point-nav.module.scss';

export interface PittPointNavProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PittPointNav = ({ className }: PittPointNavProps) => {
    return <div className={classNames(styles.root, className)}>PittPointNav</div>;
};
