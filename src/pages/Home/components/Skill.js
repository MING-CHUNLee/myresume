/*
 * @Author: your name
 * @Date: 2022-03-21 11:55:18
 * @LastEditTime: 2022-03-23 14:59:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myresume\src\pages\Home\components\Skill.js
 */

import { Row, Col} from 'antd';
const Skill =(prop)=>{
    console.log(prop)
    const row=[prop.skill.row];
    const level=[prop.skill.level];
    console.log(row)
    return (
                <div>
                {row.map((row)=>(
                    <>
                    <Row>
                        <Col span={12}>
                            <h3>{prop.skill.id}</h3>
                        </Col>
                        <Col span={12}>
                        {/* 畫圈圈 */}
                        <div class="circle">
                            {level.map((level)=>(
                                <>
                                    {level.map((level)=>(
                                <>
                                        <div className={level}></div>
                                </>
                                    ))}
                                </>
                            ))}
                            </div>
                        </Col>
                    </Row>
                    {/* 跑Skill細項 */}
                        {row.map((row)=>(
                            <>
                            <h4 key={prop.skill.id}>    ◆ {row}</h4>
                            </>
                        ))}
                        <br/>
                    </>
                ))}
                </div>

            )
}

export default Skill