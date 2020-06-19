import React, { useState } from 'react';
import { Affix, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Logo from '../Logo';

const { SubMenu } = Menu;

function Navigation() {
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
              <a className="link" href="/"><span>Home</span></a>
            </span>
          }
        >
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <a className="link" href="/gallery"><span>Gallery</span></a>
            </span>
          }
        >
        </SubMenu>
        <SubMenu key="sub2" title="About">
          <Menu.Item key="5"><a className="link" href="/style">Style</a></Menu.Item>
          <Menu.Item key="6"><a className="link" href="/bio">Bio</a></Menu.Item>
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

export default Navigation;