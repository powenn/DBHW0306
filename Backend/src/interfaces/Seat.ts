export interface Seat {
    seat_id: number;        // 座位編號（INT，自動遞增）
    row_label: string;      // 行標示（CHAR(1)），例如 'A''F'
    seat_number: number;    // 座號（TINYINT），例如 110
}