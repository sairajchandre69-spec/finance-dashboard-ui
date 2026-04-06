import React from 'react'
import Navbar from './components/Navbar'
import SummaryCards from './components/SummaryCards'
import ChartsSection from './components/ChartSection'
import TransactionsTable from './components/TransactionsTable'
import RoleBasedDashboard from './components/RoleBasedDashboard'

function App() {
  return (
    <div>
      <Navbar />
      <SummaryCards />
      <ChartsSection />
      <TransactionsTable />
      <RoleBasedDashboard />
    </div>
  )
}

export default App
