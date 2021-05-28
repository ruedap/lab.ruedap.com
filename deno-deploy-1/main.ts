addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request) {
  const date = new Date();
  const dateString = date.toLocaleDateString("ja-JP", {
    timeZone: "Asia/Tokyo", // タイムゾーン設定を追加
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const timeString = date.toLocaleTimeString("ja-JP", {
    timeZone: "Asia/Tokyo", // タイムゾーン設定を追加
    hour12: false,
  });

  // アクセス時刻としてログ出力
  const message = `${dateString} ${timeString}`;

  console.log(`access: ${message}`);
  const response = new Response(message, {
    headers: {
      "content-type": "text/plain;charset=utf-8",
    },
  });
  return response;
}
