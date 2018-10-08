import { fetchSubreddit } from '../middleware/api';
import { REQUEST_REDDIT_POSTS, RECEIVE_REDDIT_POSTS } from './types';

const requestRedditPosts = subreddit => {
  return {
    type: REQUEST_REDDIT_POSTS,
    subreddit,
    isFetching: true,
  };
};

const receiveRedditPosts = (subreddit, data) => {
  return {
    type: RECEIVE_REDDIT_POSTS,
    subreddit,
    posts: data.children.map(child => child.data),
    receivedAt: Date.now(),
    isFetching: false,
  };
};

// fetch reddit posts
const fetchRedditPosts = subreddit => dispatch => {
  dispatch(requestRedditPosts(subreddit));
  fetchSubreddit(subreddit).then(data => {
    dispatch(receiveRedditPosts(subreddit, data));
  });
};

// TODO:
// add to to-read list
// hide article

export { fetchRedditPosts };
