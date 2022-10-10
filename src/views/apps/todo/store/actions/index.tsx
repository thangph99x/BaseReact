import axios from "axios";

// ** Get Tasks
export const getTasks = (params: any) => (dispatch: any) =>
  axios.get("/apps/todo/tasks", { params }).then((res) => {
    dispatch({
      type: "GET_TASKS",
      tasks: res.data,
      params,
    });
  });

// ** Re-order Tasks on drag
export const reOrderTasks = (tasks: any) => (dispatch: any) =>
  dispatch({ type: "REORDER_TASKS", tasks });

// ** ADD Task
export const addTask = (task: any) => (dispatch: any, getState: any) => {
  axios
    .post("/apps/todo/add-tasks", { task })
    .then((res) => {
      dispatch({
        type: "ADD_TASK",
        task: res.data,
      });
    })
    .then(dispatch(getTasks(getState().todo.params)));
};

// ** Update Tasks
export const updateTask = (task: any) => (dispatch: any, getState: any) => {
  axios
    .post("/apps/todo/update-task", { task })
    .then((res) => {
      dispatch({
        type: "UPDATE_TASK",
        task: res.data,
      });
    })
    .then(dispatch(getTasks(getState().todo.params)));
};

// ** Delete Task
export const deleteTask = (taskId: any) => (dispatch: any, getState: any) => {
  axios
    
    .delete("/apps/todo/delete-task", { taskId })
    .then((res) => {
      dispatch({
        type: "DELETE_TASK",
        task: res.data,
      });
    })
    .then(() => dispatch(getTasks(getState().todo.params)));
};

// ** Select Task
export const selectTask = (task: any) => (dispatch: any) =>
  dispatch({ type: "SELECT_TASK", task });
