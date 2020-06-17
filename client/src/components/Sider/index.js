import React, { useState } from 'react';
import { Affix, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Logo from '../Logo';

const { SubMenu } = Menu;

function Sider() {
  const [top, setTop] = useState(10);

  function handleClick(e) {
    console.log('click ', e);
  };

    return (
      <div>
      <Affix offsetTop={top}>
      <Logo />
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <span>Home</span>
            </span>
          }
        >
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <span>Gallery</span>
            </span>
          }
        >
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <span>Bio</span>
            </span>
          }
        >
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <span>Inquiries</span>
            </span>
          }
        >
        </SubMenu>
      </Menu>
      </Affix>
      </div>
    );
}

export default Sider;