import { useState } from "react";

function Customer({handle}) {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={() => handle(fullName,nationalId)}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
