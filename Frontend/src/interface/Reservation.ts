export default interface Reservation {
    reservation_id: number
    student_id: number
    student_name: string
    seat_id: number
    seat_label: string
    seat_number: number
    timeslot_id: number
    start_time: string
    end_time: string
    create_time: string
}