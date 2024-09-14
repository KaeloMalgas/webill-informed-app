import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import AdminDashboard from './pages/AdminDashboard';
import ConsumerDashboard from './pages/ConsumerDashboard';
import Login from './pages/Login';
import { ThemeProvider } from './components/ThemeProvider';
import SettingsDropdown from './components/SettingsDropdown';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router>
            <SettingsDropdown />
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin/*" element={<AdminDashboard />} />
              <Route path="/consumer/*" element={<ConsumerDashboard />} />
            </Routes>
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
