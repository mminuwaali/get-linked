import React from "react";
import routes from './routes';
import $loader from '../components/loader';
import * as RouterDom from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

/* A React component that is rendering the routes. */
export default function () {
    return <React.Suspense fallback={<$loader />}>
        <ToastContainer position="top-right" />
        <RouterDom.BrowserRouter>
            <RouterDom.Routes>
                {
                    routes.map((item, index) => <RouterDom.Route {...item} key={index} element={<item.element />} />)
                }
            </RouterDom.Routes>
        </RouterDom.BrowserRouter>
    </React.Suspense>
};