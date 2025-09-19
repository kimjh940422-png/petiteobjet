import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RecomCard from "../component/RecomCard";

const Categories = () => {
  return (
    <div className="contents">
      <h2>카테고리</h2>
      <Tabs>
        <TabList>
          <Tab>인테리어 소품</Tab>
          <Tab>엽서/액자/캘린더</Tab>
          <Tab>향초/디퓨저</Tab>
        </TabList>

        <TabPanel>
          <h2>집꾸미기 오브제 소품🔮</h2>
        </TabPanel>
        <TabPanel>
          <h2>레트로 빈티지 포스터📜</h2>
        </TabPanel>
        <TabPanel>
          <h2>향기나는 방향제🪔</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
