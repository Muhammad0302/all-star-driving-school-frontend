import React from 'react'
import './styles.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
interface ChartInput {
  title: string
  data: any
  dataKey: string
  grid: any
}
const Chart = ({ title, data, dataKey, grid }: ChartInput) => {
  return (
    <div className='chart'>
      <h3 className='chartTitle'>{title}</h3>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey='name' stroke='#f23d4d' />
          <Line type='monotone' dataKey={dataKey} stroke='#f23d4d' />
          <Tooltip />
          {grid && <CartesianGrid stroke='#b5b3b3' strokeDasharray='5 5' />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
