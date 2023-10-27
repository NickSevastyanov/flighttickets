import React from 'react';
import Sidebar from './components/Sidebar';
import FlightBlock from './components/Flights/FlightBlock';

import './main.css';

import { useSelector } from 'react-redux';

function App() {
  const { items, sortedItems } = useSelector((state) => state.Flights);
  // const getFlights = items.slice(0, 5).map((obj) => (
  //   <FlightBlock key={obj.flightToken} {...obj} />
  // ))
  const getSortedFlights = sortedItems
    .slice(0, 4)
    .map((obj) => <FlightBlock key={obj.flightToken} {...obj} />);

  return (
    <div className="App">
      <div>
        <Sidebar />
      </div>
      <div>{getSortedFlights.length > 0 ? getSortedFlights : 'нет подходящих билетов'}</div>
    </div>
  );
}

export default App;
