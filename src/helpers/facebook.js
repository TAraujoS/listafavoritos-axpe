function login(callback) {
  if(!window.FB) return false;

  const doCallback = response => {
    if(typeof callback === 'function') {
      callback(response);
    }
  }

  FB.login(function(response) {
    if (response.status === 'connected') {
      FB.api('/me', me => {
        doCallback({
          ...response,
          me
        });
      });
    } else {
      doCallback(response);
    }
  }, { scope: 'public_profile,email' });
}

function logout() {
  FB.logout();
}

export default {
  login,
  logout
}