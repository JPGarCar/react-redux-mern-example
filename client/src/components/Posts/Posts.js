import React from 'react'
import PropTypes from 'prop-types'

import Post from './Post/Post'

const Posts = props => {
    return (
        <div>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </div>
    )
}

Posts.propTypes = {

}

export default Posts
