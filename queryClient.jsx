import { QueryClient } from "react-query";

const queryClient = new QueryClient();

/*const queryClientRef = React.useRef();
if (!queryClientRef.current) {
  queryClientRef.current = new QueryClient();
}*/

export default queryClient;
