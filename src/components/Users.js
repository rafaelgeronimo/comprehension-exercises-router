import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class Users extends Component {
  render() {
    const {
      greetingMessage = 'Hi There',
      match: { params: { id }
    } } = this.props;

    return (
      <div>
        <h2>Users</h2>
        <p> 
          {`${greetingMessage} user ${id}, this is my awesome Users component`}
        </p>
      </div>
    );
  }
};

// esse exercício 9 foi uma sacanagem, não foi ensinado dessa maneira

export default Users;
