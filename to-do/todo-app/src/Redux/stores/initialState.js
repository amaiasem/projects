const initialState = {
  cards: [
    {
      name: 'Work',
      color: 'blue',
      tasks: [
        {
          taskName: 'Create to do app',
          date: 'Friday, 16 April',
          hour: '2pm'
        },
        {
          taskName: 'Create portfolio',
          date: 'Tuesday, 20 April',
          hour: '5pm'
        }
      ]
    },
    { name: 'Home', color: 'yellow' },
    { name: 'Family', color: 'purple' },
    { name: 'Shopping', color: 'red' }
  ]
};

export default initialState;
