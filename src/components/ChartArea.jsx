// src/components/ChartArea.jsx
import React from 'react'
import PropTypes from 'prop-types'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'
import { shortDate, currency } from '../utils/format'

/**
 * ChartArea
 * - Expects `data` as an array of objects: [{ date: '2025-11-01', amount: 1200 }, ...]
 * - Renders an area chart with a gradient fill and formatted tooltip
 */
export default function ChartArea({ data = [], height = 320 }) {
  const safeData = (Array.isArray(data) && data.length > 0)
    ? data
    : [{ date: new Date().toISOString().slice(0, 10), amount: 0 }]

  const tooltipFormatter = (value) => {
    return currency(value)
  }

  const xTickFormatter = (val) => {
    try {
      return shortDate(val)
    } catch {
      return val
    }
  }

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={safeData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#e6e6e6" />

          <XAxis
            dataKey="date"
            tickFormatter={xTickFormatter}
            tick={{ fontSize: 12 }}
            minTickGap={10}
          />

          <YAxis
            tickFormatter={(val) => {
              if (Math.abs(val) >= 1000000) return `${(val / 1000000).toFixed(1)}M`
              if (Math.abs(val) >= 1000) return `${(val / 1000).toFixed(1)}k`
              return val
            }}
            tick={{ fontSize: 12 }}
            width={80}
          />

          <Tooltip
            formatter={tooltipFormatter}
            labelFormatter={(label) => `Date: ${xTickFormatter(label)}`}
          />

          <Area
            type="monotone"
            dataKey="amount"
            stroke="#6366F1"
            strokeWidth={2}
            fill="url(#colorAmount)"
            dot={{ r: 2 }}
            activeDot={{ r: 5 }}
            isAnimationActive={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

ChartArea.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    })
  ),
  height: PropTypes.number,
}

ChartArea.defaultProps = {
  data: [],
  height: 320,
}
