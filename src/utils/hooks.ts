import { useLocation } from "react-router-dom";
import qs from "qs";

export function usePage(): number {
  const location = useLocation();
  const search = qs.parse(location.search.replace("?", ""));
  const page = typeof search.page === "string" ? parseInt(search.page) : 1;
  return page;
}

export function useEpisode(): number {
  const location = useLocation();
  const search = qs.parse(location.search.replace("?", ""));
  const episode =
    typeof search.episode === "string" ? parseInt(search.episode) : 0;
  return episode;
}
