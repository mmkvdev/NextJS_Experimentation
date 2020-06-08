import useSWR from 'swr';

const SWRExperimentation = () => {
    const { data, error } = useSWR('/api/hello', fetcher)

    if(error) return <div>Error</div>

    if(!data) return <div>loading....</div>
    
    return (
        <div>{data.name}</div>
    );
}

export default SWRExperimentation;