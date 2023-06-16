import React, { useState } from "react";
import WriteModal from "../../dialog/blank-dialog/dialog.component";
import { BlogButton } from "../../button/blogButton/BlogButton.component";
import { Input } from "../input/Input.component";
import { Keywords } from "../keywords/Keywords.component";
import { ECategories } from "../../../models/interfaces";
import { addTopic } from "../../../services/topics.service";

export function AddTopic({
  activeTab,
  reRender,
}: {
  activeTab: ECategories;
  reRender: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [topic, setTopic] = useState<string>("");
  const handleAddTopic = () => {
    addTopic(
      { name: topic, keywords },
      activeTab === ECategories.ALL ? ECategories.CUSTOM : activeTab
    );
    reRender();
    setOpen(false);
  };
  return (
    <>
      <BlogButton onClick={() => setOpen(true)}>Add Topic</BlogButton>
      <WriteModal open={open} setOpen={setOpen}>
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-3">
          Add Topic to{" "}
          <span style={{ textTransform: "capitalize" }}>
            {activeTab !== ECategories.ALL ? activeTab : ECategories.CUSTOM}
          </span>
        </h3>
        <Input topic={topic} setTopic={setTopic} />
        <Keywords keywords={keywords} setKeywords={setKeywords} />
        <button
          className="btn btn-cta mt-2 float-right"
          onClick={handleAddTopic}
        >
          Add
        </button>
      </WriteModal>
    </>
  );
}
