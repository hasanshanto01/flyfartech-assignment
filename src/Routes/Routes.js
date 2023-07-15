import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import FlightDetails from "../Pages/FlightDetails/FlightDetails";
import FareSummary from "../Pages/FareSummary/FareSummary";
import FarePolicy from "../Pages/FarePolicy/FarePolicy";
import Baggage from "../Pages/Baggage/Baggage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <FlightDetails></FlightDetails>
            },
            {
                path: '/faresummary',
                element: <FareSummary></FareSummary>
            },
            {
                path: '/farepolicy',
                element: <FarePolicy></FarePolicy>
            },
            {
                path: '/baggage',
                element: <Baggage></Baggage>
            }
        ]
    }
]);