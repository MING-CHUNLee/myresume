/*
 * @Author: your name
 * @Date: 2022-03-21 11:55:18
 * @LastEditTime: 2022-03-21 17:24:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myresume\src\pages\Home\components\License.js
 */


const License =(prop)=>{
    console.log(prop)
    return (
                <div>
                    <h4>{prop.license.name}</h4>
                    <h5>{prop.license.issueDate}</h5>
                </div>
            )
}

export default License