import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import {
    Form,
    Col,
    Con,
    Row,
    FormControl,
    Label,
    FormGroup,
    Tile,
    Button,
    Dropdown,
    Modal
} from 'tinper-bee';

import {
    addModel,
    inject,
    observer,
} from 'tinper-mox';

import newAdded from '../models/newAdded';

//const MenuItem = Menu.Item;

import Menu from 'bee-menus';

const Item = Menu.Item;

console.log(Menu);

@inject('user')
@observer
export default class UserLogin extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
    }

    login() {
        this.props.user.login(findDOMNode(this.refs.username).value, findDOMNode(this.refs.password).value);
    }

    render() {
        const {
            user
        } = this.props;
        const {
            loading: loginLoading,
            error: loginError
        } = user.getActionState('login');

        let menu1 = (
            <Menu
                multiple
                onSelect={() => {}}>
                <Item key="1">借款合同</Item>
                <Item key="2">抵/质押合同</Item>
                <Item key="3">担保合同</Item>
                <Item key="4">联保合同</Item>
            </Menu>
        )

        const errorVal = user.loginError;

        return (
            <Con fluid>
                <Row style={{ textAlign: 'center', borderBottom: '1px solid #eee', height: 50, lineHeight: "50px" }}>
                    tinper-mox模板页面
                </Row>
                <Row style={{ marginTop: 200 }}>
                    <Col md={4} mdOffset={4}>
                        <Tile style={{ width: 300 }}>
                            <h3>登陆</h3>
                            <Form horizontal>
                                <FormGroup>
                                    <Label>用户名</Label>
                                    <FormControl
                                        ref="username"
                                        type="text"
                                        placeholder="请输入用户名"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>密码</Label>
                                    <FormControl
                                        ref="password"
                                        type="text"
                                        placeholder="请输入密码"
                                    />
                                </FormGroup>
                                {
                                    loginLoading
                                        ? <span>loading...</span>
                                        : <span style={{color: 'red'}}>{(loginError && loginError.message) || errorVal}</span>
                                }
                                <Button
                                    onClick={::this.login}
                                    shape="block"
                                    colors="primary">
                                    Login
                                </Button>
                                <Dropdown
                                    trigger={['click']}
                                    overlay={menu1}
                                    animation="slide-up"
                                    onVisibleChange={() => {}}
                                >
                                    <Button colors='primary'>带有分割线的下拉</Button>
                                </Dropdown>
                            </Form>
                        </Tile>
                    </Col>
                </Row>
            </Con>
        );
    }

    componentDidMount() {
        addModel({
            newAdded,
        });
    }
}
