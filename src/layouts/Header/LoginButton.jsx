import React from 'react';
import { User } from 'lucide-react';

const LoginButton = () => {
  return (
    <button className="flex items-center space-x-2 text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg transition-colors text-sm">
      <User className="h-4 w-4" />
      <span>Login</span>
    </button>
  );
};

export default LoginButton;