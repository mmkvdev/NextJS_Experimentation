import { useRouter, withRouter } from 'next/router';

function QueryExperimenterPage({ router }) {
    //const router = useRouter();
    //const { id } = router.query
    // console.log(id)
    console.log(router)
    return <h1>{router.query.id}</h1>
}

export default withRouter(QueryExperimenterPage);