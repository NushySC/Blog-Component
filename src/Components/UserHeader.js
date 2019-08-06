import React from 'react';
import {connect} from 'react-redux';
//import {fetchUser} from '../Actions';

class UserHeader extends React.Component {
	// componentDidMount() {
	// 	this.props.fetchUser(this.props.userId);
	// }

	render() {
		//console.log(this.props.users)
		// const user = this.props.users.find(
		// 	user => user.id === this.props.userId
		// );

		const {user} = this.props;

		if (!user) {
			return <h3>Loading...</h3>;
		}

		return <div className="ui header">{user.name}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {user: state.users.find(user => user.id === ownProps.userId)};
};

export default connect(mapStateToProps)(UserHeader);
