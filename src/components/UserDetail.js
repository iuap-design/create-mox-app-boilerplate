import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import {
    Con,
    Navbar
} from 'tinper-bee';

import {
    observer,
    inject,
} from 'tinper-mox';

let { Header, Brand, Toggle, Collapse, Nav, NavItem } = Navbar;


@inject('user')
@observer
export default class UserDetail extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
    }

    logout = () => {
        this.props.user.logout();
    }

    render() {
        return (
            <div>
                <Navbar inverse >
                    <Header>
                        <Brand>
                            <a href="#">TINPER-MOX</a>
                        </Brand>
                        <Toggle />
                    </Header>

                    <Collapse>
                        <Nav>
                            <NavItem eventKey={1}>
                                选项
                            </NavItem>
                            <NavItem eventKey={2}>
                                选项
                            </NavItem>
                        </Nav>

                        <Nav pullRight>
                            <NavItem eventKey={3}>
                                { this.props.user.username }
                            </NavItem>
                            <NavItem eventKey={4} onClick={this.logout}>
                                logout
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Con>
                    Welcome! {this.props.user.username}
                </Con>
            </div>
        );
    }
}
