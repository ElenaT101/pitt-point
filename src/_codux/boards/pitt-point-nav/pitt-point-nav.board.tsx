import { createBoard } from '@wixc3/react-board';
import { PittPointNav } from '../../../components/pitt-point-nav/pitt-point-nav';

export default createBoard({
    name: 'PittPointNav',
    Board: () => <PittPointNav />,
    isSnippet: true,
});
