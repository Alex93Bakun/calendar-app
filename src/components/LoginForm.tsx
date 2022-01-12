import React, { FC } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { rules } from '../utils/rules';

const LoginForm: FC = () => {
    return (
        <Form
            name="basic"
            labelCol={{ span: 9 }}
            wrapperCol={{ span: 16 }}
            autoComplete="off"
        >
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[
                    rules.required('Пожалуйста, введите имя пользователя!'),
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Пожалуйста, введите пароль!')]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
