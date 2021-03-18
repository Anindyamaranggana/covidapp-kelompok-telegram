var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'Belajar',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: true,
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
  ],
  theme: 'ios',
});

var mainView = app.views.create('.view-main');