

import './global.css'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" 
    
>
       <head><link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        /></head>
      <body     style={{margin:0,padding:0,display:"flex",justifyContent:"center",alignItems:'center', height:"100vh"}}>
        {children}
      </body>
    </html>
  );
}
