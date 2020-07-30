
// Selectors

export const MODULE_NAME = "transaction";
export const selectTransactions = (state) => state[MODULE_NAME].transactions;

// Reducer

const initialState = {
  transactions: [
    {
      id: "1",
      name: 'Ada',
      surname: 'Lovalace',
      amount: 1300.75,
      date: Date.now(),
      type: 'Debt',
      payWith: 'Credit Account',
      userProfileImg: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: "2",
      name: 'John',
      surname: 'Wick',
      amount: 2350.83,
      date: Date.now(),
      type: 'Debt',
      payWith: 'Credit Account',
      userProfileImg: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1211&q=80'
    },
    {
      id: "3",
      name: 'Kendrick',
      surname: 'Lamar',
      amount: 750.36,
      date: Date.now(),
      type: 'Debt',
      payWith: 'Credit Account',
      userProfileImg: 'https://images.unsplash.com/photo-1506628150-ab62050f199c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: "4",
      name: 'Eminem',
      surname: 'Marshall',
      amount: 2450.45,
      date: Date.now(),
      type: 'Debt',
      payWith: 'Credit Account',
      userProfileImg: 'https://images.unsplash.com/photo-1535920864647-9370cc7e849a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=690&q=80'
    },
    {
      id: "5",
      name: 'Antonio',
      surname: 'Banderas',
      amount: 2896.45,
      date: Date.now(),
      type: 'Debt',
      payWith: 'Credit Account',
      userProfileImg: 'https://images.unsplash.com/photo-1536020527574-3bc20e25de86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
      id: "6",
      name: 'Traviss',
      surname: 'Scott',
      amount: 1085.70,
      date: Date.now(),
      type: 'Debt',
      payWith: 'Credit Account',
      userProfileImg: 'https://images.unsplash.com/flagged/photo-1557286249-08f5bc2ef21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: "7",
      name: 'Michael',
      surname: 'Jordan',
      amount: 1450.70,
      date: Date.now(),
      type: 'Debt',
      payWith: 'Credit Account',
      userProfileImg: 'https://images.unsplash.com/photo-1521310192545-4ac7951413f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
      id: "8",
      name: 'Don',
      surname: 'Brown',
      amount: 2365.65,
      date: Date.now(),
      type: 'Debt',
      payWith: 'Credit Account',
      userProfileImg: 'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'
    },
    {
      id: "9",
      name: 'Eric',
      surname: 'Tyon',
      amount: 1520.65,
      date: Date.now(),
      type: 'Debt',
      payWith: 'Credit Account',
      userProfileImg: 'https://images.unsplash.com/photo-1587761549600-05dc89db3e10?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      id: "10",
      name: 'Fernando',
      surname: 'Luzi',
      amount: 9653.45,
      date: Date.now(),
      type: 'Debt',
      payWith: 'Credit Account',
      userProfileImg: 'https://images.unsplash.com/photo-1568226940395-d125946a2bb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1260&q=80'
    },

  ],
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}
