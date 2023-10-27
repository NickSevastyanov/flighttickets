import { createSlice } from '@reduxjs/toolkit';

const data = require('../../assets/flights.json');
const flights = data.result.flights.slice(0, 4);

const initialState = {
  items: flights,
  sortedItems: [],
  carriers: [...new Set(flights.map((obj) => obj.flight.carrier.caption))],
  selectedCarriers: [],
  filterByCityMatch: false,
  priceFilter: {
    from: 0,
    to: 1000000,
  },
};

export const Flights = createSlice({
  name: 'Flights',
  initialState,
  reducers: {
    sortItemsByPriceAsc: (state) => {
      if (state.sortedItems.length !== 0) {
        state.sortedItems = state.sortedItems
          .slice()
          .sort(
            (a, b) => Number(a.flight.price.total.amount) - Number(b.flight.price.total.amount),
          );
      } else {
        state.sortedItems = state.items
          .slice()
          .sort(
            (a, b) => Number(a.flight.price.total.amount) - Number(b.flight.price.total.amount),
          );
      }
    },
    sortItemsByPriceDesc: (state) => {
      if (state.sortedItems.length !== 0) {
        state.sortedItems = state.sortedItems
          .slice()
          .sort(
            (a, b) => Number(b.flight.price.total.amount) - Number(a.flight.price.total.amount),
          );
      } else {
        state.sortedItems = state.items
          .slice()
          .sort(
            (a, b) => Number(b.flight.price.total.amount) - Number(a.flight.price.total.amount),
          );
      }
    },
    sortItemsByDuration: (state) => {
      state.sortedItems.length !== 0
        ? (state.sortedItems = state.sortedItems
            .slice()
            .sort((a, b) => a.flight.legs[0].duration - b.flight.legs[0].duration))
        : (state.sortedItems = state.items
            .slice()
            .sort((a, b) => a.flight.legs[0].duration - b.flight.legs[0].duration));
    },
    setSelectedAirlines: (state, action) => {
      const carrier = action.payload;
      if (state.selectedCarriers.includes(carrier)) {
        state.selectedCarriers = state.selectedCarriers.filter((c) => c !== carrier);
      } else {
        state.selectedCarriers.push(carrier);
      }

      state.sortedItems = state.items.filter((item) =>
        state.selectedCarriers.length === 0
          ? true
          : state.selectedCarriers.includes(item.flight.carrier.caption),
      );
    },

    setNoTransferFilter: (state) => {
      if (state.filterByCityMatch) {
        state.sortedItems = state.sortedItems.filter(
          (item) =>
            item.flight.legs[0].segments[0].arrivalCity.caption ===
            item.flight.legs[1].segments[0].departureCity.caption,
        );
      } else {
        state.sortedItems = state.items;
      }
    },
    toggleCityMatchFilter: (state) => {
      state.filterByCityMatch = !state.filterByCityMatch;
    },
    setPriceFilter: (state, action) => {
      state.priceFilter = action.payload;

      state.sortedItems = state.items.filter((ticket) => {
        const price = parseFloat(ticket.flight.price.total.amount);
        return price >= state.priceFilter.from && price <= state.priceFilter.to;
      });
    },
  },
});

export const {
  setItems,
  sortItemsByPriceAsc,
  sortItemsByPriceDesc,
  sortItemsByDuration,
  setSelectedAirlines,
  setNoTransferFilter,
  toggleCityMatchFilter,
  setPriceFilter,
} = Flights.actions;

export default Flights.reducer;
