import React, { Component } from 'react'
import { Posts } from '../../components/Posts'
import { loadPosts } from '../../utils/load-posts'
import './styles.css'


export class Home extends Component {
	state = {
		posts: [],
	}

	 componentDidMount() {
		 this.loadPosts()
	}

	loadPosts = async () => {
    const postsAndPhotos = await loadPosts()
		this.setState({ posts: postsAndPhotos })
	}

	render() {
		const { posts } = this.state

		return (
			<div className="container">
				<Posts posts={posts} />
			</div>
		)
	}
}

export default Home
