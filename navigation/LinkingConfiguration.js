const linking= {
  prefixes: ['yubbeclub://'],
  config: {
    screens: {
      Root: {
        screens: {
          Principal: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          Meetings: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Call: {
            screens: {
              TabThreeScreen: 'three',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
