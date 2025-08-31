// import React from "react";

// export const Table:React.FC=()=>{
//     let data=[{id:1,name:"John",age:28,city:"New York"},
//     {id:2,name:"Alice",age:24,city:"Los Angeles"},
//     {id:3,name:"Bob",age:30,city:"Chicago"},
//     {id:4,name:"Eve",age:22,city:"Miami"},
//     {id:5,name:"Charlie",age:27,city:"Houston"},
//     {id:6,name:"David",age:35,city:"Phoenix"}];
//     let [sortBy,setSortBy]=React.useState("ID");
//     data.sort((a,b)=>{
//       if(sortBy==="ID") return a.id-b.id;
//       else if(sortBy==="name") return a.name.localeCompare(b.name);
//       else if(sortBy==="age") return a.age-b.age;
//       else return a.city.localeCompare(b.city);})
//     return(
//       <>
//       <div className="flex my-3">
//         <label htmlFor="sortBy">Sort By </label>
//       <select name="sortBy" value={sortBy} id="sortBy" className=" bg-gray-100 rounded-lg shadow-2xl mx-3" onChange={(e) => setSortBy(e.target.value)}><option value="ID"   >ID</option>
//           <option value="name">Name</option>
//           <option value="age">Age</option>
//           <option value="city">City</option>
//       </select>
//       </div>
  
//         <table className="min-w-full bg-white rounded-2xl shadow-2xl py-4 px-4">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>City</th>
//           </tr>
//             {data.map((item)=>(
              
//                 <tr key={item.id} className={`odd:bg-white even:bg-gray-200 px-2 py-2 text-center `}><td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.age}</td>
//                 <td>{item.city}</td></tr>
//             ))}
//           </thead>
//         </table>
//         </>
//     )
// }

import React, { useState, useEffect } from "react";

interface TableProps {
  mode: "light" | "dark";
}

export const Table: React.FC<TableProps> = ({ mode }) => {
  const [data, setData] = useState<
    { id: number; name: string; age: number; city: string }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("ID");
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [selectionMode, setSelectionMode] = useState<"single" | "multiple">(
    "multiple"
  );

  useEffect(() => {
    setTimeout(() => {
      setData([
        { id: 1, name: "John", age: 28, city: "New York" },
        { id: 2, name: "Alice", age: 24, city: "Los Angeles" },
        { id: 3, name: "Bob", age: 30, city: "Chicago" },
        { id: 4, name: "Eve", age: 22, city: "Miami" },
        { id: 5, name: "Charlie", age: 27, city: "Houston" },
        { id: 6, name: "David", age: 35, city: "Phoenix" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const sortedData = [...data].sort((a, b) => {
    if (sortBy === "ID") return a.id - b.id;
    else if (sortBy === "name") return a.name.localeCompare(b.name);
    else if (sortBy === "age") return a.age - b.age;
    else return a.city.localeCompare(b.city);
  });

  const toggleRowSelection = (id: number) => {
    if (selectionMode === "single") {
      setSelectedRows([id]);
    } else {
      setSelectedRows((prev) =>
        prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id]
      );
    }
  };

  // Theme classes
  const bgClass = mode === "dark" ? "bg-gray-800" : "bg-white";
  const textClass = mode === "dark" ? "text-gray-200" : "text-gray-800";
  const headerClass = mode === "dark" ? "bg-gray-700" : "bg-gray-300";
  const oddRow = mode === "dark" ? "odd:bg-gray-800" : "odd:bg-white";
  const evenRow = mode === "dark" ? "even:bg-gray-700" : "even:bg-gray-100";
  const selectedRow = "bg-blue-600 text-white";

  return (
    <div className={`w-full max-w-3xl mx-auto ${textClass}`}>
      {/* Controls */}
      <div className="flex items-center justify-between my-3">
        <div className="flex items-center gap-2">
          <label htmlFor="sortBy">Sort By </label>
          <select
            name="sortBy"
            value={sortBy}
            id="sortBy"
            className={`rounded-lg shadow-md px-2 py-1 ${
              mode === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100"
            }`}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="ID">ID</option>
            <option value="name">Name</option>
            <option value="age">Age</option>
            <option value="city">City</option>
          </select>
        </div>

        {/* Toggle selection mode */}
        <div>
          <label className="mr-2">Selection: </label>
          <select
            value={selectionMode}
            onChange={(e) =>
              setSelectionMode(e.target.value as "single" | "multiple")
            }
            className={`rounded-lg shadow-md px-2 py-1 ${
              mode === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100"
            }`}
          >
            <option value="single">Single</option>
            <option value="multiple">Multiple</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className={`min-w-full rounded-2xl shadow-lg ${bgClass}`}>
          <thead>
            <tr className={headerClass}>
              <th className="py-2 px-4">Select</th>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Age</th>
              <th className="py-2 px-4">City</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={5} className="text-center py-6">
                  <span className="animate-pulse text-gray-500">
                    Loading data...
                  </span>
                </td>
              </tr>
            )}

            {!loading && sortedData.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">
                  No records found.
                </td>
              </tr>
            )}

            {!loading &&
              sortedData.map((item) => (
                <tr
                  key={item.id}
                  className={`text-center cursor-pointer ${oddRow} ${evenRow} ${
                    selectedRows.includes(item.id) ? selectedRow : ""
                  }`}
                  onClick={() => toggleRowSelection(item.id)}
                >
                  <td className="py-2 px-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(item.id)}
                      readOnly
                    />
                  </td>
                  <td className="py-2 px-4">{item.id}</td>
                  <td className="py-2 px-4">{item.name}</td>
                  <td className="py-2 px-4">{item.age}</td>
                  <td className="py-2 px-4">{item.city}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {!loading && selectedRows.length > 0 && (
        <div className="mt-4 text-sm">
          Selected IDs: {selectedRows.join(", ")}
        </div>
      )}
    </div>
  );
};
