/*
 * @Author: your name
 * @Date: 2022-03-28 11:45:37
 * @LastEditTime: 2022-03-28 15:15:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myresume\src\pages\Home\components\ContactEmail.js
 */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { message,Form,Row, Col,Button,Space,Input } from 'antd';

const { TextArea } = Input;

export const ContactUs = () => {
const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r37qfj4', 'template_72iytmh', e.target, 'tc62l1C-WQwcxdnGn')
    .then((result) => {
        console.log(result.text);
        message.success('Send email success！', 5);
    }, (error) => {
        console.log(error.text);
        message.error('An error occurred, please try again',5);
    });
    e.target.reset();
    e.target.resetFields();
    

};

return (
    <form id="contact" ref={form} onSubmit={sendEmail}>
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Row>
            <Col span={10}> <label>Name</label></Col>
            <Col span={14}> <Input type="text" name="user_name" placeholder="Your Name" /></Col>
        </Row>
        <Row>
            <Col span={10}><label>Email</label></Col>
            <Col span={14}> <Input type="email" name="user_email" /></Col>
        </Row>
        <Row>
            <Col span={10}>  <label>Message</label></Col>
            <Col span={14}><TextArea showCount maxLength={400} name="message"/></Col>
        </Row>
        <Button type="primary" htmlType="submit" >
                Send
        </Button>
        </Space>
    </form>
);
};


