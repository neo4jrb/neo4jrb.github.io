(function() {
  var gitStats;

  gitStats = function() {
    var endpoint;
    endpoint = "https://api.github.com/repos/neo4jrb/neo4j/";
    $.getJSON("" + endpoint + "commits?per_page=1", function(response) {
      var date;
      date = new Date(response[0].commit.author.date);
      return $('.git-stats').html("<strong>Last commit:</strong><br />" + (date.getFullYear()) + "/" + (date.getMonth()) + "/" + (date.getDate()));
    });
    return $.getJSON("" + endpoint + "tags?per_page=1", function(response) {
      var release_date;
      return release_date = $.getJSON(response[0].commit.url, function(commit_response) {
        var date;
        date = new Date(commit_response.commit.author.date);
        date = "" + (date.getFullYear()) + "/" + (date.getMonth()) + "/" + (date.getDate());
        return $('.latest-release').html("<strong>Current release:</strong><br />" + response[0].name + " (" + date + ")");
      });
    });
  };

  $(function() {
    if ($('.git-stats')) {
      return gitStats();
    }
  });

}).call(this);
