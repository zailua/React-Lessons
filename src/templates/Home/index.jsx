import React, { Component } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Posts } from '../../components/Posts'
import { loadPosts } from '../../utils/load-posts'
import './styles.css'


export class Home extends Component {
	state = {
		posts: [],
		allPosts: [],
		page: 0,
		postsPerPage: 10,
		searchValue: '',
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
		const { page, postsPerPage, allPosts, posts } = this.state

		const nextPage = page + postsPerPage
		const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
		posts.push(...nextPosts)

		this.setState({ ...this.setState, posts, page: nextPage })
	}

	handleChange = (e) => {
		const { value } = e.target
		this.setState({ ...this.setState, searchValue: value })
	}

	render() {
		const { posts, page, postsPerPage, allPosts, searchValue } = this.state
		const noMorePosts = page + postsPerPage >= allPosts.length

		const filteredPosts = !!searchValue
			? allPosts.filter((post) => {
					return post.title.toLowerCase().includes(searchValue.toLowerCase())
			  })
			: posts

		return (
			<div className="container">
				<Input searchValue={searchValue} handleChange={this.handleChange} />
				{filteredPosts.length > 0 && (
					<Posts
						posts={filteredPosts}
						searchValue={searchValue}
						handleChange={this.handleChange}
					/>
				)}
				<div className="button-container">
					{!searchValue && (
						<Button
							text="Load"
							event={this.loadMorePosts}
							disabled={noMorePosts}
						/>
					)}
				</div>
			</div>
		)
	}
}

export default Home
