export default function(ctx, inject) {
  const options = JSON.parse(`<%= serialize(options) %>`);
  console.log(`🚀 ~ file: plugin.js ~ line 4 ~ options`, options);

  const seoHandler = data => {
    const metaKeysArray = Object.keys(data);
    const metaArray = [];

    metaKeysArray.forEach(key => {
      const twitterKey = `twitter:${key}`;
      const ogKey = `og:${key}`;

      metaArray.push(
        {
          hid: key,
          name: key,
          content: data[key]
        },
        {
          hid: twitterKey,
          name: twitterKey,
          content: data[key]
        },
        {
          hid: ogKey,
          name: ogKey,
          content: data[key]
        }
      );
    });

    return metaArray;
  };

  inject("seo", seoHandler);
}
