import { render, screen } from '@testing-library/react';
import App from './App';
import { AuthProvider } from './context/AuthContext'; // Asegúrate de envolver el App con AuthProvider

test('renders learn react link', () => {
  render(
    <AuthProvider>
      <App />
    </AuthProvider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
