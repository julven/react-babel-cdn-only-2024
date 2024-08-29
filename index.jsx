
const { Provider } = ReactRedux,
  {createRoot} = ReactDOM,
  { BrowserRouter, HashRouter } = ReactRouterDOM;


createRoot(document.getElementById("root-box")).render(
  <div>
  <HashRouter>
    <Provider store={store}>
      <AccountContextProvider>         
          <App />
      </AccountContextProvider>
    </Provider>
  </HashRouter>
  </div>
);