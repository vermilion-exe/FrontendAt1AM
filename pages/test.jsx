import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

export default function BasicDateRangePicker() {
    let periods = [
        { id: 1, startDate: new Date("2024-05-23").getTime(), endDate: new Date("2024-05-28").getTime() },
        // add more periods as needed
    ];
    const isDateInPeriods = (date) => {
        let time = date.valueOf();
        for (let period of periods) {
            if (time >= period.startDate && time <= period.endDate) {
                return true;
            }
        }
        return false;
    };
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker renderDay={(date, _) => (
                <div
                    style={{
                        color: isDateInPeriods(date) ? 'gray' : undefined,
                    }}
                >
                    {date.getDate()}
                </div>
            )}
                             localeText={{ start: 'Check-in', end: 'Check-out' }}
                             disablePast={true} shouldDisableDate={isDateInPeriods}
                             closeOnSelect={false}
            />
        </LocalizationProvider>
    );
}
