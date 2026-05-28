import { useState } from 'react'
import type { Expense } from './types/expense'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([])

  // TODO: add handleAddExpense and handleDeleteExpense
  function handleAddExpense(expense: Omit<Expense, "id">) {
    setExpenses(prev =>
      [...prev, { ...expense, id: crypto.randomUUID() }]
    )
}

function handleDeleteExpense(id: string) {
    setExpenses(expenses.filter(e => e.id !== id));
}

return (
  <div className="app-layout">
    <aside>
      <h1>Expense Manager</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
    </aside>
    <main>
      <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense}/>
    </main>
  </div>
)
}

export default App
