import React, { Component, Fragment } from "react";
import MapGL, { Marker } from "react-map-gl";
import Modal from "react-modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as gitUserActions from "../store/actions/gituser";

import "mapbox-gl/dist/mapbox-gl.css";
import GitUserList from "../components/GitUserList";
import { StyleModal, FormAdd, IconMarker } from "./styles";

class Main extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -21.253085,
      longitude: -48.324299,
      zoom: 12
    },
    userInput: "",
    latitude: "",
    longitude: "",
    modalOpen: false
  };

  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  handleMapClick = e => {
    const [latitude, longitude] = e.lngLat;

    this.setState({ latitude: longitude, longitude: latitude });
    this.handleOpenModal();
  };

  handleOpenModal = () => {
    this.setState({ modalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  handleUserInput = e => {
    this.setState({ userInput: e.target.value });
  };

  handleAddUser = e => {
    e.preventDefault();
    //const { data } = await api.get(`/${this.state.userInput}`);
    const { userInput, latitude, longitude } = this.state;
    this.props.addGitUserRequest({ userInput, latitude, longitude });
    this.setState({ userInput: "" });
    this.handleCloseModal();
  };
  render() {
    const { gitUser } = this.props;
    return (
      <Fragment>
        <GitUserList />
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={
            "pk.eyJ1Ijoia2lsc29ueiIsImEiOiJjanFkeWRtZHA0bnUyM3htc2hqaG43MjQ3In0.-6SATa01YQTiBqMQTp_5qA"
          }
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {gitUser.data.map(item => (
            <Marker
              key={item.id}
              latitude={item.latitude}
              longitude={item.longitude}
              onClick={this.handleMapClick}
              captureClick={true}
            >
              <IconMarker src={item.avatar_url} alt="avatar" />
            </Marker>
          ))}
        </MapGL>

        <Modal isOpen={this.state.modalOpen} style={StyleModal}>
          <FormAdd>
            <form>
              <span>Adicionar novo usuário</span>
              <input
                placeholder="Usuário no github"
                value={this.state.userInput}
                onChange={this.handleUserInput}
              />
              <div>
                <button
                  onClick={this.handleCloseModal}
                  className="btn close"
                  type="button"
                >
                  Fechar
                </button>
                <button
                  onClick={this.handleAddUser}
                  type="submit"
                  className="btn save"
                >
                  Salvar
                </button>
              </div>
            </form>
          </FormAdd>
        </Modal>
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
