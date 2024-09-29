import { createBoard } from '@wixc3/react-board';
import styles from './pitt-point-home.board.module.scss';

export default createBoard({
    name: 'PittPoint Home',
    Board: () => (
        <div>
            <nav className={styles.nav1}>
                <a href="/home">Home</a> | <a href="/projects">Schedule</a> |{' '}
                <a href="/about">Gemini</a> | <a href="/contact">Advisors</a>
            </nav>
        </div>
    ),
    isSnippet: true,
});
