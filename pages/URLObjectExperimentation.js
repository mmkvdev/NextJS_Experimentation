import Router from 'next/router';

function URLObjectExperimenter() {
    const handleClick = () => {
        Router.push({
            pathname: '/about',
            query: { name: 'Vercel' },
        });
    };

    return (
        <div>
            Click here: <button onClick={handleClick}>here</button> to read more
        </div>
    );
}

export default URLObjectExperimenter;