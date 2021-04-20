const initialState = {
  cards: {
    cards: [
      {
        name: 'Work',
        color: 'blue',
        done: 3,
        tasks: [
          {
            taskName: 'Create to do app',
            done: true
          },
          {
            taskName: 'Create portfolio',
            done: true
          },
          {
            taskName: 'Create portfolio',
            done: true
          },
          {
            taskName: 'Create portfolio',
            done: false
          },
          {
            taskName: 'Create portfolio',
            done: false
          }
        ]
      },
      {
        name: 'Home',
        color: 'yellow',
        done: 0,
        tasks: [
          {
            taskName: 'Create portfolio',
            done: false
          },
          {
            taskName: 'Create portfolio',
            done: false
          }
        ]
      },
      {
        name: 'Family',
        color: 'purple',
        done: 1,
        tasks: [
          {
            taskName: 'Create portfolio',
            done: false
          },
          {
            taskName: 'Create portfolio',
            done: true
          },
          {
            taskName: 'Create to do app',
            done: false
          },
          {
            taskName: 'Create portfolio',
            done: false
          }
        ]
      },
      {
        name: 'Shopping',
        color: 'red',
        done: 0,
        tasks: [
          {
            taskName: 'Create to do app',
            done: false
          },
          {
            taskName: 'Create portfolio',
            done: false
          },
          {
            taskName: 'Create portfolio',
            done: false
          }
        ]
      }
    ],
    card: {}
  }
};

export default initialState;
