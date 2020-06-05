import { withAmp } from 'next/amp';

function Index() {
    return (
        <h1>Index Page</h1>
    )
}

export default withAmp(Index, { hybrid: true });