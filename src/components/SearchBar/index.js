import React, { Component } from "react";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
//Image
import searchIcon from "../../images/search-icon.svg";
//Styles
import { Wrapper, Content } from "./SearchBar.styles";

// class SearchBar extends Component {
//   state = { value: "" };
//   timeout = null;

//   componentDidUpdate(_prevProps, prevState) {
//     if (this.state.value !== prevState.value) {
//       const { setSearchTerm } = this.props;

//       clearTimeout(this.timeout);

//       this.timeout = setTimeout(() => {
//         const { value } = this.state;
//         setSearchTerm(value);
//       }, 500);
//     }
//   }

//   render() {
//     const { value } = this.state;
//     return (
//       <Wrapper>
//         <Content>
//           <img src={searchIcon} alt="search-icon" />
//           <input
//             type="text"
//             placeholder="Search Movie"
//             onChange={(e) => this.setState({ value: e.currentTarget.value })}
//             value={value}
//           />
//         </Content>
//       </Wrapper>
//     );
//   }
// }

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(e) => setState(e.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};
export default SearchBar;
