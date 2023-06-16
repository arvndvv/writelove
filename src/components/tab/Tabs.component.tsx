import "./Tabs.styles.scss";
import { categories } from "../../data/tabs.data";
export const Tabs = (props: any) => {
  return (
    <div className="tab">
      {categories.map((category, index) => {
        return (
          <div
            className={`tab__item ${
              props.activeTab === category.value && "tab__item--active"
            }`}
            onClick={() => props.setActiveTab(category.value)}
            key={index}
          >
            {category.name}
          </div>
        );
      })}
    </div>
  );
};
