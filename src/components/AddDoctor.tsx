import { useState } from "react";
import { useCreateDoctors } from "../hooks";

const AddDoctor = () => {
  const [fullname, setFullName] = useState("");
  const [profileUrl, setProfileUrl] = useState("");

  const { createDoctor } = useCreateDoctors();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createDoctor({
      full_name: fullname,
      profile_url: profileUrl,
      id: 10,
    });

    setFullName("");
    setProfileUrl("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter doctor full name"
        />
        <input
          type="text"
          value={profileUrl}
          onChange={(e) => setProfileUrl(e.target.value)}
          placeholder="Enter url"
        />
        <button type="submit">Add doctor</button>
      </form>
    </div>
  );
};

export default AddDoctor;
