import { useState } from "react";

export default function UserForm({onUserAdd}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onUserAdd({name, email})
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button>Add User</button>
    </form>
  );
}
