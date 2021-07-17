export const defaultHTML:string = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>

  <body>
    <div class="header">
      <h1>Welcome to the online live code editor</h1>
    </div>
    <hr />
    <br />
    <br />
    <div class="center-main">
      You can edit the HTML, CSS and JS files on the left side to diplay result here.
    </div>
    <br />
    <br />
    <div class="bottom">Have Fun!</div>
  </body>
</html>
`;

export const defaultCSS:string = `body {
  background: #1a1c25;
  color: white;
  text-align: center;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

h1{
  text-transform: capitalize;
}

.center-main{
  font-weight: bold;
  font-size: 50px;
  width: 80%;
  margin: auto;
}

.bottom{
  color: crimson;
  font-size: 50px;
}
`;