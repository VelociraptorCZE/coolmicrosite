import download from "./download";

export default async function createHTML () {
  const appScriptRequest = await fetch("/static/dist/app.min.js");
  const commonCssRequest = await fetch("/static/dist/common.css");

  const container = document.createElement("div");
  container.insertAdjacentHTML("beforeend", document.getElementById("render-all-blocks").innerHTML);
  [...container.querySelectorAll("img.lazyload")].forEach(image => {
    image.removeAttribute("src");
    image.classList.remove("loaded", "error");
  });

  const htmlSource = `
  <!doctype html>
  <html lang="en">
    <head>
        <title>CoolMicrosite</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    </head>
    <body style="background-color: ${document.body.style.backgroundColor};">
      <style>${await commonCssRequest.text()}</style>
      ${container.innerHTML}  
      <script>${await appScriptRequest.text()}</script>
    </body>
  </html>
  `;

  download(htmlSource, "page.html");
}