function ServerSideRendeing({ data }) {
    console.log({ data })
    return (
        <p>ServerSideRendeing</p>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3001/posts');
    const data = await res.json()
    return { props: { data } }
}

export default ServerSideRendeing;