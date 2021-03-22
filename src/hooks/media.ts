import { useMedia } from "react-media";

const GLOBAL_MEDIA_QUERIES = {
  small: "(max-width: 599px)",
  medium: "(min-width: 600px) and (max-width: 1199px)",
  large: "(min-width: 1200px)",
};

const useMediaQuery = function () {
  return useMedia({ queries: GLOBAL_MEDIA_QUERIES });
};

export { useMediaQuery, GLOBAL_MEDIA_QUERIES };
