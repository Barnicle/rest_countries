import React from "react";
import styled from "styled-components";

import { IoMdSearch } from "react-icons/io";

class Filters extends React.Component {
  handleSearch = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <form>
        <div>
          <input
            placeholder={`Search for a country...`}
            onChange={this.handleSearch}
          />
        </div>
        <select
          defaultValue={"placeholder"}
          onChange={() => this.form.submit()}
        >
          <option disabled={true} hidden value="placeholder">
            Filter by: Region
          </option>
          <option value={"africa"}>Africa</option>
          <option value={"americas"}>America</option>
          <option value={"asia"}>Asia</option>
          <option value={"europe"}>Europe</option>
          <option value={"oceania"}>Oceania</option>
        </select>
      </form>
    );
  }
}
export default Filters;
