import { useRouter } from 'next/router';

function UseRouterExperimentationRouter({ children, href }) {
    const router = useRouter();
    console.log(href)
    const style = {
        marginRight: 10,
        color: router.pathname === href ? 'red' : 'yellow'
    };

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} style={style}>
            children: {children}
        </a>
    );
}

export default UseRouterExperimentationRouter;