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
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.div1}>
                PittPoint
                <div className={styles.div2} />
            </div>
            <nav>
                <a href="/home" className={styles.a3}>
                    Home
                </a>{' '}
                |{' '}
                <a href="/projects" className={styles.a2}>
                    Schedule
                </a>{' '}
                |
                <a href="/about" className={styles.a1}>
                    Gemeni
                </a>
                |
                <a href="/contact" className={styles.a4}>
                    Advisors
                </a>
            </nav>
        </div>
    );
};
