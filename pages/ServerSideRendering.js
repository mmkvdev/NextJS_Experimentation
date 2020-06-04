function ServerSideRendeing({ data }) {
    console.log({ data })
    return (
        <p>{data}</p>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3001/posts');
    const data = await res.json()
    console.log(data)
    return { props: { data } }
}

export default ServerSideRendeing;