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
      
    <div className=" w-8/12 flex items-center ml-12 p-2 bg-gray-100">
    <CurrencyDropdown />
    <Searchbar />
    </div>   
    <div className=" w-8/12  ml-12 p-2 bg-gray-100">
    <div className="flex items-center">
       <TimeButtons />
       <CryptoCurrencyDropDown />
       <ChatTypeDropDown />
    </div>
    <LineChart />
    <PieChart />
    </div>
    
      </>
    
  )
}

export default Home
