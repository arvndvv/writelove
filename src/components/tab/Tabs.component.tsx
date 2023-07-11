import "./Tabs.styles.scss";
import { getAllCategories } from "../../services/topics.service";
import { useState } from "react";
import { Input } from "../form/input/Input.component";
import WriteModal from "../dialog/blank-dialog/dialog.component";
enum EOptions {
  DELETE = "delete",
  EDIT = "edit",
  ADD = "add",
  NONE = "none",
}
export const Tabs = (props: any) => {
  const categories = getAllCategories();
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(EOptions.NONE);
  const [openModal, setModalOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const handleMenuOpen = () => {
    setOptionsOpen((prev) => !prev);
  };
  const handleActiveOption = (option: EOptions) => {
    setActiveOption(option);
    setModalOpen(true);
    setOptionsOpen(false);
  };
  const handleAddCategory = () => {
    setModalOpen(false);
  };
  const handleCancel = () => {
    setActiveOption(EOptions.NONE);
  };

  return (
    <div className="tabs w-[80%] flex items-center gap-2">
      <WriteModal open={openModal} setOpen={setModalOpen}>
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-3">
          Add New Category
        </h3>
        <Input
          value={newCategory}
          setValue={setNewCategory}
          placeholder="category"
        />
        <button
          className="btn btn-cta mt-2 float-right"
          onClick={handleAddCategory}
        >
          Add
        </button>
      </WriteModal>
      <div className="tabs_container flex gap-1 sm:gap-3 overflow-x-auto max-w-[90%] ">
        {categories.map((category, index) => {
          return (
            <div
              className={`tab__item ${
                props.activeTab === category.value && "tab__item--active"
              }`}
              onClick={() => props.setActiveTab(category.value)}
              key={index}
            >
              <span>{category.name}</span>
            </div>
          );
        })}
      </div>
      <div className="options w-[10%] relative">
        <button className="material-icons" onClick={handleMenuOpen}>
          more_vert
        </button>

        <div
          className={`menu absolute bg-white w-[200%] shadow-lg border-2 border-gray-500 transition-all duration-200 ease-in-out z-50 opacity-0 pointer-events-none top-[50%] ${
            optionsOpen ? "opacity-100 pointer-events-auto top-[100%]" : ""
          }`}
        >
          <button
            className="menu__item flex items-center hover:bg-slate-200 p-2 w-full"
            onClick={() => {
              handleActiveOption(EOptions.ADD);
            }}
          >
            <span className="material-icons">add</span>Add Category
          </button>
          <button
            className="menu__item flex items-center hover:bg-slate-200 p-2 w-full"
            onClick={() => {
              handleActiveOption(EOptions.EDIT);
            }}
          >
            <span className="material-icons">edit</span>Edit Category
          </button>
          <button
            className="menu__item flex items-center hover:bg-slate-200 p-2 w-full"
            onClick={() => {
              handleActiveOption(EOptions.DELETE);
            }}
          >
            <span className="material-icons">delete</span>Delete Category
          </button>
        </div>
      </div>
    </div>
  );
};
