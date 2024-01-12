import { createStore } from "redux";


export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_FLIGHTS_SUCCESS":
      return {
        ...state,
        flights: action.payload,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, {
        flights: [],
    });

import { actionTypes } from "./actions";

function reducer(state = [], action) {
    switch (action.type) {
        case actionTypes.FETCH_FLIGHTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}

import { ActionTypes } from "./actions";

function fetchFlights() {
    return {
        type: ActionTypes.FETCH_FLIGHTS,
    };
}

const fetchFlightsSuccess = flights => {
  return {
    type: ActionTypes.FETCH_FLIGHTS_SUCCESS,
    payload: flights,
  };
};

export { fetchFlights, fetchFlightsSuccess };
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Flight } from "./models";

const FlightsList = () => {
  const flights = useSelector((state) => state.flights);

  useEffect(() => {
    // Fetch flights from an API
    const fetchFlights = () => {
      // ...
    };
    fetchFlights();
  }, []);

  return (
    <ul>
      {flights.map((flight) => (
        <li key={flight.id}>
          <Flight flight={flight} />
        </li>
      ))}
    </ul>
  );
};
import React from "react";
import { Flight } from "./models";

const Flight = ({ flight }) => {
  return (
    <div>
      <h2>{flight.number}</h2>
      <p>
        {flight.origin} - {flight.destination}
      </p>
      <p>
        {flight.departureDate} - {flight.departureTime}
      </p>
      <p>
        {flight.arrivalDate} - {flight.arrivalTime}
      </p>
      <p>
        {flight.price} تومان
      </p>
    </div>
  );
};
import { createStore } from "redux";

const initialState = {
  flights: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_FLIGHTS_SUCCESS":
      return {
        ...state,
        flights: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, {
        flights: [],
    });

export default store;
import { actionTypes } from "./actions";

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_FLIGHTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

import { ActionTypes } from "./actions";

const fetchFlights = () => {
  return {
    type: ActionTypes.FETCH_FLIGHTS,
  };
};

function fetchFlightsSuccess(flights) {
    return {
        type: ActionTypes.FETCH_FLIGHTS_SUCCESS,
        payload: flights,
    };
}

export { fetchFlights, fetchFlightsSuccess };
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Flight } from "./models";

function FlightsList() {
    const flights = useSelector((state) => state.flights);

    useEffect(() => {
        // Fetch flights from an API
        const fetchFlights = () => {
            // ...
        };
        fetchFlights();
    }, []);

    return (
        <ul>
            {flights.map((flight) => (
                <li key={flight.id}>
                    <Flight flight={flight} />
                </li>
            ))}
        </ul>
    );
}
import React from "react";
import { Flight } from "./models";

function Flight({ flight }) {
    return (
        <div>
            <h2>{flight.number}</h2>
            <p>
                {flight.origin} - {flight.destination}
            </p>
            <p>
                {flight.departureDate} - {flight.departureTime}
            </p>
            <p>
                {flight.arrivalDate} - {flight.arrivalTime}
            </p>
            <p>
                {flight.price} تومان
            </p>
        </div>
    );
}
