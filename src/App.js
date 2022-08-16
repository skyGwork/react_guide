//  01- default
// import ExpenseItem from './components/ExpenseItem';
// function App() {
//   return (
//     <div>
//       <h2>Let's get started!</h2>
//       <ExpenseItem />
//     </div>
//   );
// }

//02- named
// import { ExpenseItem } from './components/ExpenseItem';

// function App() {
//   return (
//     <div>
//       <h2>Let's get started!</h2>
//       <ExpenseItem />
//     </div>
//   );
// }

// 03- named +default

// import Test,{ ExpenseItem } from './components/ExpenseItem';

// function App() {
//   return (
//     <div>
//       <h2>Let's get started!</h2>
//       <ExpenseItem />
//       <Test />
//     </div>
//   );
// }
// 04- named +named

import { ExpenseItem, Test } from './components/ExpenseItem';

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem />
      <Test />
    </div>
  );
}

export default App;
