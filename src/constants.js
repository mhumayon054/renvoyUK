const localhost = process.env.REACT_APP_NODE_ENV === "localhost";
const development = process.env.REACT_APP_NODE_ENV === "development";
export const app_mode = localhost
  ? "localhost"
  : development
    ? "development"
    : "production";

export const contentPath =
  process.env.REACT_APP_contentBasePath ??
  (localhost
    ? "http://localhost:6063/content/api/"
    : development
      ? "http://192.168.18.66:6063/content/api/"
      : "https://api.ilmiya.com/content/api/"
  );

export const APIurls = {
  // auth
  login: "auth/login",
  refreshTokens: "auth/refresh-tokens",
  register: "auth/register",
  logout: "auth/logout",
  googleLogout: "auth/google/logout",
  authenticate: "auth/authenticate",

  // video content
  contents: contentPath + "contents",
  userContents: contentPath + "user/contents",
  userContentsReact: contentPath + "user/contents/react",

  timestamp: contentPath + "timestamp",
  timeStampReact: contentPath + "timestamp/react",

  userLinks: contentPath + "link",
  userLinksReact: contentPath + "link/react",

  Performers: contentPath + "perfomer",

};

export const fileTypes = [
  // "GIF",
  "MP4",
  "WEBM",
  "AVI",
  "MKV",
  "MOV",
  "FLV",
];
export const imageFileTypes = [
  "JPEG",
  "JPG",
  "PNG",
  "GIF",
  "BMP",
  "TIFF",
];

export const colorslist = [
  "#2eafc6",
  // "#33FF57",
  "#5733FF",
  "#33FFFF",
  "#FFFF33",
  // "#33FF33",
  "#3333FF",
  "#FF33FF",
  "#FF8C00",
  "#8B008B",
  "#483D8B",
  // "#2E8B57",
  "#FF69B4",
  "#00CED1",
  // "#DC143C",
  "#8A2BE2",
  // "#00FF7F",
  "#4682B4",
  "#20B2AA",
  // "#00FF00",
  "#7FFFD4",
  "#BA55D3",
  "#00FFFF",
  "#8B4513",
  "#FA8072",
  "#800080",
  // "#FF4500",
  "#DAA520",
  "#FFD700",
  "#9370DB",
  // "#7FFF00",
  "#4B0082",
  "#CD5C5C",
  "#FF6347",
  // "#7CFC00",
  "#6495ED",
  "#FF8C00",
  "#6A5ACD",
  "#87CEEB",
  // "#00FA9A",
  "#4169E1",
  "#FAEBD7",
  "#FFA07A",
];



export const repeatColorslist = [
  "#2eafc6",
  // "#33FF57",
  "#5733FF",
  "#33FFFF",
  "#FFFF33",
  // "#33FF33",
  "#3333FF",
  "#FF33FF",
  "#FF8C00",
  "#8B008B",
  "#483D8B",
  "#2E8B57",
  "#FF69B4",
  "#00CED1",
  "#DC143C",
  "#8A2BE2",
  "#00FF7F",
  "#4682B4",
  "#20B2AA",
  "#00FF00",
  "#7FFFD4",
  "#BA55D3",
  "#00FFFF",
  "#8B4513",
  "#FA8072",
  "#800080",
  "#FF4500",
  "#DAA520",
  "#FFD700",
  "#9370DB",
  "#7FFF00",
  "#4B0082",
  "#CD5C5C",
  "#FF6347",
  "#7CFC00",
  "#6495ED",
  "#FF8C00",
  "#6A5ACD",
  "#87CEEB",
  "#00FA9A",
  "#4169E1",
  "#FAEBD7",
  "#FFA07A",
];