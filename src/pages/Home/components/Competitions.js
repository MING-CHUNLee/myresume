import { Row, Col, Divider } from 'antd';
import { useState } from 'react';

const Competitions =()=>{
    const [competitions,setCompetitions]=useState([
        {
            id:'1',
            title:"【2021年資訊與流通學院專題成果展­】",
            describe:"開發團隊共四人，主要負責主題企劃發想與文書撰寫與系統平台前端開發人員與資料庫設計規劃。",
        },
        {
            id:'2',
            title:"【2021年第26屆大專院校資訊應用服務創新競賽­-Azure雲端創新產業應用組】",
            describe:"開發團隊共四人，主要負責主題企劃發想與文書撰寫與系統平台前端開發人員與資料庫設計規劃。",
        },
        {
            id:'3',
            title:"【2019 Linker無限可能-全國大專院校創意行銷與創業競賽】",
            describe:"開發團隊共二人，主要負責企劃書撰寫、資料庫規劃、後端開發人員與成果報告人員，也協助前端人員資料串接困難協助。",
        },
        {
            id:'4',
            title:"【2019 Linker無限可能-全國大專院校創意行銷與創業競賽】",
            describe:"參賽團隊共三人，主要負責企劃書撰寫、行銷策略發想與成果報告人員。",
        },
    ])
    return (
        <div>
            <Col span={24}>
                {competitions.map((competition)=>(
                    <div>
                    <h3 key={competition.id}>{competition.title}</h3>
                    <p key={competition.id}>{competition.describe}</p>
                    </div>
                ))}
            </Col>
        </div>
            )
}

export default Competitions