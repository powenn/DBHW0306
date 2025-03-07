export interface Reservation {
    reservation_id: number; // 預約編號（INT，自動遞增）
    student_id: string;     // 學生編號（外鍵，對應 Students.student_id）
    seat_id: number;        // 座位編號（外鍵，對應 Seats.seat_id）
    timeslot_id: number;    // 時段編號（外鍵，對應 Timeslots.timeslot_id）
    create_time?: string;   // 創建時間（DATETIME），預設為 CURRENT_TIMESTAMP，選用可選屬性
}