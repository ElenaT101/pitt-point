import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'PittPoint Home',
    Board: () => (
        <div>
            <nav>
                <a href="/home">Home</a> | Schedule <a href="/projects"></a> | Gemini
                <a href="/about"></a> | Advisors <a href="/contact"></a>
            </nav>
        </div>
    ),
    isSnippet: true,
});
