/*
 * @Author: your name
 * @Date: 2022-03-21 11:55:18
 * @LastEditTime: 2022-03-22 12:07:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myresume\src\pages\Home\components\License.js
 */
// import Excel from '../image/Excel.jpg';

const License =(prop)=>{
    console.log(prop.license.url2)
    console.log(typeof prop.license.url2);
    return (
                <div>
                    {/* <img src={Excel} alt={prop.license.name}/> */}
                    <img src={prop.license.url} alt={prop.license.name}/>
                    <h4>{prop.license.name}</h4>
                    <h5>{prop.license.issueDate}</h5>
                </div>
            )
}

export default License