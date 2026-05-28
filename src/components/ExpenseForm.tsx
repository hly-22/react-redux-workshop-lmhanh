import { useState } from 'react';
import { CATEGORIES } from '../constants'
import type { Expense } from '../types/expense'

type ExpenseFormProps = {
  onAddExpense: (expense: Omit<Expense, "id">) => void;
}

function ExpenseForm({ onAddExpense }: ExpenseFormProps) {

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: create a new expense and add it to the list
    if (!description || !amount || !category) return;

    onAddExpense({
      description,
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString().slice(0, 10),
    })

    setDescription("");
    setAmount("");
    setCategory("");
  }

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add Expense</h2>
      <label>
        Name
        <input
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g. Lunch"
          required
        />
      </label>
      <label>
        Amount ($)
        <input
          name="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
          min={0}
          step="0.01"
          required
        />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select category</option>
          {CATEGORIES.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>
      <button type="submit">Add Expense</button>
    </form>
  )
}

export default ExpenseForm
