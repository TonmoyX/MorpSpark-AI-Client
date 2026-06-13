import React from 'react';

const Footer = () => {
    return (
        <div className="w-full py-6 px-4 md:px-16 lg:px-24 xl:px-32 text-sm text-gray-400 border-t border-slate-800 text-center">
            <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
            
        </div>
    );
};

export default Footer;