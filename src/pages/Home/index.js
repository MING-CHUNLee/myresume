/*
 * @Author: your name
 * @Date: 2022-03-21 11:55:18
 * @LastEditTime: 2022-03-29 16:28:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myresume\src\pages\Home\index.js
 */

import Skill from './components/Skill';
import License from './components/License';
import { ContactUs } from './components/ContactEmail';
import { Row, Col,Space,Timeline,Button,Drawer, Modal,Card, Form} from 'antd';
import React, { useEffect, useState } from "react";
import './index.css';
import {SmileTwoTone,MailOutlined,PhoneOutlined,GithubOutlined} from '@ant-design/icons';
import myface from './image/myface.png';
import workexps from './json/worksexps.json';
import competitions from './json/competitions.json';
import skills from './json/skills.json';
import licenses from './json/licenses.json';

const Home =()=>{
    const [visible, setVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(true);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
    <div className="resume">
            
        <Row className='basic'>
            <Col xs={{span: 24}} md={{span:8}}>


            <Space direction="vertical">
            <Row>
            <Col  xs={{span: 24 , offset:5}} sm={{span: 24 , offset:6}} md={{span:24,offset:4}}>
                <div className='circular--portrait'  > 
                    <img src={myface} alt="myface" className="myface" />
                </div>
            <br/>
            </Col>
            </Row>
                <Row>
                    <Col xs={{span: 24 , offset:9}} sm={{span: 24 , offset:10}} md={{span: 24, offset:7}}>
                        <h1>李明錞</h1>
                    </Col>
                    <Col xs={{span: 24, offset:2}} sm={{span: 24}} md={{span: 20}}>
                    <Space direction="vertical" size="small">
                        <Button  
                            type="dark"  
                            icon={<MailOutlined />} 
                            onClick={showDrawer}
                            block
                        >
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
                        block
                    >
                    Call to 0934-253-468
                    </Button>
                
                    <Button
                    type="dark"
                    href={"https://github.com/MING-CHUNLee"}
                    icon={<GithubOutlined />}
                    onClick={() => this.enterLoading(1)}
                    block
                    >
                    Check MING github!
                    </Button>
                    </Space>
                    </Col>
            

                </Row>
                </Space>
            </Col>
            
            <Col xs={{span: 24}} sm={{span:24}} md={{span:16}}>
            <div>
                
                        就讀臺中科技大學資訊管理系。
                        樂於學習專業科目與精進外語能力，多次擔任分組組長與簡報人員，擁有良好的時間管理能力與自律能力，至今無未通過的學科並保持於班上前段班，妥善平衡課業與興趣探索。 
                        興趣為閱讀書籍與藝術涵養與培育，至106年入學以來總共借閱 222 本書籍與電影片。 
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
                <Timeline>
                    {workexps.map((worksexp)=>(
                        <Timeline.Item dot={ <SmileTwoTone twoToneColor="#eb2f96" />}>
                        <Card title={worksexp.title} extra={ <Button type="primary" onClick={ showModal}>Detail</Button>}>
                            <span key={worksexp.id}>{worksexp.period}</span>
                            <p key={worksexp.id}>{worksexp.describe}</p>
                        </Card>
                        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <p>Some contents...</p>
                                <img src={worksexp.url} alt="myface" className="myface" />
                        </Modal>
                        modal.destroy();
                        </Timeline.Item>
                        
                    ))}
                </Timeline>
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