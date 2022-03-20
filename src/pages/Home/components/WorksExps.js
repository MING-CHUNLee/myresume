import { Row, Col, Divider } from 'antd';
import { useState } from 'react';

const WorksExps =()=>{
    const [worksExps,setCompetitions]=useState([
        {
            id:'1',
            title:"瑪麗安生技有限公司實習生",
            period:"2021年9月 - 2022年1月",
            describe:"於新創公司實習，負責撰寫產品文案與行銷策略發想、擬定合約書草案與協助與外籍專員翻譯溝通。",
        },
        {
            id:'2',
            title:"教育部補捐助計畫TDOC兼任助理工讀",
            period:"2021年7月 - 2021年9月",
            describe:"暑假短期協助教授專案影片英聽打字翻譯人員與拍攝現場協助。",
        },
    ])
    return (
        <div>
            <Col span={24}>
                {worksExps.map((worksexp)=>(
                    <div>
                    <h3 key={worksexp.id}>{worksexp.title}</h3><span key={worksexp.id}>{worksexp.period}</span>
                    <p key={worksexp.id}>{worksexp.describe}</p>
                    </div>
                ))}
            </Col>
        </div>
            )
}

export default WorksExps