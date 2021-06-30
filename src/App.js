import React from 'react'
import { useState, useEffect } from 'react'
import Bracket from './components/Bracket'
import Header from './components/Header'

const App = () => {
  const [matches, setMatches] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getMatches = async () => {
      const matchesFromServer = await fetchMatches()
      setMatches(matchesFromServer)
    }
    const getPlayers = async () => {
      const playersFromServer = await fetchPlayers()
      setPlayers(playersFromServer)
    }
    getMatches()
    getPlayers()
  }, [])

  // Fetch Matches
  const fetchMatches = async () => {
    const res = await fetch('http://localhost:5000/matches')
    const data = await res.json()
    return data
  }

  // Fetch Players
  const fetchPlayers = async () => {
    const res = await fetch('http://localhost:5000/players')
    const data = await res.json()
    return data
  }

  return (
    <div className='container'>
      <Header />
      <Bracket matches={matches} playesr={players} />
    </div>
  )
}

export default App
