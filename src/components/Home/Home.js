import React from 'react'
import LineChart from '../Charts/LineChart'
import CurrencyDropdown from '../DropDown/CurrencyDropdown'
import Searchbar from '../Searchbar/Searchbar'
import PieChart from '../Charts/PieChart'
import TimeButtons from '../Timebuttons/TimeButtons'
import CryptoCurrencyDropDown from '../DropDown/CryptoCurrencyDropDown'
import ChatTypeDropDown from '../DropDown/ChatTypeDropDown'

function Home() {
  return (
    <>
      <div className="bg-gray-200">
        <div className=" w-8/12 flex items-center ml-10 p-2 ">
          <CurrencyDropdown />
          <Searchbar />
        </div>
        <div className=" w-7/12  ml-24  bg-white border border-gray-300 rounded">
          <div className="flex justify-between items-center">
            <TimeButtons />
            <div className="mx-2 items-center">
              <CryptoCurrencyDropDown />
              <ChatTypeDropDown />
            </div>
          </div>
          <LineChart />

        </div>
        <PieChart />
      </div>
    </>

  )
}

export default Home
