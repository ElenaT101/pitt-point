import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'PittPoint Home',
    Board: () => (
        <div>
            <nav>
                <a href="/home">Home</a> | Schedule <a href="/projects"></a> | Gemini
                <a href="/about"></a> | Advisorss <a href="/contact"></a>
            </nav>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
    },
});
