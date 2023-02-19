import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Store from '../context/GlobalContext';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  {
    type: 'divider',
  },
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
  {
    type: 'divider'
  },
  getItem('Logout', '15')
];
const Sidebar = () => {

  const { state, dispatch } = useContext(Store);
  
  const onClick = (e) => {
    if(e.key == '15') {
    dispatch({type: 'setUser', user: undefined})
    dispatch({type: 'login', loggedIn: false})
    localStorage.clear()
    }
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
        height: '100vh'
      }}
      mode="inline"
      items={items}
    />
  );
};
export default Sidebar;