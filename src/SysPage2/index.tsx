import React from'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MyTitle from './MyTitle';
import Sidebar from './Sidebar';
import Shouye from './Shouye';

const SysPage2 = () => {
  // 定义左侧栏的标题和内容
  const sidebarTitle: string = "左侧栏标题";

  // 定义动态菜单项数据
  const menuItems = [
    { label: "首页", link: "/Shouye" },
  ];

  return (
    <Router>
      <div className="h-screen flex flex-col">
        <MyTitle />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar title={sidebarTitle} menuItems={menuItems} />
          <div className="flex-1 bg-gray-100 p-4 overflow-auto">
            <Routes>
              <Route path="/Shouye" element={<Shouye />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default SysPage2;