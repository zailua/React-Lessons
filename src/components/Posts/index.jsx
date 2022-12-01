import { PostCard } from '../PostCard'
import './styles.css'

export const Posts = ({ searchValue, handleChange, posts }) => {
	return (
		<div className="posts">
			{posts.map((post) => (
				<PostCard post={post} key={post.id} />
			))}
		</div>
	)
}
