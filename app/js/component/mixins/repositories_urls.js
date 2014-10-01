define([],
  function () {
    return function () {
      this.userAgentRepoURL = function () {
        return "https://api.github.com/repos/pixelated-project/pixelated-user-agent";
      };

      this.dispatcherRepoURL = function () {
        return "https://api.github.com/repos/pixelated-project/pixelated-dispatcher";
      };

      this.platformRepoURL = function () {
        return "https://api.github.com/repos/pixelated-project/pixelated-platform";
      };

      this.defaultOptions = function () {
        return "per_page=100&state=all&"
      };

      this.authRequest = function (url) {
        return url + this.accessToken();
      }

      this.repoIssuesURL = function (repo) {
        return this.authRequest(repo() + '/issues?' + this.defaultOptions());
      };

      this.accessToken = function () {
        return "access_token=" + this.getCurrentAuthToken();
      };

      this.getURLFromProject = function (projectName) {
        switch (projectName) {
        case 'user-agent':
          return this.userAgentRepoURL;
        case 'dispatcher':
          return this.dispatcherRepoURL;
        case 'platform':
          return this.platformRepoURL;
        }
      };
    }
  }
);
