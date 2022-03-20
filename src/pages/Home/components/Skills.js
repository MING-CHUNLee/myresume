import { Row, Col, Divider } from 'antd';
import Skill from './Skill';
import { useState } from 'react';




const Skills =()=>{
    const [skills,setSkills]=useState([
        {
            id:'web',
            row:[1,2,3],
        },
        {
            id:'database',
            row:[4,5,6],
        },
    ])
    return (
        <div>
            <Col span={8}>
                {skills.map((skill)=>(
                    <Skill key={skill.id} skill={skill.row} />
                ))}
            </Col>
        </div>
            )
}

export default Skills