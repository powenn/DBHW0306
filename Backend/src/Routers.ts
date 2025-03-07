import {Route} from "./abstract/Route";
import { PageRoute } from "./routers/pageRoute";
import { ReservationsRoute } from "./routers/ReservationsRoute";

export const router: Array<Route> = [
    new PageRoute(),new ReservationsRoute()
];

