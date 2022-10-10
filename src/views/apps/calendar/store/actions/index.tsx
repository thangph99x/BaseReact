import axios from "axios";

// ** Fetch Events
export const fetchEvents = (calendars: any) => (dispatch: any) => {
  
  axios.get("/apps/calendar/events", { calendars }).then((response) => {
    dispatch({
      type: "FETCH_EVENTS",
      events: response.data,
    });
  });
};

// ** Add Event
export const addEvent = (event: any) => (dispatch: any, getState: any) => {
  axios.post("/apps/calendar/add-event", { event }).then(() => {
    dispatch({
      type: "ADD_EVENT",
    });
    dispatch(fetchEvents(getState().calendar.selectedCalendars));
  });
};

// ** Update Event
export const updateEvent = (event: any) => (dispatch: any) => {
  axios.post("/apps/calendar/update-event", { event }).then(() => {
    dispatch({
      type: "UPDATE_EVENT",
    });
  });
};

// ** Filter Events
export const updateFilter = (filter: any) => (dispatch: any, getState: any) => {
  dispatch({
    type: "UPDATE_FILTERS",
    filter,
  });
  dispatch(fetchEvents(getState().calendar.selectedCalendars));
};

// ** Add/Remove All Filters
export const updateAllFilters =
  (value: any) => (dispatch: any, getState: any) => {
    dispatch({
      type: "UPDATE_ALL_FILTERS",
      value,
    });
    dispatch(fetchEvents(getState().calendar.selectedCalendars));
  };

// ** remove Event
export const removeEvent = (id: any) => (dispatch: any) => {
  
  axios.delete("/apps/calendar/remove-event", { id }).then(() => {
    dispatch({
      type: "REMOVE_EVENT",
    });
  });
};

// ** Select Event (get event data on click)
export const selectEvent = (event: any) => (dispatch: any) => {
  dispatch({
    type: "SELECT_EVENT",
    event,
  });
};
