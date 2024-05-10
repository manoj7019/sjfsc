function initGoogleAuth() {
    gapi.load('auth2', function() {
      gapi.auth2.init({
        client_id: '57273358504-kl41t8su8i0n2tlc6t27bl9nbujc5lki.apps.googleusercontent.com'
      });
    });
  }

  function signIn() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(function(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId());
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
    });
  }

  window.onload = function() {
    initGoogleAuth();
  };

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log('User signed out.');
    });
  }