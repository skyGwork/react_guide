// one- default
// import ExpenseItem from './components/ExpenseItem';

//two- named
// import { ExpenseItem } from './components/ExpenseItem';

// function App() {
//   return (
//     <div>
//       <h2>Let's get started!</h2>
//       <ExpenseItem />
//     </div>
//   );
// }

//three named +default

import { ExpenseItem,Test } from './components/ExpenseItem';

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
