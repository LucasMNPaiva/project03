import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import axios from "axios";


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = { user: this.props.user, events: [], status: false };
    this.status = true;
  }

  // getUser = () => {
  //   axios
  //     .get(`http://localhost:5000/api/filme/${this.props.match.params.movieId}`)
  //     .then(responseFromApi => {
  //       this.setState({
  //         user: responseFromApi.data
  //       });
  //     })
  //     .catch(error => console.log(error));
  // };

  // getEvents = () => {
  //   axios
  //     .get(
  //       `http://localhost:5000/api/events/${this.props.match.params.movieId}`
  //     )
  //     .then(responseFromApi => {
  //       this.setState({
  //         events: responseFromApi.data
  //       });
  //     })
  //     .catch(error => console.log(error));
  // };

  componentDidMount() {
   console.log(this.state.user)
   this.setState({
     status: true
   })
  }

  render() {
    if(!this.status){
      console.log('STATUS FALSE')
      return (
        <div></div>
      )
    } else {
      console.log('STATUS TRUE')
      return (
        <div className='myProfile'>
          <div className='profile-left'>
          <div className='profile-avatar'>
            <img src={this.state.user.image}/>
          </div>

          </div>
          <div className="profile-right">

          <div className="about">
          </div>

          <h1>My name is {this.state.user.name} </h1>
          <h3>Email</h3>
          <p>{this.state.user.email}</p>
          <h3>Sobre mim</h3>

          <input></input>

          <div className="about-info">
          <h3>Meu filme favorito é</h3>

          <h3>Hobbies</h3>

          <h3>Lugar favorito</h3>

          </div>

          <div class="my-events">
          <h1>Eventos Ativos</h1>
          <h3>tipo de atividade</h3>
          <h3>dia/mês</h3>
          <h3>título do evento</h3>
          <h4>local</h4>
          <button>Saiba Mais</button>

          </div>
          </div>
        </div>
      );
    }
  }
}

export default Profile;
