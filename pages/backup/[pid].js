import useRouter from 'next/router';

function pidindex() {
    const queryRouter = useRouter();
    const { query_id } = queryRouter.query;
    console.log(query_id)
    return (
        <p>Query Parameter: {query_id}</p>
    );
}

export default pidindex;