import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./componets/Layout";
import { About, Contact, Gallery, Home, Service } from "./pages";
import BlogDetails from "./sub-pages/BlogDetails";
import Elements from "./sub-pages/Elements";
import Blog from "./sub-pages/Blog";

import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/login" element={<Login />} />
          <Route path="/element" element={<Elements />} />
        </Route>
        <Route path="/user/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
