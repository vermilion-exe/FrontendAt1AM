//import {DatePicker, Space} from 'antd';

//const { RangePicker } = DatePicker;

export default async function Data() {
    const response = await fetch('https://t3278q9yw4.execute-api.eu-north-1.amazonaws.com/dev/api/v1/car/admin', {
        method: 'GET',
        headers: {
            'accept-language': 'en',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdG5hbWUiOiJNZWhyaWJhbiIsInVzZXJJZCI6Ijc1NTdhMmUwLTU2ZGYtNDIxMC1iMjNhLTM2NzEyYTU0Yzk2ZiIsImVtYWlsIjoibWVocmliYW5raGFsaWxvdmEwNEBnbWFpbC5jb20iLCJsYXN0bmFtZSI6IktoYWxpbG9hIiwic3ViIjoibWVocmliYW5raGFsaWxvdmEwNEBnbWFpbC5jb20iLCJpYXQiOjE3MTY5MjMyNzYsImV4cCI6MTcxNjkyNjg3Nn0.x3T5CLJNJJj5N_5ZI_QNs_tGL4vV1yz70bA3_Roumo0'
        }
    });
    const data = await response.json();

    return data;
}
