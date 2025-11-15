import { Dropdown } from "react-bootstrap";
import React, { useState } from "react";
import AuthorsData from "./AuthorsData";

function AuthorDropdown({ onChange }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (eventKey) => {
    setSelected(eventKey);
    onChange?.(eventKey);
  };
  return (
    <div className="dropdown">
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          {selected || "Select an Author:"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {AuthorsData.map((author) => (
            <Dropdown.Item key={author.authorId} eventKey={author.authorName}>
              {author.authorName}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default AuthorDropdown;
