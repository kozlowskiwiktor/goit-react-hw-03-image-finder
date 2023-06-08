import api from '../services/api';
import { Searchbar } from './Searchbar';
export const App = () => {
  state = {
    query: '',
    loading: false,
    gallery: [],
    error: null,
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Searchbar />
    </div>
  );
};
