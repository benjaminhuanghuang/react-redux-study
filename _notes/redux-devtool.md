Redux DevTools is a browser extension that allows you to view your Redux store's state at any particular time


## Support redux devtools
Once you've installed the extension, you have to connect it manually to your Redux store by adding the following window properties as your store's second argument

```
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
```




## Reference
- [React Redux Tutorial for Beginners: Simply Explained](https://chriscourses.com/blog/redux)