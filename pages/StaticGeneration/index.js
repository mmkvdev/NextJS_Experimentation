// page content depends on external data
function Posts() {
    // console.log(data)
    return (
        <div>posts page</div>
    );
}

/*export async function getStaticProps() {
    const res = await fetch('http://localhost:3001/posts')
    const data = await res.json()

    return {
        props: {
            data
        },
    }
}*/
export default Posts;