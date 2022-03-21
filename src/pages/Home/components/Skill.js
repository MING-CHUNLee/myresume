/*
 * @Author: your name
 * @Date: 2022-03-21 11:55:18
 * @LastEditTime: 2022-03-21 17:24:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myresume\src\pages\Home\components\Skill.js
 */


const Skill =(prop)=>{
    console.log(prop)
    const row=[prop.skill.row];
    console.log(row)
    return (
    
        /* {skill.map((skill)=>(
            <div>
                <h2 key={skill.id}>{skill.id}</h2>
            </div>
        ))}
         */
                <div>
                {console.log("輸出陣列"+row)}
                {row.map((row)=>(
                    <>
                    <h2>{prop.skill.id}</h2>
                        {row.map((row)=>(
                        
                            <h4 key={prop.skill.id}>    ◆ {row}</h4>
                            
                        ))}
                        <br/>
                    </>
                ))}
                </div>

            )
}

export default Skill