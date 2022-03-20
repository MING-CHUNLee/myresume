import BasicInfo from "./components/BasicInfo"
import Skills from "./components/Skills"
import Competitions from "./components/Competitions";
import WorksExps from "./components/WorksExps";
import { Row, Col, Divider } from 'antd';
import './index.css';

import myface from './image/myface.png';
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
                    <BasicInfo/>
            </Col>
        </Row>
        <h2>Skills</h2>
        <Row>
            <Skills/>
        </Row>
        <h2>Competition Results</h2>
        <Row>
            <Competitions/>
        </Row>
        <h2>Work Experience</h2>
        <Row>
            <WorksExps/>
        </Row>
    </div>)
        }

export default Home