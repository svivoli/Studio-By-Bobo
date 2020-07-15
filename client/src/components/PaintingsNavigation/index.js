import React, { useState } from 'react';
import { Affix } from 'antd';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LogoNav from '../LogoNav';
import SocialIcons from '../SocialIcons';

// const { SubMenu } = Menu;

function PaintingsNavigation() {
  const [top, setTop] = useState(10);
  const [open, setOpen] = useState(false);

  // function handleClick(e) {
  //   console.log('click ', e);
  // };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Affix offsetTop={top}>
        <a href="/"><LogoNav /></a>
        {/* <Menu
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
          <SubMenu className="link" key="sub2" title="About">
            <Menu.Item key="5"><a className="link" href="/style">Style</a></Menu.Item>
            <Menu.Item key="6"><a className="link" href="/bio">Bio</a></Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <a className="link" href="/inquiries"><span>Inquiries</span></a>
              </span>
            }
          >
          </SubMenu>
        </Menu> */}
        <div className="nav">
        <List component="nav" >
          <ListItem><a className="link" href="/paintingshome">Home</a></ListItem>
          <ListItem><a className="link" href="/paintingsgallery">Gallery</a></ListItem>
          <ListItem onClick={handleClick}>
            <a className="link">About</a>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div">
              <div className="sub-link">
              <a className="link" href="/paintingsstyle">Style</a>
              </div>
              <div className="sub-link">
              <a className="link" href="/paintingsbio">Bio</a>
              </div>
            </List>
          </Collapse>
          <ListItem><a className="link" href="/paintingsinquiries">Inquiries</a></ListItem>
          <ListItem><a className="link" href="/drawingshome">Drawings</a></ListItem>
        </List>
        </div>
        <SocialIcons />
        </Affix>
    </div>
  );
}

export default PaintingsNavigation;