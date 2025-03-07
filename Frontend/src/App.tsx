import Reservation from './interface/Reservation'
import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [reservations, setReservations] = useState<Reservation[]>([])

  useEffect(() => {
    fetch('http://127.0.0.1:3100/reservations/getAllReservations')
      .then(response => response.json())
      .then(data => {
        console.log('Data:', data)
        const formattedData = data.map((reservation: Reservation) => ({
          ...reservation,
          create_time: new Date(reservation.create_time).toLocaleString()
        }))
        setReservations(formattedData)
      })
      .catch(error => console.error('Error fetching reservations:', error))
  }, [])

  return (
    <div className="app">
      <ul className="reservation-list">
        {reservations.map(reservation => (
          <li key={reservation.reservation_id} className="reservation-item">
            <div>{`Reservation ID: ${reservation.reservation_id}`}</div>
            <div>{`Student ID: ${reservation.student_id}`}</div>
            <div>{`Student Name: ${reservation.student_name}`}</div>
            <div>{`Seat: ${reservation.seat_label}${reservation.seat_number}`} , {`ID: ${reservation.seat_id}`}</div>
            <div>{`Timeslot: ${reservation.start_time} - ${reservation.end_time}`}</div>
            <div>{`Create Time: ${reservation.create_time}`}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}