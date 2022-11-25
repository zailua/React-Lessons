import React, { Component } from 'react'
import { Button } from '../../components/Button'
import { Posts } from '../../components/Posts'
import { loadPosts } from '../../utils/load-posts'
import './styles.css'


export class Home extends Component {
	state = {
		posts: [],
		allPosts: [],
		page: 0,
		postsPerPage: 2,
	}

	componentDidMount() {
		this.loadPosts()
	}

	loadPosts = async () => {
		const { page, postsPerPage } = this.state

		const postsAndPhotos = await loadPosts()
		this.setState({
			posts: postsAndPhotos.slice(page, postsPerPage),
			allPosts: postsAndPhotos,
		})
	}

	loadMorePosts = () => {
		console.log('load more posts')
	}

	render() {
		const { posts } = this.state

		return (
			<div className="container">
				<Posts posts={posts} />
				<Button text="Load" event={this.loadMorePosts}/>
			</div>
		)
	}
}

export default Home
