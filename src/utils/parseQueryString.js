export const parseQueryString = (string) => {
  return string
    .slice(1)
    .split("&")
    .map((queryParam) => {
      let kvp = queryParam.split("=");
      return { key: kvp[0], value: kvp[1] };
    })
    .reduce((query, kvp) => {
      query[kvp.key] = kvp.value;
      return query;
    }, {});
};
