import React from 'react'
import BracketNode from './BracketNode.js'

const Bracket = ({ matches, players }) => {
    return (
        <div className="bracket">
            {matches.map((match) => (
                <BracketNode key={match.id} p1_name={match.p1_name} p2_name={match.p2_name} p1_score={match.p1_score} p2_score={match.p2_score} />
            ))}
        </div>
    )
}

export default Bracket
