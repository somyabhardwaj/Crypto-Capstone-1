import React from 'react'
import LineChart from '../Charts/LineChart'
import CurrencyDropdown from '../DropDown/CurrencyDropdown'
import Searchbar from '../DropDown/Searchbar/Searchbar'

function Home() {
  return (
    <div>
    <CurrencyDropdown />
    <Searchbar />
      <LineChart />
    </div>
  )
}

export default Home
