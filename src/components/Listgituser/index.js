import React, { Fragment } from "react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// import * as gitUserActions from "../../store/actions/gituser";

// const Listgituser = ({ gitUser, removeGitUser }) => (
//   <Fragment>
//     {console.log(gitUser)}
//     gitUser
//     <div key={gitUser.id}>
//       <img src={gitUser.avatar_url} alt="avatar" />
//       <li>{gitUser.name}</li>
//       <li>{gitUser.login}</li>
//       <button onClick={() => removeGitUser(gitUser.id)}>Remover</button>
//     </div>
//     ))
//   </Fragment>
// );

// Listgituser.propTypes = {
//   removeGitUser: PropTypes.func.isRequired,
//   gitUser: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       avatar_url: PropTypes.string,
//       login: PropTypes.string,
//       name: PropTypes.string
//     })
//   )
// };

// {this.props.gitUser.data.map(item => (
//   <ul key={item.id}>
//     <img src={item.avatar_url} alt="avatar" />
//     <li>{item.name}</li>
//     <li>{item.login}</li>
//     <button onClick={() => this.props.removeGitUserRequest(item.id)}>
//       Remover
//     </button>
//   </ul>
// ))}
