import AddTodo from './components/addTodo'
import Todos from './components/Todo'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">

      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Redux Toolkit Todo App
        </h1>

        <AddTodo />

        <div className="mt-6">
          <Todos />
        </div>

      </div>

    </div>
  )
}

export default App