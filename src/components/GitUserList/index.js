import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as gitUserActions from "../../store/actions/gituser";

import { Container, Actions, Profile } from "./styles";

class GitUserList extends Component {
  handleRemoveGitUser = id => {
    const { removeGitUserRequest } = this.props;
    removeGitUserRequest(id);
  };

  render() {
    return (
      <Fragment>
        <Container>
          {this.props.gitUser.data.map(git => (
            <ul key={git.id}>
              <Profile>
                <img src={git.avatar_url} alt="avatar" />
                <div>
                  <strong>{git.name}</strong>
                  <small>{git.login}</small>
                </div>
              </Profile>
              <Actions>
                <button
                  type="button"
                  className="btn remove"
                  onClick={() => this.handleRemoveGitUser(git.id)}
                >
                  <i className="fa fa-times-circle fa-lg delete-profile " />
                </button>
              </Actions>
            </ul>
          ))}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  gitUser: state.gituser
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(gitUserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GitUserList);
