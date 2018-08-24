1. Install redux-devtools extension 

2. Support redux devtools
```
const store = createStore(
    allReducers,
    {
        products: [{ name: 'iPhone' }],
        user: 'Michael'
    },
    window.devToolsExtension && window.devToolsExtension()
);
```