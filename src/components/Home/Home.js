import React from 'react';
import Navbar from '../Navbar/Navbar'
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
import HorizontalBarChart from '../Charts/HorizontalBarChart'
import SellCurrency from '../DropDown/SellOrBuyCurrency';


function Home() {
  const chartType = useSelector((state) => state.setChart);
  return (
    <>
      <div>
        <Navbar />
        <div>
          <div className="flex ">
            <div className="m-2">
              <CurrencyDropdown />
            </div>
            <div className="m-2">
              <Searchbar />
            </div>
          </div>
          <div className="">
            <TimeButtons />
            <div className="flex justify-around">
              <CoinDropdown />
              <ChatTypeDropDown />
            </div>

            <div className="m-2 rounded rounded-sm border border-black">
              {chartType === 'VerticalBarChart' && <VerticalBarChart />}
              {chartType === 'LineChart' && <LineChart />}
              {chartType === 'HorizontalBarChart' && <HorizontalBarChart />}
            </div>
            <div>
              <div className="m-2 rounded rounded-sm border border-black">
                <PieChart />
              </div>
              <div className="m-2 rounded rounded-sm border border-black">
               <SellCurrency />
              </div>
            </div>

          </div>
        </div>
        <div className="bg-white mx-2 p-4 h-96 overflow-scroll border border-black rounded rounded-sm">
          <MarketCap />
        </div>
      </div>
    </>

  )
}

export default Home
