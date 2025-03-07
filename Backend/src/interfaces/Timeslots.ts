export interface Timeslot {
    timeslot_id: number;    // 時段編號（INT，自動遞增）
    start_time: string;     // 開始時間（TIME），格式如 "HH:MM
    end_time: string;       // 結束時間（TIME），格式如 "HH:MM
}