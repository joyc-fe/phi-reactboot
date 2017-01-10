import React from 'react'
import { Calendar } from 'antd';

import moment from 'moment';

export default class myCalendar extends React.Component {
    dateCellRender = (value) => {
        return <div>自定义日数据</div>
    }

    monthCellRender = (value) => {
        return <div>自定义月数据 {value.getMonth()}</div>
    }

    render() {
        return (
            <Calendar defaultValue={moment('2010-10-10', 'YYYY-MM-DD')}
                dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
        )
    }
}