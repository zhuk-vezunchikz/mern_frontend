const initialState = {
  clients: [
    { id: 1, firstName: 'Zhenya', lastName: 'Zhuk' },
    { id: 2, firstName: 'Zhenya', lastName: 'Zhuk' },
    { id: 3, firstName: 'Zhenya', lastName: 'Zhuk' },
    { id: 4, firstName: 'Zhenya', lastName: 'Zhuk' },
    { id: 5, firstName: 'Zhenya', lastName: 'Zhuk' },
    { id: 6, firstName: 'Zhenya', lastName: 'Zhuk' },
    { id: 7, firstName: 'Zhenya', lastName: 'Zhuk' },
    { id: 8, firstName: 'Zhenya', lastName: 'Zhuk' },
  ],
};

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default clientsReducer;
