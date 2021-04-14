const initialState = {
  cards: {
    cards: [
      {
        name: 'Work',
        color: 'blue',
        tasks: [
          {
            taskName: 'Create to do app',
            description: 'React app with redux'
          },
          {
            taskName: 'Create portfolio',
            description: 'React app with redux'
          }
        ]
      },
      { name: 'Home', color: 'yellow' },
      { name: 'Family', color: 'purple' },
      { name: 'Shopping', color: 'red' }
    ],
    card: {}
  }
};

export default initialState;
