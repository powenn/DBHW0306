import { Route } from "../abstract/Route"
import { ReservationsController } from "../controller/ReservationsController";

export class ReservationsRoute extends Route{
    
    protected url: string;
    protected Contorller = new ReservationsController();

    constructor(){
        super()
        this.url = '/reservations/'
        this.setRoutes()
    }

    protected setRoutes(): void {
        this.router.get(`${this.url}getAllReservations`,(req, res)=>{
            this.Contorller.getAllReservations(req, res);
        })
    }

}