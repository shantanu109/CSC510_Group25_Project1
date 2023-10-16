

import { combineReducers } from "redux";
import auth from './auth';
import search from './search';
import menu from './menu';


import job from './job';
import application from './application'
import order from "./order";
import analytics from "./analytics"

export default combineReducers({
    auth,
    search,
    menu,
    job,
    application,
    order,
    analytics
})



