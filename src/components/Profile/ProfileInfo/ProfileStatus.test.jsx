import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="First APP" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("First APP");
  });

  test("after creation span should be displayed", () => {
    const component = create(<ProfileStatus status="First APP" />);
    const instance = component.root;
    let span = instance.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation input should be displayed", () => {
    const component = create(<ProfileStatus status="First APP" />);
    const instance = component.root;
    expect(() => {
      let input = instance.findByType("input");
    }).toThrow();
  });

  test("after creation span should be displayed", () => {
    const component = create(<ProfileStatus status="First APP" />);
    const instance = component.root;
    let span = instance.findByType("span");
    expect(span.children[0]).toBe("First APP");
  });

  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="First APP" />);
    const instance = component.root;
    let span = instance.findByType("span");
    span.props.onDoubleClick();
    let input = instance.findByType("input");
    expect(input.props.value).toBe("First APP");
  });

  test("input should be displayed in editMode instead of span", () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="First APP" updateUserStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
