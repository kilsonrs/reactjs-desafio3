import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as gitUserActions from "../store/actions/gituser";

class Main extends Component {
  state = {
    userInput: ""
  };

  static propTypes = {
    addGitUserRequest: PropTypes.func,
    gitUser: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.shape({})),
      error: PropTypes.oneOfType([PropTypes.string])
    }).isRequired
  };

  handleAddUser = e => {
    e.preventDefault();
    //const { data } = await api.get(`/${this.state.userInput}`);
    this.props.addGitUserRequest(this.state.userInput);
    this.setState({ userInput: "" });
  };

  render() {
    return (
      <Fragment>
        <div>
          <form onSubmit={this.handleAddUser}>
            <p>Adicionar usuário do GitHub</p>
            <input
              placeholder="Usuário do github"
              value={this.state.userInput}
              onChange={e => this.setState({ userInput: e.target.value })}
            />
            <button type="submit">Salvar</button>

            {this.props.gitUser.loading && <span>Carregando...</span>}

            {!!this.props.gitUser.error && (
              <span style={{ color: "#F00" }}>{this.props.gitUser.error}</span>
            )}
          </form>
        </div>
        {this.props.gitUser.data.map(item => (
          <ul key={item.id}>
            <img src={item.avatar_url} alt="avatar" />
            <li>{item.name}</li>
            <li>{item.login}</li>
            <button onClick={() => this.props.removeGitUserRequest(item.id)}>
              Remover
            </button>
          </ul>
        ))}
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
)(Main);
