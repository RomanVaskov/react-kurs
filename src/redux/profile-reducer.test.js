import { profileReducer, addPostItem, deletePostItem } from './profile-reducer';

let initialState = {
  postsData: [
    { id: 1, message: "Hello PHP", likesCount: 10 },
    { id: 2, message: "Hello PHP", likesCount: 11 },
    { id: 3, message: "Hello VUE", likesCount: 15 },
    { id: 4, message: "Hello REACT", likesCount: 17 }
  ]
}

it('length of posts should be incremented', () => {
  //1. test data
  let action = addPostItem("Hello, my dear friend!!");

  //2. action
  let newState = profileReducer(initialState, action);

  //3. expectation
  expect(newState.postsData.length).toBe(5);
});

it('message of post should be changed', () => {
  //1. test data
  let action = addPostItem("Hello, my dear friend!!");

  //2. action
  let newState = profileReducer(initialState, action);

  //3. expectation
  expect(newState.postsData[4].message).toBe("Hello, my dear friend!!");
});

it('after deleting length of message should be decrement', () => {
  //1. test data
  let action = deletePostItem(1);

  //2. action
  let newState = profileReducer(initialState, action);

  //3. expectation
  expect(newState.postsData.length).toBe(3);
});

it('after deleting length of message should not be decrement if id is incorrect', () => {
  //1. test data
  let action = deletePostItem(100);

  //2. action
  let newState = profileReducer(initialState, action);

  //3. expectation
  expect(newState.postsData.length).toBe(4);
});
