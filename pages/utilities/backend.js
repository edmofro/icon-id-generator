function fetchOrThrow(url, options = {}) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          response
            .text()
            .then((error) =>
              reject(`Something went wrong on the server: ${error}`)
            );
          return;
        }
        response.json().then(
          (responseBody) => resolve(responseBody),
          (error) => reject(error)
        );
      })
      .catch((error) => {
        reject(`Something went wrong: ${error.message}`);
      });
  });
}

export async function fetchGeneratedIds(count) {
  return fetchOrThrow(`/api/generate?count=${count}`);
}
