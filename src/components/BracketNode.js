const BracketNode = ({id, p1_name, p2_name, time, status, p1_score, p2_score}) => {
    return (
        <table className='bracket-node'>
            <tr>
                <th className='player'>{p1_name}</th>
                <th className='score'>{p1_score}</th>
            </tr>
            <tr>
                <th className='player'>{p2_name}</th>
                <th className='score'>{p2_score}</th>
            </tr>
        </table>
    )
}

export default BracketNode
