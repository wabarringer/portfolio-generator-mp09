const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "Where do you live?",
      name: "location",
    },
    {
      type: "input",
      message: "Write a short bio on yourself.",
      name: "bio",
    },
    {
      type: "input",
      message: "What is your LinkedIn URL?",
      name: "linkedIn",
    },
    {
      type: "input",
      message: "What is your GitHub URL?",
      name: "gitHub",
    },
  ])
  .then((response) => {
    // console.log(response);
    // console.log(JSON.stringify(response.GitHub));
    const gitHubUrl = "https://" + response.gitHub;
    const linkedInUrl = "https://" + response.linkedIn;
    console.log(gitHubUrl);
    const htmlLiteral = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Name's Splash Page</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
    />
  </head>
  <body>
    <header>
      <div class="d-flex justify-content-center fs-1 bg-info">${response.name}</div>
    </header>
    <main class="d-flex flex-column fs-3 bg-info-subtle text-center">
      <div>I'm from ${response.location}</div>
      <div>${response.bio}</div>
    </main>
    <footer class="d-flex justify-content-center fs-5 bg-info">
      <div class="col-6 text-center">
        <a href=${linkedInUrl} class="text-decoration-none text-reset" target="_blank"
          >LinkedIn</a
        >
      </div>
      <div class="col-6 text-center">
        <a href=${gitHubUrl} class="text-decoration-none text-reset" target="_blank">GitHub</a>
      </div>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>`;
    fs.writeFile("splash-page.html", htmlLiteral, (err) => {
      if (err) {
        console.log("error");
      } else {
        console.log("worked");
      }
    });
  });
