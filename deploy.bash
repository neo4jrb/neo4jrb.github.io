#!/bin/bash

git checkout -b master origin/master
git checkout source
bundle exec rake build
bundle exec rake publish
