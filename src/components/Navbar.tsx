import React, { FC } from 'react';
import { Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RoutNames } from '../routes';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Navbar: FC = () => {
    const navigate = useNavigate();
    const { isAuth } = useTypedSelector((state) => state.auth);

    const goToLoginHandler = () => {
        navigate(RoutNames.LOGIN);
    };

    const signOutHandler = () => {
        console.log('sign out');
    };

    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth ? (
                    <>
                        <div style={{ color: '#fff' }}>Alex</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item onClick={signOutHandler} key={1}>
                                Выйти
                            </Menu.Item>
                        </Menu>
                    </>
                ) : (
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item onClick={goToLoginHandler} key={1}>
                            Логин
                        </Menu.Item>
                    </Menu>
                )}
            </Row>
        </Layout.Header>
    );
};

export default Navbar;
