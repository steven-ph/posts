export const GRAPHQL_URI =
  process.env.NODE_ENV === "production"
    ? process.env.GRAPHQL_URI
    : "http://localhost:40001";
export const FRONTEND_URL =
  process.env.NODE_ENV === "production"
    ? process.env.FRONTEND_URL
    : "http://localhost:40002";
export const pageSize = 18;
