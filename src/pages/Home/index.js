/*
 * @Author: your name
 * @Date: 2022-03-21 11:55:18
 * @LastEditTime: 2022-03-30 17:04:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myresume\src\pages\Home\index.js
 */

import Skill from './components/Skill';
import License from './components/License';
import Model from './components/Model';
import { ContactUs } from './components/ContactEmail';
import { message,Row, Col,Space,Timeline,Button,Drawer, Modal,Card, Form,Divider} from 'antd';
import React, { useEffect, useState } from "react";
import './index.css';
import {SmileTwoTone,MailOutlined,PhoneOutlined,GithubOutlined} from '@ant-design/icons';
import myface from './image/myface.png';
import workexps from './json/worksexps.json';
import competitions from './json/competitions.json';
import skills from './json/skills.json';
import licenses from './json/licenses.json';
import Marian from './image/Marian.jpg'
import Tdoc from './image/TDOC.jpg'


const Home =()=>{
    
    const [visible, setVisible] = useState(false);
       // 抽屜的
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    // 對話框的
    const [isModal1, setIsModal1] = useState(false);
    const [isModal2, setIsModal2] = useState(false);
    
    const showModal = (prop) => {
        
      
        if(prop===0){
            message.error('尚未結束',5);
        }else if(prop===1){
            setIsModal1(true);
        }else if(prop===2){
            setIsModal2(true)
        }
    };

    const handleOk = (prop) => {
        if(prop===1){
            setIsModal1(false);
            console.log('=== show modal 1===',prop);
        }else if(prop===2){
            setIsModal2(false)
            console.log('=== show modal 2===',prop);

        }
};

    const handleCancel = (prop) => {
        if(prop===1){
            setIsModal1(false);
            console.log('=== show modal 1===',prop);
        }else if(prop===2){
            setIsModal2(false)
            console.log('=== show modal 2===',prop);

        }
};
    


    return (
    <div className="resume">
            
        <Row className='basic'>
            <Col xs={{span: 24}} md={{span:8}} lg={{span:9}}>


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
                    <Col xs={{span: 24 , offset:9}} sm={{span: 24 , offset:7}} md={{span: 24, offset:6}} lg={{span:24,offset:7}} >
                        <h1>李明錞</h1>
                    </Col>
                    <Col xs={{span: 24, offset:2}} sm={{span: 24}} md={{span: 20}} lg={{span:24}}>
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
            
            <Col xs={{span: 24}} sm={{span:24}} md={{span:16}} lg={{span:15}}>
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
                    {workexps.map((worksExp,index)=>(
                        
                        <Timeline.Item dot={ <SmileTwoTone twoToneColor="#eb2f96" />}>
                        <Card title={worksExp.title} extra={ <Button type="primary" onClick={() => showModal(index)}>Detail</Button>}>
                            <span key={worksExp.id}>{worksExp.period}</span>
                            <p key={worksExp.id}>{worksExp.describe}</p>
                        </Card>
                
                        </Timeline.Item>
                        
                    ))}
                </Timeline>
                </Col>
        </Row>
        {/* 測試版
        <Row className='skill'> 
            <Col span={24}>
                <Timeline>
                    {workexps.map((worksExp,index)=>(
                        
                        <Timeline.Item dot={ <SmileTwoTone twoToneColor="#eb2f96" />}>
                        <Card title={worksExp.title} extra={ <Button type="primary" onClick={() => showModal(index)}>Detail</Button>}>
                            <span key={worksExp.id}>{worksExp.period}</span>
                            <p key={worksExp.id}>{worksExp.describe}</p>
                            <span key={index}>{index}</span>
                        </Card>
                        
                        <Model key={worksExp.id} worksExp={worksExp.url}></Model>
                        </Timeline.Item>
                        
                    ))}
                </Timeline>
                </Col>
        </Row> */}
        <Row className='h2BG'> 
                <h2>License</h2>
        </Row>
        <Row className='skill'> 
                        {licenses.map((license)=>(
                            <Col xs={{span: 24}} sm={{span: 24}}md={{span:12}}>
                                    <License key={license.id} license={license} />
                                </Col>
                        ))}
        </Row>
        <Modal title="瑪麗安生技有限公司實習生" visible={isModal1} onOk={() => handleOk(1)} onCancel={()=>handleCancel(1)}>
                <Divider><h2>紀錄照片</h2></Divider> 
                <img src={Marian} alt="myface"/>
                <Divider><h2>重要事件與紀錄</h2></Divider> 
                <ol>
                        <li>分析產品成分與目標客群後撰寫生技產品行銷文案</li>
                        <li>分析同行制定電商網站退換貨與網站隱私條款政策</li>
                        <li>Wordpress網站SEO優化</li>
                        <li>協助外語舞蹈教師與上層的溝通翻譯</li>
                        <li>經營Facebook與Instagram社群小編</li>
                </ol>

        </Modal>
        <Modal title="教育部補捐助計畫TDOC兼任助理工讀" visible={isModal2} onOk={() => handleOk(2)} onCancel={()=>handleCancel(2)}>
                <Divider><h2>紀錄照片</h2></Divider> 
                <img src={Tdoc} alt="myface"/>  
                <Divider><h2>重要事件與紀錄</h2></Divider> 
                <ol>
                        <li>iphone手機修復影片系列英文撰寫字幕與校搞</li>
                        <li>使用Word搭配Eexcel製作Outllook群發信件</li>
                        <li>協助電腦拆卸組裝教學直播拍攝現場</li>
                </ol>

        </Modal>

    </div>)
        }

export default Home