const ConsumerDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = window.innerWidth <= 768;

  const handleLogout = () => {
    navigate('/login');
  };

  const navItems = [
    { path: '/consumer', icon: <Home className="h-6 w-6" />, label: 'Home' },
    { path: '/consumer/upload-reading', icon: <Upload className="h-6 w-6" />, label: 'Upload' },
    { path: '/consumer/view-bills', icon: <FileText className="h-6 w-6" />, label: 'Bills' },
    { path: '/consumer/edit-profile', icon: <User className="h-6 w-6" />, label: 'Profile' },
    { path: '/consumer/qr-scanner', icon: <QrCode className="h-6 w-6" />, label: 'Scan QR' }, // New QR scanner link
  ];

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <nav className="bg-secondary shadow-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">Consumer Dashboard</span>
          <div className="flex items-center">
            <Button onClick={handleLogout} variant="outline">Logout</Button>
          </div>
        </div>
      </nav>

      <div className="flex-1 overflow-auto">
        <main className="max-w-7xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="upload-reading" element={<UploadMeterReading />} />
            <Route path="view-bills" element={<ViewBills />} />
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="qr-scanner" element={<QrScanner onScan={(data) => console.log(data)} />} /> {/* QR Scanner route */}
          </Routes>
        </main>
      </div>

      <nav className={`bg-secondary shadow-md ${isMobile ? 'fixed bottom-0 left-0 right-0' : 'hidden md:block'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <ul className={`flex ${isMobile ? 'justify-around' : 'justify-center'} py-2`}>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex flex-col items-center p-2 ${
                    location.pathname === item.path ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.icon}
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default ConsumerDashboard;
