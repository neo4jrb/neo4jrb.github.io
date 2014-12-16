
Source for http://neo4jrb.github.io/ using [middleman](http://middlemanapp.com/)

To build / publish just run `rake build` followed by `rake publish` from the `source` branch.

To create a new blog post, `bundle exec middleman article NEW_TITLE_HERE`. Underscores will be removed. Find your new article in /blog/#{year}-#{month]-#{date}.html.slim
The summary is for the recent posts feed on the front page.
