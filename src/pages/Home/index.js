/*
 * @Author: your name
 * @Date: 2022-03-21 11:55:18
 * @LastEditTime: 2022-03-28 15:43:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myresume\src\pages\Home\index.js
 */

import Skill from './components/Skill';
import License from './components/License';
import { ContactUs } from './components/ContactEmail';
import { Row, Col,Space,Timeline,Button,Drawer} from 'antd';
import React, { useEffect, useState } from "react";
import './index.css';
import {SmileTwoTone,MailOutlined,PhoneOutlined,GithubOutlined} from '@ant-design/icons';
import myface from './image/myface.png';
import PowerPoint from './image/PowerPoint.jpg';
import Excel from './image/Excel.jpg';
import Mta from './image/MTA.jpg';
import SoftwareDesignGradeC from './image/SoftwareDesignGradeC.jpg';
import Toeic from './image/TOEIC.jpg';
import workexps from './json/worksexps.json';
import competitions from './json/competitions.json';
import skills from './json/skills.json';


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
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
    <div className="resume">
            
        <Row className='basic'>
            <Col xs={{span: 24}} md={{span:7}}>
            <Space direction="vertical">
            
                <div className='circular--portrait'> 
                    <img src={myface} alt="myface" className="myface" />
                </div>
            <br/>
            
                <Row>
                    <Col xs={{span: 24}} md={{span: 24}}>
                        <h1>李明錞</h1>
                    </Col>
                    <Space direction="vertical">
                    <Button  type="dark"   icon={<MailOutlined />} onClick={showDrawer}>
                        Send mail to mindy80230
                    </Button>
                    <Drawer title="與李明錞聯繫" placement="right" onClose={onClose} visible={visible}>
                        <ContactUs/>
                    </Drawer>
                    <Button
                    type="dark"
                    href={"tel:+900300400"}
                    icon={<PhoneOutlined />}
                    onClick={() => this.enterLoading(1)}
                    >
                    Call to 0934-253-468
                    </Button>
                    <Button
                    type="dark"
                    href={"https://github.com/MING-CHUNLee"}
                    icon={<GithubOutlined />}
                    onClick={() => this.enterLoading(1)}
                    >
                    Check MING github!
                    </Button>
                    </Space>
                  
                   
          
                </Row>
                </Space>
            </Col>
            <Col xs={{span: 24}} md={{span:17}}>
            <div>
                
                        就讀臺中科技大學資訊管理系。
                        樂於學習專業科目與精進外語能力，多次擔任分組組長與簡報人員，擁有良好的時間管理能力與自律能力，至今無未通過的學科並保持於班上前段班，妥善平衡課業與興趣探索。 
                        興趣為閱讀書籍與藝術涵養與培育，至106年入學以來總共借閱 222 本書籍與電影片；業餘互惠攝影，與來自四面八方的夥伴進行創作發想並訓練自身溝通能力及人際關係處理。 
                <br/> <br/>
                        以下為個人優勢：
                <br/>
                    <ol>
                        <li>善於觀察周遭環境進行創意發想與團隊意見整合。</li>
                        <li>溝通能力強， 善於與不同邏輯思維的合作夥伴溝通與協調。</li>
                        <li>外語能力佳，具備英語溝通能力與優良的理解能力。</li>
                        <li>不怕困難，在新創公司保持主動積極的態度面對新事物。</li>
                        <li>較強的抗壓與時間管理能力，平衡實習、競賽、課業與興趣的時間安排。</li>
                    </ol>
            </div>
            </Col>
        </Row>

        <Row className='h2BG'> 
                <h2>Skills</h2>
        </Row>
        <Row className='skill'> 
                                {skills.map((skill)=>(
                                        <Col xs={{span: 12}} md={{span:8}}>
                                            <Skill key={skill.id} skill={skill} />
                                        </Col>
                                ))}
        </Row>

        <Row className='h2BG'> 
            <h2>Competition Results</h2>
        </Row>
       
        <Row className='skill'> 
        <div>
            <Col span={24}> 
                <Timeline>
                    {competitions.map((competition)=>(
                        <Timeline.Item dot={ <SmileTwoTone twoToneColor="#eb2f96" />}>
                        <h3 key={competition.id}>{competition.title}</h3>
                        <p key={competition.id}>{competition.describe}</p>
                        </Timeline.Item>
                    ))}
                </Timeline>
            </Col>
        </div>
        </Row>
        <Row className='h2BG'> 
                <h2>Work Experience</h2>
        </Row>
        <Row className='skill'> 
            <Col span={24}>
                    {workexps.map((worksexp)=>(
                        <div>
                        <h3 key={worksexp.id}>{worksexp.title}</h3><span key={worksexp.id}>{worksexp.period}</span>
                        <p key={worksexp.id}>{worksexp.describe}</p>
                        </div>
                    ))}
                </Col>
        </Row>
        <Row className='h2BG'> 
                <h2>License</h2>
        </Row>
                
        <Row className='skill'> 
                        {licenses.map((license)=>(
                            <Col span={12}>
                                    <License key={license.id} license={license} />
                                </Col>
                        ))}
        </Row>

    </div>)
        }

export default Home