import './globals.css';
import React from "react";

export const metadata= {
    title: "SDGP-SE09",
    description: 'Construction tomorrow'
}

interface RootLayoutProps {
    children: React.ReactNode;
}


const RootLayoutProps = ({children})=>{
    return(
        <html lang="en">
            <body>
                <div className="main">
                    <div className="bg-white"></div>
                </div>

                <main className="app">
                    {children}
                </main>
            </body>
        </html>
    );
}

export default RootLayoutProps