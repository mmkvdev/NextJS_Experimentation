function Post({ posts }) {
    // console.log(posts)
    return (
        <div>
            Post Page
        </div>
    );
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3001/posts')
    const posts = await res.json()

    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } }
        ], fallback: false
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3001/posts/${params.id}`)
    const posts = await res.json()

    return {
        props: {
            posts
        }
    }
}

export default Post;