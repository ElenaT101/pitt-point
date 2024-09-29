import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'PittPoint Home',
    Board: () => (
        <div>
            <nav>
                <a href="/home">Home</a> | <a href="/projects">Schedule</a> |{' '}
                <a href="/about">Gemini</a> | <a href="/contact">Advisors</a>
            </nav>
        </div>
    ),
    isSnippet: true,
});
