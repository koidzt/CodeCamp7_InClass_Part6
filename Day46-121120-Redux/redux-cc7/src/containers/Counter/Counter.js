import React from 'react'
import CounterDisplay from '../../components/CounterDisplay/CounterDisplay'
import CounterPanel from '../../components/CounterPanel/CounterPanel'

function Counter() {
  return (
    <div>
      <h2>Welcome to my counter. By Sonter</h2>
      <CounterDisplay />
      <CounterPanel />
    </div>
  )
}

export default Counter;
