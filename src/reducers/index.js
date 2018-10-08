import { REQUEST_REDDIT_POSTS, RECEIVE_REDDIT_POSTS } from '../actions/types';

function rootReducer(state, action) {
  switch (action.type) {
    case REQUEST_REDDIT_POSTS:
      return Object.assign({}, state, {
        reddit: {
          [action.subreddit]: {
            isFetching: action.isFetching,
          },
        },
      });
    case RECEIVE_REDDIT_POSTS:
      return Object.assign({}, state, {
        reddit: {
          [action.subreddit]: {
            isFetching: action.isFetching,
            posts: action.posts,
            lastUpdated: action.receivedAt,
          },
        },
      });
    default:
      return state;
  }
}

export default rootReducer;
