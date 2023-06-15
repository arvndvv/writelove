import React, { useState, useEffect } from "react";
import { Tabs } from "../../components/tab/Tabs.component";
import { WriteTable } from "../../components/table/Table.component";
import { ECategories, ITopic } from "../../models/interfaces";
import { AddTopic } from "../../components/form/addTopic/AddTopic.component";
import { getTopicsByType } from "../../services/topics.service";

export const Recommendations = () => {
  const [activeTab, setActiveTab] = useState(ECategories.ALL);
  const [tableData, setTableData] = useState<ITopic[]>([]);
  useEffect(() => {
    setTableData(getTopicsByType(activeTab));
  }, [activeTab]);
  const reRender = () => {
    setTableData(getTopicsByType(activeTab));
  };
  return (
    <div className="recommendations py-5">
      <h1 className="text-2xl font-medium my-5">Categories</h1>
      <div className="tabs flex gap-2 flex-wrap justify-between items-center mb-5">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}></Tabs>
        <AddTopic activeTab={activeTab} reRender={reRender} />
      </div>
      <WriteTable tableData={tableData}></WriteTable>
    </div>
  );
};
