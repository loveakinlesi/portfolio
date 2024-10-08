// A custom hook that builds on useLocation to parse

import React from "react";
import { useLocation } from "react-router";

// the query string for you.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default useQuery;


