import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@example.com',
  },
];

const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    addPosts: (state, action) => {
      state.push(...action.payload);
    },
    addPost: (state, action) => {
      const { id, firstName, lastName, email } = action.payload;
      state.push({ id, firstName, lastName, email });
    },
    updatePost: (state, action) => {
      const { id, firstName, lastName, email } = action.payload;
      const userIndex = state.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state[userIndex].firstName = firstName;
        state[userIndex].lastName = lastName;
        state[userIndex].email = email;
      }
    },
    deletePost: (state, action) => {
      const userId = action.payload;
      return state.filter((user) => user.id !== userId);
    },
  },
});

export const { addPosts, addPost, updatePost, deletePost } = userSlice.actions;
export default userSlice.reducer;
