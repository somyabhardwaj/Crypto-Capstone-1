import React from 'react'
import LineChart from '../Charts/LineChart'
import CurrencyDropdown from '../DropDown/CurrencyDropdown'
import Searchbar from '../Searchbar/Searchbar'
import PieChart from '../Charts/PieChart'
import TimeButtons from '../Timebuttons/TimeButtons'
import CoinDropdown from '../DropDown/CoinDropdown'
import ChatTypeDropDown from '../DropDown/ChatTypeDropDown'
import VerticalBarChart from '../Charts/VerticalBarChart'
import MarketCap from '../MarketUpdateCard/MarketCap.js'
import SellOrBuyCurrency from '../DropDown/SellOrBuyCurrency'
import { useSelector } from 'react-redux/es/hooks/useSelector'

function Home() {
  const chartType = useSelector((state) => state.setChart);
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
            <CoinDropdown />
            <ChatTypeDropDown />
          </div>

          <div className="mt-2 ">
          {chartType === 'LineChart' ? <LineChart /> : <VerticalBarChart />}
          </div>
          <div className="mt-3  flex justify-around items-center">
            <div className="w-2/5">
              <PieChart />
            </div>
            <div className='bg-white border rounded '>
              <SellOrBuyCurrency />
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
