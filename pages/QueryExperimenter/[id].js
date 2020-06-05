// import getContent from "headless-cms";

function QueryExperimenterPage({ post }) {
    return <h1>{post.title}</h1>
}

QueryExperimenterPage.getInitialProps = async () => {
    // const post = await getContent({ id: 1 })
    return {
        id: 1
    }
}

export default QueryExperimenterPage