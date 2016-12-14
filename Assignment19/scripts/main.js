$(document).ready(function() {

            //List Titles
            var appendUrl = 'http://jsonplaceholder.typicode.com/posts?userId=1';
            $.get(appendUrl, function(request) {
                console.log(request);
                var ul = $('#append')
                for (var i = 0; i < request.length; i++) {
                    var post = request[i];
                    console.log(request[i]);
                    var li = '<li>Index: ' + (i + 1) + ' Title: ' + post.title + '</li>';
                    console.log(li);
                    ul.append(li);
                }
            })



            //
            var prependUrl = 'http://jsonplaceholder.typicode.com/photos?albumId=1';
            $.get(prependUrl, function(response) {
                    console.log(response);
                    var ul = $('#prepend')
                    for (var i = 0; i < response.length; i++) {
                        var post = response[i]
                        console.log(response[i]);
                        var li = '<li>Index: ' + (i + 1) + ' Title: ' + post.title + '</li>';
                        console.log(li);
                        ul.prepend(li);
                    }
        })

            });
