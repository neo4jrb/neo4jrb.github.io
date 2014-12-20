gitStats = () ->
  endpoint = "https://api.github.com/repos/neo4jrb/neo4j/"
  $.getJSON "#{endpoint}commits?per_page=1", (response) ->
    date = new Date(response[0].commit.author.date)
    $('.git-stats').html "<strong>Last commit:</strong><br />#{date.getFullYear()}/#{date.getMonth() + 1}/#{date.getDate()}"

  $.getJSON "#{endpoint}tags?per_page=1", (response) ->
    release_date = $.getJSON response[0].commit.url, (commit_response) ->
      date = new Date(commit_response.commit.author.date)
      date = "#{date.getFullYear()}/#{date.getMonth() + 1}/#{date.getDate()}"
      $('.latest-release').html "<strong>Current release:</strong><br />#{response[0].name} (#{date})"

$ ->
  if $('.git-stats')
    gitStats()