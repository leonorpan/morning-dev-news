import React, { Component } from 'react';
import { fetchRedditPosts } from '../../actions';
import { Header } from '..';
import { connect } from 'react-redux';
import './App.css';

const SUB_REDDIT = 'reactjs';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRedditPosts(SUB_REDDIT);
  }

  render() {
    const REDDIT_POSTS =
      this.props.reddit[SUB_REDDIT] && this.props.reddit[SUB_REDDIT].posts;

    return (
      <div>
        <Header />
        <main className="Container">
          <h2>{SUB_REDDIT.toUpperCase()}</h2>
          <button>REFRESH</button>
          {REDDIT_POSTS && (
            <ul className="PostsList">
              {REDDIT_POSTS.map(post => {
                return (
                  <div key={post.id} className="Post">
                    <p>Ups: {post.ups}</p>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer">
                      <h3>{post.title}</h3>
                    </a>
                    <button>Read Later</button>
                    <button>Hide</button>
                  </div>
                );
              })}
            </ul>
          )}
        </main>
        <footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reddit: state.reddit,
  };
};

const mapActionsToPros = dispatch => {
  return {
    fetchRedditPosts: SUB_REDDIT => dispatch(fetchRedditPosts(SUB_REDDIT)),
  };
};

export default connect(
  mapStateToProps,
  mapActionsToPros
)(App);
