// GET /population/country?country=India HTTP/1.1
// X-Rapidapi-Key: 7b301f3d0cmsh8449231fd69857cp175f97jsna851514f9d4c
// X-Rapidapi-Host: get-population.p.rapidapi.com
// Host: get-population.p.rapidapi.com

// Response {
//   body: ReadableStream { locked: true },
//   bodyUsed: true,
//   headers: Headers {
//     "content-type": "application/json",
//     date: "Mon, 24 Mar 2025 18:36:11 GMT",
//     server: "RapidAPI-1.2.8",
//     "strict-transport-security": "max-age=31536000;",
//     "x-power-supply-by": "220 Volt",
//     "x-powered-by": "PHP/7.4.33",
//     "x-rapidapi-region": "AWS - ap-southeast-1",
//     "x-rapidapi-request-id": "84f1a4e8b296e9afb95045faf29e216a603134d780a3e83d65ed96c6f27675dc",
//     "x-rapidapi-version": "1.2.8",
//     "x-ratelimit-rapid-free-plans-hard-limit-limit": "500000",
//     "x-ratelimit-rapid-free-plans-hard-limit-remaining": "499664",
//     "x-ratelimit-rapid-free-plans-hard-limit-reset": "2674974"
//   },
//   ok: true,
//   redirected: false,
//   status: 200,
//   statusText: "OK",
//   url: "https://get-population.p.rapidapi.com/population/country?country=India"
// }

const main = () => {
  setInterval(async () => {
    const decoder = new TextDecoder();

    const response = await fetch(
      "https://get-population.p.rapidapi.com/population/country?country=India",
      {
        headers: {
          "X-Rapidapi-Key":
            "7b301f3d0cmsh8449231fd69857cp175f97jsna851514f9d4c",
          "X-Rapidapi-Host": "get-population.p.rapidapi.com",
        },
      }
    );

    // const reader = response.body.getReader();

    // const json = decoder.decode((await reader.read()).value);

    // const populationObject = JSON.parse(json);

    const populationObject = await response.json();

    // console.log(
    //   `${populationObject.count} people in ${populationObject.country}`
    // );

    console.log(populationObject);
  }, 5000);
};

main();
