// import React, { Component } from "react";
import beth from "./images/beth.png";
import summer from "./images/summer.png";
import rick from "./images/rick.png";
import birdperson from "./images/birdperson.png";
import evilmorty from "./images/evilmorty.png";
import gianthead  from "./images/gianthead.png";
import goldenford from "./images/goldenford.png";
import jerry from "./images/jerry.png";
import jessica from "./images/jessica.png";
import meeseeks from './images/meeseeks.png';
import morty from './images/morty.png';
import mr from './images/mr.png';


// class App extends Component {
//   // Setting this.state.friends to the friends json array
//   state = {
//     friends
//   };

//   removeFriend = id => {
//     // Filter this.state.friends for friends with an id not equal to the id being removed
//     const friends = this.state.friends.filter(friend => friend.id !== id);
//     // Set this.state.friends equal to the new friends array
//     this.setState({ friends });
//   };
const images = [
  beth,
  summer,
  rick,
  evilmorty,
  birdperson,
  gianthead,
  goldenford,
  jerry,
  jessica,
  meeseeks,
  morty,
  mr
  
  ];

  // Map over this.state.friends and render a FriendCard component for each friend object
//   render() {
//     return (
//       <Wrapper>
//         <Title>Friends List</Title>
//         {this.state.friends.map(friend => (
//           <FriendCard
//             removeFriend={this.removeFriend}
//             id={friend.id}
//             key={friend.id}
//             name={friend.name}
//             image={friend.image}
//             occupation={friend.occupation}
//             location={friend.location}
//           />
//         ))}
//       </Wrapper>
//     );
//   }
// }

export default images;
