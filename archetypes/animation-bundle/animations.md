---
title: "{{ replace (path.Base .File.Dir) "-" " " | title }}"
date: {{ .Date }}
draft: true
js: ["../js/{{path.Base .File.Dir}}"]
---