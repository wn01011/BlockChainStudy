window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      "557899906351-8ci4ai5s265mkocdsebqdk1shujslo1r.apps.googleusercontent.com",
  });
  google.accounts.id.prompt();
};
