var posts=["2024/07/19/hello-world/","2024/07/19/图床收集/","2024/07/19/逆向联想signkey/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };