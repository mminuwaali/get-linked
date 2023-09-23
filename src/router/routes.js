import React from "react";
import * as layouts from '../layouts';

// pages
const pages = ({
    404: React.lazy(() => import('../pages/404')),
    index: React.lazy(() => import('../pages/index')),
    contact: React.lazy(() => import('../pages/contact')),
    register: React.lazy(() => import('../pages/auth/register')),
});

export default [
    { path: '*', name: '404', element: pages[404] },
    { path: '/', name: 'index', element: layouts.main(pages.index) },
    { path: '/contact', name: 'contact', element: layouts.contact(pages.contact) },
    { path: '/register', name: 'register', element: layouts.auth(pages.register) },
];