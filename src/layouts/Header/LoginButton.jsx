import React from 'react';
import { User } from 'lucide-react';

const LoginButton = () => {
  return (
    <button className="flex items-center space-x-2 text-white bg-[#f99d20] hover:bg-[#f98220] px-3 py-1 rounded-lg transition-colors text-sm">
      <User className="h-4 w-4" />
      <span>Login</span>
    </button>
  );
};

export default LoginButton;