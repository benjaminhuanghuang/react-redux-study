
Thunk is a library meant for handling action creators, functions meant solely to return "actions," JavaScript objects with a updated state data. 

dispatching an action directly by inlining the object:
```
this.props.dispatch({
  type: 'ADD_POST',
  payload: { id: this.state.postId, title: this.state.value }
})
```
create a function just to produce the action object in the first place
```
function addPost(payload) {
  return { type: 'ADD_POST', payload }
}

this.props.dispatch(
  addPost({ id: this.state.postId, title: this.state.value })
)
```

## Reference
- [React Redux Tutorial for Beginners: Simply Explained](https://chriscourses.com/blog/redux)