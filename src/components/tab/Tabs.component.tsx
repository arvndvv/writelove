import "./Tabs.styles.scss";
import {
  addCategory,
  deleteCategory,
  editCategory,
  getAllCategories,
} from "../../services/topics.service";
import { useEffect, useState } from "react";
import { Input } from "../form/input/Input.component";
import WriteModal from "../dialog/blank-dialog/dialog.component";
import { ICategory } from "../../models/interfaces";
enum EOptions {
  DELETE = "delete",
  EDIT = "edit",
  ADD = "add",
  NONE = "none",
}
export const Tabs = (props: any) => {
  const [categories, setCategories] = useState<ICategory[]>(() =>
    getAllCategories()
  );
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(EOptions.NONE);
  const [openModal, setModalOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    setSelectedCategory("");
  }, [openModal]);
  const handleMenuOpen = () => {
    setOptionsOpen((prev) => !prev);
  };
  const handleActiveOption = (option: EOptions) => {
    setActiveOption(option);
    setModalOpen(true);
    setOptionsOpen(false);
  };

  const handleAddCategory = () => {
    addCategory(newCategory);
    setNewCategory("");
    setCategories(getAllCategories());
    setModalOpen(false);
  };
  const handleEditCategory = () => {
    if (!selectedCategory) return;
    editCategory(selectedCategory, newCategory);
    setCategories(getAllCategories());
    setModalOpen(false);
    setNewCategory("");
  };
  const handleDelete = () => {
    if (!selectedCategory) return;
    deleteCategory(selectedCategory);
    setCategories(getAllCategories());
    props.setActiveTab("all");
    setModalOpen(false);
  };
  const handleOptionChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleAddEditCategory = () => {
    if (activeOption === EOptions.ADD) {
      handleAddCategory();
    } else {
      handleEditCategory();
    }
  };

  return (
    <>
      <div className="tabs w-full sm:w-[80%] flex items-center gap-4">
        <WriteModal open={openModal} setOpen={setModalOpen}>
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-3">
            {activeOption === EOptions.ADD
              ? "Add New Category"
              : activeOption === EOptions.EDIT
              ? "Edit Category"
              : "Delete Category"}
          </h3>
          {activeOption !== EOptions.ADD && (
            <select
              value={selectedCategory}
              onChange={handleOptionChange}
              className="w-full border-b-2 border-blue-300 mb-4 pb-2 outline-none"
              placeholder="category"
            >
              <option value="" disabled selected>
                Category
              </option>
              {categories.map((category, index) => {
                return (
                  !["all", "custom"].includes(category.value) && (
                    <option value={category.value} key={index}>
                      {category.name}
                    </option>
                  )
                );
              })}
            </select>
          )}
          {activeOption !== EOptions.DELETE && (
            <Input
              value={newCategory}
              setValue={setNewCategory}
              placeholder={
                activeOption === EOptions.ADD ? "category" : "New name"
              }
            />
          )}

          {activeOption === EOptions.DELETE ? (
            <>
              <small className="text-red-600 block w-full">
                all topics under this category will be deleted. This action is
                not reversible.
              </small>
              <button
                className="btn btn-cta mt-2 float-right"
                onClick={handleDelete}
              >
                Delete
              </button>
            </>
          ) : (
            <button
              className="btn btn-cta mt-2 float-right"
              onClick={handleAddEditCategory}
            >
              {activeOption === EOptions.ADD ? "Add" : "Update"}
            </button>
          )}
        </WriteModal>
        <div className="tabs_container flex gap-1 sm:gap-3 overflow-x-auto max-w-[90%] ">
          {categories.map((category, index) => {
            return (
              <div
                className={`tab__item whitespace-nowrap ${
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
            className={`menu absolute bg-white sm:w-[400%] shadow-lg border-2 border-gray-500 transition-all duration-200 ease-in-out z-50 opacity-0 pointer-events-none top-[50%] -left-[450%] sm:left-0 ${
              optionsOpen
                ? "opacity-100 pointer-events-auto top-[120%] sm:top-[100%]"
                : ""
            }`}
          >
            <button
              className="menu__item flex items-center  hover:bg-slate-200 p-2 w-full"
              onClick={() => {
                handleActiveOption(EOptions.ADD);
              }}
            >
              <span className="material-icons">add</span>Add Category
            </button>
            <button
              className="menu__item flex items-center  hover:bg-slate-200 p-2 w-full"
              onClick={() => {
                handleActiveOption(EOptions.EDIT);
              }}
            >
              <span className="material-icons">edit</span>&nbsp;Edit Category
            </button>
            <button
              className="menu__item flex items-center  hover:bg-slate-200 p-2 w-full"
              onClick={() => {
                handleActiveOption(EOptions.DELETE);
              }}
            >
              <span className="material-icons">delete</span>Delete Category
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
