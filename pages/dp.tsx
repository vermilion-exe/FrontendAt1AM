import React, { useRef } from 'react';
import './index.css';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;



export default function Picker(){
    const openRef = useRef(false);

    const handleOpenChange = (open: boolean) => {
        openRef.current = open;
    };

    const handleSelect = () => {
        openRef.current = true; // keep the picker open after a date range is selected
    };

    return (
        <Space direction="vertical" size={12}>
            <RangePicker
                open={openRef.current}
                onOpenChange={handleOpenChange}
                onCalendarChange={handleSelect}
            />
            <RangePicker showTime />
            <RangePicker picker="week" />
            <RangePicker picker="month" />
            <RangePicker picker="quarter" />
            <RangePicker
                picker="year"
                id={{
                    start: 'startInput',
                    end: 'endInput',
                }}
                onFocus={(_, info) => {
                    console.log('Focus:', info.range);
                }}
                onBlur={(_, info) => {
                    console.log('Blur:', info.range);
                }}
            />
        </Space>
    )}
