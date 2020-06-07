import Router, { useRouter } from 'next/router';

function UseRouterExperimentation({ children, href }) {
    // const router = useRouter()
    return (<div>UseRouterExperimentation
        <button onClick={() => Router.reload()}>REFRESH</button>
    </div>)
}

export default UseRouterExperimentation;