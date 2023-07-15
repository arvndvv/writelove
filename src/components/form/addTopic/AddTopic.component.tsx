import React, { useEffect, useState } from "react";
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
    setTopic("");
    setKeywords([]);
    setOpen(false);
  };
  useEffect(() => {
    setTopic("");
    setKeywords([]);
  }, [open]);
  return (
    <>
      <button onClick={() => setOpen(true)} data-testid="add-topic">
        Add Topic
      </button>
      {/* <BlogButton onClick={() => setOpen(true)}>Add Topic</BlogButton> */}
      <WriteModal open={open} setOpen={setOpen}>
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-3">
          Add Topic to{" "}
          <span style={{ textTransform: "capitalize" }}>
            {activeTab !== ECategories.ALL ? activeTab : ECategories.CUSTOM}
          </span>
        </h3>
        <Input value={topic} setValue={setTopic} testid="topicInput" />
        <Keywords keywords={keywords} setKeywords={setKeywords} />
        <button
          className="btn btn-cta mt-2 float-right disabled:opacity-50 disabled:pointer-events-none"
          onClick={handleAddTopic}
          disabled={!topic}
          data-testid="addTopicButton"
        >
          Add
        </button>
      </WriteModal>
    </>
  );
}
