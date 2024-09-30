export const reduceString = (s, n) =>
  s?.length >= n ? s.substring(0, n) + "..." : s;
export const parseUrlFromModel = (data) => {
  // console.log("🚀 ~ parseUrlFromModel ~ data:", data)
  if (!data || !data.bucket || !data.name) {
    return null; // Return null if the required properties are not present
  }

  // Construct the link using the bucket and name properties
  // const link = `https://content.ilmiyacdn.com/${data.name}`;
  // const link = `https://pub-d2064120905547d0913e8430506aa37f.r2.dev/${data.bucket}/${data.name}`;
  // const link = `https://pub-d2064120905547d0913e8430506aa37f.r2.dev/${data.name}`; // production
  const link =
    process.env.REACT_APP_NODE_ENV == "production"
      ? `https://pub-66c04a3849744a37b76c0f2d8b846154.r2.dev/${data.name}`
      : process.env.REACT_APP_NODE_ENV == "staging" ?
        `https://pub-a738bbb54bfd48ee84fd1d1230785d57.r2.dev/${data.name}`
        :
        `https://pub-049ff98eab794cb3866391f656ea8c6c.r2.dev/${data.name}`; // r2 test

  return link;
};




export const parseUrlFromModelThumbnail = (data) => {
  // console.log("🚀 ~ parseUrlFromModel ~ data:", data)
  if (!data || !data.bucket || !data.thumbnailPath) {
    return null; // Return null if the required properties are not present
  }

  // Construct the link using the bucket and name properties
  // const link = `https://content.ilmiyacdn.com/${data.name}`;
  // const link = `https://pub-d2064120905547d0913e8430506aa37f.r2.dev/${data.bucket}/${data.name}`;
  // const link = `https://pub-d2064120905547d0913e8430506aa37f.r2.dev/${data.name}`; // production
  const link =
    process.env.REACT_APP_NODE_ENV == "production"
      ? `https://pub-66c04a3849744a37b76c0f2d8b846154.r2.dev/${data.thumbnailPath}`
      : process.env.REACT_APP_NODE_ENV == "staging" ?
        `https://pub-a738bbb54bfd48ee84fd1d1230785d57.r2.dev/${data.thumbnailPath}`
        :
        `https://pub-049ff98eab794cb3866391f656ea8c6c.r2.dev/${data.thumbnailPath}`; // r2 test

  return link;
};
