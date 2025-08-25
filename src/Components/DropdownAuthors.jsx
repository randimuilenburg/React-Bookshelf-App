import { Dropdown } from "react-bootstrap";
import { useState } from "react";

function AuthorDropdown() {
  return (
    <div className="dropdown">
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Make a Selection
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Julia Armfield</Dropdown.Item>
          <Dropdown.Item>Emma Cline</Dropdown.Item>
          <Dropdown.Item>Adding more...</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default AuthorDropdown;
