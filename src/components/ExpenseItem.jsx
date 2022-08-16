// *********01-default**********
// export default function ExpenseItem() {
//   return <h2>Expense item!  </h2>;
// }

// **********02-named*******
// function ExpenseItem() {
//   return <h2>Expense item! </h2>;
// }

// export { ExpenseItem };

//*********** */ 03 named+default********
// function ExpenseItem() {
//   return <h2>Expense item! </h2>;
// }

// export default function Test() {
//   return <p>Its test</p>
// };

// export { ExpenseItem };

// ********04: named + named************
function ExpenseItem() {
  return <h2>Expense item! </h2>;
}

function Test() {
  return <p>Its test</p>;
}

export { ExpenseItem, Test };
