import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPostsAndUsers} from '../Actions';
import UserHeader from './UserHeader';

class PostList extends Component {
	componentDidMount() {
		this.props.fetchPostsAndUsers();
	}

	renderList() {
		return this.props.posts.map(post => {
			return (
				<div className="ui segment" key={post.id}>
					<div className="ui content">
						<i className="larger middles aligned icon user" />
						<div className="content">
							<div className="description">
								<h2>{post.title}</h2>
								<UserHeader userId={post.userId} />
								<p>{post.body}</p>
							</div>
							<div className="content">
								<span class="right floated">
									<i class="heart outline like icon" />
									17 likes
								</span>
								<i class="comment icon" />3 comments
							</div>
						</div>
					</div>
					<div class="extra content">
						<div class="ui large transparent left icon input">
							<i class="heart outline icon" />
							<input type="text" placeholder="Add Comment..." />
						</div>
					</div>
				</div>
			);
		});
	}
	render() {
		console.log(this.props.posts);
		return (
			<div className="ui relaxed divided list">{this.renderList()}</div>
		);
	}
}

const mapStateToProps = state => {
	return {posts: state.posts};
};

export default connect(
	mapStateToProps,
	{fetchPostsAndUsers}
)(PostList);
