import useRouter from 'next/router';
import linkRouter from './linkRouter';

function queryexperimenter() {
    const queryRouter = useRouter();
    const { query_id } = queryRouter.query;
    return (
        <p>Query Parameter: {query_id}</p>
    );
}

export default queryexperimenter;