import { Contorller } from "../abstract/Contorller";
import { Request, Response } from "express";
import { logger } from "../middlewares/log";
import { Service } from "../abstract/Service";
import { PageService } from "../Service/PageService";
import { DB } from "../app";
require('dotenv').config()

export class ReservationsController extends Contorller {
    protected service: Service;

    constructor() {
        super();
        this.service = new PageService();
    }

    public async getAllReservations(Request: Request, Response: Response) {
        const query_string = `
SELECT
    r.reservation_id,
    r.student_id,
    (SELECT student_name From lab_b310.Students WHERE student_id = r.student_id ) AS student_name,
    r.seat_id,
    (SELECT row_label from lab_b310.Seats WHERE seat_id=r.seat_id) AS seat_label,
    (SELECT seat_number from lab_b310.Seats WHERE seat_id=r.seat_id) AS seat_number,
    r.timeslot_id,
    (SELECT start_time from lab_b310.Timeslots WHERE timeslot_id=r.timeslot_id) AS start_time,
    (SELECT end_time from lab_b310.Timeslots WHERE timeslot_id=r.timeslot_id) AS end_time,
    DATE_FORMAT(r.create_time, '%Y-%m-%d %H:%i:%s') AS create_time
FROM
    lab_b310.Reservations r;
`;
        await DB.connection?.query("USE lab_b310;");
        const resp = await DB.connection?.query(query_string);
        Response.send(resp)
    }
}