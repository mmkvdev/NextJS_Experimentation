export default (req,res) => {
    const {
        query : {
            params
        }
    } = req

    res.end(`Params: ${params.join(', ')}`)
}
