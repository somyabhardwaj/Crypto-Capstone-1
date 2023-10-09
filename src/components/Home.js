import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import LineChart from './Charts/LineChart';
import HorizontalBarChart from './Charts/HorizontalBarChart';
import VerticalBarChart from './Charts/VerticalBarChart';
import PieChart from './Charts/PieChart';
import CurrencyDropdown from './DropDown/CurrencyDropdown';
import CoinDropdown from './DropDown/CoinDropdown';
import Searchbar from './Searchbar';
import TimeButtons from './TimeButtons';
import ChatTypeDropDown from './DropDown/ChatTypeDropDown';
import MarketCap from './MarketCap.js';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import SellCurrency from './DropDown/SellOrBuyCurrency';

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the window width state
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add an event listener for the window resize event
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const styles = {
    '@media screen and (max-width: 952px)': {
      height: '51.5rem',
      padding: '2px',
    },
    '@media screen and (max-width: 600px)': {
      height: '20rem',
      padding: '2px',
    },
    height: '51.6rem', // Default style for other screen sizes
  };

  // Apply styles based on the current window width
  const currentStyles = windowWidth <= 600 ? styles['@media screen and (max-width: 600px)'] : styles['@media screen and (max-width: 952px)'];

  const chartType = useSelector((state) => state.setChart);

  return (
    <>
      <div className='bg-gray-200 '>
        <Navbar />
        <div className="md:flex">
          <div className="md:w-2/3  lg:w-2/3 md:mx-10 lg:mx-10">
            <div className="flex ">
              <div className="m-2">
                <CurrencyDropdown />
              </div>
              <div className="m-2 md:w-full lg:w-full">
                <Searchbar />
              </div>
            </div>
            <div className="bg-white border border-black rounded ">
              <div className="md:mt-3 md:flex justify-around items-center">
                <TimeButtons />
                <div className=" flex justify-around ">
                  <CoinDropdown />
                  <ChatTypeDropDown />
                </div>
              </div>

              <div className="m-2  ">
                {/* Render the selected chart type */}
                {chartType === 'VerticalBarChart' && <VerticalBarChart />}
                {chartType === 'LineChart' && <LineChart />}
                {chartType === 'HorizontalBarChart' && <HorizontalBarChart />}
              </div>
              <div className='md:flex ld:flex justify-between'>
                <div className="md:w-2/5 m-2 rounded rounded-sm border ">
                  <PieChart />
                </div>
                <div className="md:w-2/5 bg-white m-2 rounded rounded-sm border ">
                  {/* Render the SellCurrency component */}
                  <SellCurrency />
                </div>
              </div>
            </div>
          </div>
          <div style={currentStyles} className="md:m-2 bg-white mx-2 p-4 scrollbar-none overflow-auto border border-black rounded rounded-sm">
            {/* Render the MarketCap component */}
            <MarketCap />
          </div>
        </div>
      </div>
      <footer className="bg-gray-200 h-5 w-full">
        {/* Footer content */}
      </footer>
    </>
  )
}

export default Home
