var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var aricles ={
           'article-1': {
    title: 'article-1 | akanshya',
    heading: 'article one',
    date: 'september of twenty seventh, two thousand and sixteen',
    content: ` <p>
            
            this is a article writtten by me. it is about the fantasy novel im working upon. its a breif introduction to the novel scenario. hope you enjoy it.
            the story is set in a royal setup. it begins witha huge destruction of the most powerful kingdom. and the queen and her children fleeing the kingdom leaving the king behind, who is actually, cursed.
            </p> `
        },
           'article-2':{ 
               title: 'article-2 | akanshya',
    heading: 'article two',
    date: 'september of twenty seventh, two thousand and sixteen',
    content: ` <p>
            
           hello this is akanshya. i am an undergraduate student doing btech in computer science, at srm university. my university sucks. but still we all manage to get through it. i hope i can make an appeal but here the warden of one of the hostels strongle discriminates betwen northie and southie ppl. she tries to hummillate us and show us down. south indianas must be assasianated.
            </p> `
               
           },
           'article-3':{
               title: 'article-3 | akanshya',
    heading: 'article three',
    date: 'september of twenty seventh, two thousand and sixteen',
    content: ` <p>
            
            i totally hate my roomate. she is slum girl. i wanna run away. i wanna stay with my parents i want freedom. i want my personal life to be my personal life not something that is shared with every bengoli parent of this university. i hate my warden. i hate one lady in my department. i despise two girls in this place. and i hate being alone. so basically, i need help.
            </p> `
        
           
           }
          
    
};
        
        function createTemplate (data) {
            var title = data.title;
            var date = data.date;
            var heading = data.heading;
            var content = data.content;
         var htmlTemplate = `<html>
    <head>
        <title> ${title}</title>
        <meta name="viewport" content= "width=device-width, initial-scale=1" />
         <link href="/ui/style.css" rel="stylesheet" />
        
        </head>
        
    <body>
        <div class= "container">
            <div>
            <a href = "/"> Home </a>
            
            </div>
        <hr/>
        <h3>${heading}</h3>
        <div>
            ${date}
            </div>
    ${content}
        
        </div>
        
        </body>
</html>
` 
       return htmlTemplate;
        }            
        

app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/:articleName' , function (req, res) {
     var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
 });
 

 app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
