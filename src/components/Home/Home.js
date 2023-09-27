import React from 'react'
import LineChart from '../Charts/LineChart'
import CurrencyDropdown from '../DropDown/CurrencyDropdown'
import Searchbar from '../Searchbar/Searchbar'
import PieChart from '../Charts/PieChart'
import TimeButtons from '../Timebuttons/TimeButtons'
import CryptoCurrencyDropDown from '../DropDown/CryptoCurrencyDropDown'
import ChatTypeDropDown from '../DropDown/ChatTypeDropDown'
import BarChart from '../Charts/BarChart'
import MarketCap from '../Api/MarketCap.js'
import SellCurrency from '../DropDown/SellCurrency'


function Home() {
  return (
    <>
    <div className=" flex justify-around w-full bg-gray-100 pb-2  ">
    <div className="w-8/12">
    <div className="flex justify-around items-center mt-2 ">
    <CurrencyDropdown />
    <Searchbar />
    </div>
    <div className="flex justify-around items-center mt-2">
    <TimeButtons />
    <CryptoCurrencyDropDown />
    <ChatTypeDropDown />
    </div>
    
    <div className="mt-2 ">
    <BarChart />
    </div>
    <div className="mt-2 flex justify-around items-center">
    <div className="w-1/3">
    <PieChart />
    </div>
    <div className=''>
      <SellCurrency />
      
    </div>
    </div>
    </div>
    <div className="w-1/4 px-4  bg-white border border-gray-300 rounded mt-2  overflow-auto">
    <MarketCap />
    </div>
    </div>
    </>

  )
}

export default Home
