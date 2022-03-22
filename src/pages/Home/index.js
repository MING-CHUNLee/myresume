/*
 * @Author: your name
 * @Date: 2022-03-21 11:55:18
 * @LastEditTime: 2022-03-22 12:01:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myresume\src\pages\Home\index.js
 */

import Skill from './components/Skill';
import License from './components/License';
import { Row, Col, Divider } from 'antd';
import './index.css';

import myface from './image/myface.png';
import PowerPoint from './image/PowerPoint.jpg';
import Excel from './image/Excel.jpg';
import Mta from './image/MTA.jpg';
import SoftwareDesignGradeC from './image/SoftwareDesignGradeC.jpg';
import Toeic from './image/TOEIC.jpg';

const worksexp=[
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
];

const competitions=[
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
];
const skills=[
    {
        id:'Web',
        row:["HTML/CSS","Bootstrap","Laravel","PHP","React"],
    },
    {
        id:'DataBase',
        row:["MySQL","MariaDB","pgsql"],
    },
    {
        id:'Other',
        row:["Azure","Android","Restful API","vagrant"],
    },
    {
        id:'Office',
        row:["PowerPoint","Word","Excel"],
    },
    {
        id:'Adobe',
        row:["Photoshop","Lightroom","Premiere"],
    },
    {
        id:'Language',
        row:["Chinese","English"],
    },
];
const licenses=[
    {
        id:'1',
        name:"TQC PowerPoint 2016 專業級 Professional",
        issueDate:"2018/01/06",
        url2:"../image/PowerPoint.jpg",
        url:PowerPoint,
    },
    {
        id:'2',
        name:"TQC Excel 2016 Professional",
        issueDate:"2018/06/09",
        url2:"../image/Excel.jpg",
        url:Excel,
    },
    {
        id:'3',
        name:"MTA：Introduction to Programming Using HTML and CSS",
        issueDate:"2019/06/15",
        url2:"../image/MTA.jpg",
        url:Mta,
    },
    {
        id:'4',
        name:"中華民國技術士證電腦軟體設計丙級",
        issueDate:"107年07年02日",
        url2:"../image/SoftwareDesignGradeC.jpg",
        url:SoftwareDesignGradeC,
    },
    {
        id:'5',
        name:"新制多益725分",
        issueDate:"2020/05/24",
        url2:"../image/TOEIC.jpg",
        url:Toeic,
    },
];
const Home =()=>{
    return (
    <div className="resume">
            
        <Row>
            <Col span={8}>
                <div> 
                    <img src={myface} alt="myface" className="myface" />
                </div>
            </Col>
            <Col span={16}>
            <div>
                
                就讀臺中科技大學資訊管理系。於專題老師推薦下進入瑪麗安擔任實習生，主要負責行銷文案構想撰寫、合約書撰寫並協助與外籍專員溝通翻譯。
                樂於學習專業科目與精進外語能力，多次擔任分組組長與簡報人員，擁有良好的時間管理能力與自律能力，至今無未通過的學科並保持於班上前段班，妥善平衡課業與興趣探索。 
                興趣為閱讀書籍與藝術涵養與培育，至106年入學以來總共借閱 222 本書籍與電影片；業餘互惠攝影，與來自四面八方的夥伴進行創作發想並訓練自身溝通能力及人際關係處理。 
                <br/>
                以下為個人優勢：
                <br/>
                善於觀察周遭環境進行創意發想與團隊意見整合。
                溝通能力強， 善於與不同邏輯思維的合作夥伴溝通與協調。
                外語能力佳，具備英語溝通能力與優良的理解能力。
                不怕困難，在新創公司保持主動積極的態度面對新事物。
                較強的抗壓與時間管理能力，平衡實習、競賽、課業與興趣的時間安排。
            </div>
            </Col>
        </Row>
        <h2>Skills</h2>
        <Row>

                        {skills.map((skill)=>(
                                <Col span={8}>
                                    <Skill key={skill.id} skill={skill} />
                                </Col>
                        ))}
            
        </Row>
        <h2>Competition Results</h2>
        <Row>
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
        </Row>
        <h2>Work Experience</h2>
        <Row>
            <Col span={24}>
                    {worksexp.map((worksexp)=>(
                        <div>
                        <h3 key={worksexp.id}>{worksexp.title}</h3><span key={worksexp.id}>{worksexp.period}</span>
                        <p key={worksexp.id}>{worksexp.describe}</p>
                        </div>
                    ))}
                </Col>
        </Row>
        <h2>License</h2>
        <Row>
                        {licenses.map((license)=>(
                            <Col span={12}>
                                    <License key={license.id} license={license} />
                                </Col>
                        ))}
        </Row>

    </div>)
        }

export default Home