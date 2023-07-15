import { act, render, screen, waitFor } from "@testing-library/react";
import { AddTopic } from "./AddTopic.component";
import { ECategories } from "../../../models/interfaces";
import userEvent from "@testing-library/user-event";

describe("AddTopic component", () => {
  const renderApp = () => {
    render(<AddTopic activeTab={ECategories.ALL} reRender={() => {}} />);
  };
  test("renders AddTopic component", () => {
    renderApp();
    const linkElement = screen.getByText(/Add Topic/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("dialog opens when add topic is clicked", async () => {
    renderApp();
    const dialogButton = screen.getByRole("button", { name: /Add Topic/i });
    userEvent.click(dialogButton);
    setTimeout(() => {
      const heading = screen.getByRole("h3", { name: /Add Topic to/i });
      expect(heading).toBeInTheDocument();
    }, 1000);
  });
  test("add button is disabled initially", async () => {
    renderApp();
    const dialogButton = screen.getByRole("button", { name: /Add Topic/i });
    userEvent.click(dialogButton);
    setTimeout(async () => {
      const addButton = await screen.findByTestId("addTopicButton");
      return expect(addButton).toBeDisabled();
    }, 1000);
  });
  test("add button is enabled when topic is entered", async () => {
    renderApp();
    const dialogButton = screen.getByRole("button", { name: /Add Topic/i });
    userEvent.click(dialogButton);
    setTimeout(async () => {
      const topicInput = await screen.findByTestId("topicInput");
      userEvent.type(topicInput, "test topic");
      const addButton = await screen.findByTestId("addTopicButton");
      return expect(addButton).toBeEnabled();
    }, 1000);
  });
});
