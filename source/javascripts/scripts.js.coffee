gitStats = () ->
  endpoint = "https://api.github.com/repos/neo4jrb/neo4j/"
  $.getJSON "#{endpoint}commits?per_page=1", (response) ->
    date = new Date(response[0].commit.author.date)
    month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    $('.git-stats').html "<strong>Last commit:</strong><br />#{month_names[date.getMonth()]} #{date.getDate()}, #{date.getFullYear()}"

  $.getJSON "#{endpoint}tags?per_page=1", (response) ->
    release_date = $.getJSON response[0].commit.url, (commit_response) ->
      date = new Date(commit_response.commit.author.date)
      date = "#{date.getFullYear()}/#{date.getMonth() + 1}/#{date.getDate()}"
      $('.latest-release').html "<strong>Current release:</strong><br />#{response[0].name} (#{date})"

$ ->
  if $('.git-stats')
    gitStats()