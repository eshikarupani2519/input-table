import { useState } from "react";
import { Form } from "../src/components/InputField/Form";
import { Table } from "../src/components/DataTable/Table";

function App() {
  const [selected, setSelected] = useState<string | null>(null);
  const [mode, setMode] = useState<"light" | "dark">("light");

  return (
    <div className={`${mode === "dark" ? "dark" : ""} min-h-screen`}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-300">
        
        {/* Toggle Light/Dark Mode */}
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-xl shadow"
        >
          {mode === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        {/* If nothing selected then this box appears */}
        {!selected && (
          <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 transition-colors duration-300">
            <h1 className="text-2xl text-center font-bold text-gray-800 dark:text-gray-200 mb-4">
              What do you want to see?
            </h1>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => setSelected("InputField")}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl"
              >
                Input field
              </button>
              <button
                onClick={() => setSelected("DataTable")}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl"
              >
                Data table
              </button>
            </div>
          </div>
        )}

        {/* Agar InputField select hua ho to ye box */}
        {selected === "InputField" && (
          <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 transition-colors duration-300">
            <button
              onClick={() => setSelected(null)}
              className="mt-4 text-2xl hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-1 rounded-xl text-right"
            >
              🔙
            </button>
            <h1 className="text-2xl text-center font-bold text-gray-800 dark:text-gray-200 mb-4">
              Registration Form
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
              Fill in the details below to register.
            </p>

            {/* Passing mode as props */}
            <Form mode={mode} />
          </div>
        )}

        {/* Agar DataTable select hua ho to ye box */}
        {selected === "DataTable" && (
          <div className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 transition-colors duration-300">
            <button
              onClick={() => setSelected(null)}
              className="mt-4 text-2xl hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-1 rounded-xl text-right"
            >
              🔙
            </button>
            <h1 className="text-2xl text-center font-bold text-gray-800 dark:text-gray-200 mb-4">
              Data Table
            </h1>

            {/* Passing mode as props */}
            <Table mode={mode} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
