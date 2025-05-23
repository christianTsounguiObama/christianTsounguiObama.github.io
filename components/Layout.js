import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Christian Tsoungui Obama</title> {/* Customize this */}
        <meta name="description" content="Showcasing my skills and exciting projects." /> {/* Customize this */}
        <link rel="icon" href="/me.png" /> {/* Add your favicon.ico to public folder */}
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
