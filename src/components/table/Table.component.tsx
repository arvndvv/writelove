import React, { useState } from "react";
import { ITopic } from "../../models/interfaces";
import "./Table.styles.scss";
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,
} from "@table-library/react-table-library/table";
import { usePagination } from "@table-library/react-table-library/pagination";

import { BlogButton } from "../button/blogButton/BlogButton.component";
import { deleteTopic } from "../../services/topics.service";
import ConfirmModal from "../dialog/confirm-dialog/ConfirmDialog.component";
import Overlay from "../dialog/editor-overlay/Overlay.component";

export const WriteTable: (props: { tableData: ITopic[] }) => any = ({
  tableData,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<ITopic | null>(null);
  const [openEditor, setOpenEditor] = useState(false);
  const data = { nodes: tableData };
  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 5,
    },
  });

  const handleDelete = (topic: ITopic) => {
    setIsDialogOpen(true);
    setSelectedTopic(topic);
  };
  const confirmDelete = () => {
    if (!selectedTopic) return;
    deleteTopic(selectedTopic.id);
    setIsDialogOpen(false);
  };

  const handleWrite = (topic: ITopic) => {
    setSelectedTopic(topic);
    setOpenEditor(true);
  };

  return (
    <>
      <Overlay
        openEditor={openEditor}
        setOpenEditor={setOpenEditor}
        topic={selectedTopic}
      />
      <ConfirmModal
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        title="Delete Topic"
        description="Are you sure you want to delete this topic from recommended topics
            list? Topic will be permanently removed. This action cannot be
            undone."
      >
        <button
          className="btn btn-transparent"
          onClick={() => setIsDialogOpen(false)}
        >
          Cancel
        </button>
        <button className="btn btn-cta" onClick={confirmDelete}>
          Confirm
        </button>
      </ConfirmModal>
      <Table
        data={data}
        pagination={pagination}
        layout={{ custom: true, horizontalScroll: true }}
      >
        {(tableList: any) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>Recommended Topics</HeaderCell>
              </HeaderRow>
            </Header>
            <Body>
              {tableList.map((item: ITopic) => (
                <Row key={item.id} item={item}>
                  <Cell>
                    <div className="topic__container pr-[10%] flex relative">
                      <div className="topic">
                        <span className="topic__name">{item.name}</span>
                        <div className="topic__key-words">
                          {item.keywords.map(
                            (keyWord: string, index: number) => {
                              return (
                                <span className="topic__key-word" key={index}>
                                  {keyWord}
                                </span>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="topic__action absolute right-0 bg-white px-2 h-full flex items-center gap-2">
                        <BlogButton onClick={() => handleWrite(item)}>
                          Write
                        </BlogButton>
                        <span
                          onClick={() => handleDelete(item)}
                          className="material-icons text-red-600 cursor-pointer hover:text-red-800"
                        >
                          delete
                        </span>
                      </div>
                    </div>
                  </Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
      <div className="flex justify-between mt-1">
        <span className="px-2">
          Total Pages: {pagination.state.getTotalPages(data.nodes)}
        </span>

        <span>
          Page:{" "}
          {pagination.state
            .getPages(data.nodes)
            .map((_: any, index: number) => (
              <button
                className={` px-2 ${
                  pagination.state.page === index
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                key={index}
                type="button"
                onClick={() => pagination.fns.onSetPage(index)}
              >
                {index + 1}
              </button>
            ))}
        </span>
      </div>
    </>
  );
};
