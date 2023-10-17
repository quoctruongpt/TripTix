import httpClient from ".";

const baseURL = "http://btbs.ap-southeast-1.elasticbeanstalk.com";

const getTrips = (params: any) => {
  const url = `${baseURL}/trips`;
  return httpClient.get(url, { params });
};

export { getTrips };
