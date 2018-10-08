function fetchSubreddit(subreddit) {
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => json.data);
}

export { fetchSubreddit };
