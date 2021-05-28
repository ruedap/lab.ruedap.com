addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request) {
  const date = new Date();
  const dateString = date.toLocaleDateString("ja-JP", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const timeString = date.toLocaleTimeString("ja-JP", {
    hour12: false,
  });
  const message = `${dateString} ${timeString}`;

  const response = new Response(message, {
    headers: {
      "content-type": "text/plain;charset=utf-8",
    },
  });
  return response;
}
