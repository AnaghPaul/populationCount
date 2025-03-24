const handleNotFound = (request) => {
  const notFoundHTML = `<!DOCTYPE html>
<html>
  <head>
    <title>Page not found</title>
  </head>
  <body>
    <h1>404: NOT FOUND</h1>
    <p>Check the link or something dude!</p>
  </body>
</html>`;

  return new Response(notFoundHTML, {
    headers: {
      "content-type": "text/html",
    },
  });
};

const handleIndex = async (request) => {
  const body = await Deno.readFile("index.html");

  return new Response(body, {
    headers: {
      "content-type": "text/html",
    },
  });
};

const handleRoot = async (request) => {
  return await handleIndex(request);
}

const handleStyle = async (request) => {
  const body = await Deno.readFile("style.css");

  return new Response(body, {
    headers: {
      "content-type": "text/css",
    },
  });
};

const handler = async (request) => {
  // console.log("Request from primary handler:\n", request, "\n\n");

  console.log(`${request.method}: ${request.url}`);

  const url = new URL(request.url);

  // console.log("\n\nURL Obejct", url, "\n");

  const routes = {
    "/index.html": handleIndex,
    "/": handleRoot,
    "/style.css": handleStyle,
  };

  if (url.pathname in routes) {
    return await routes[url.pathname](request);
  }

  return handleNotFound(request);
};

const server = Deno.serve({ port: 8000 }, handler);

// console.log(server);
