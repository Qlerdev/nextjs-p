"use client"
import Link from "next/link"
import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="text-7xl gap-2">
      <button onClick={() => setCount(count-1)}> - </button>
      {count}
      <button onClick={() => setCount(count+1)}> + </button>
    </div>
  )
}

export default Counter