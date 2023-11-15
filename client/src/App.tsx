import { QueryClientProvider, QueryClient } from 'react-query';
import MainContainer from './components/MainContainer';

// initializing query client
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainContainer />
    </QueryClientProvider>
  );
}
