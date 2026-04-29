/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Intelligence from './pages/Intelligence';
import Product from './pages/Product';
import CaseStudies from './pages/CaseStudies';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intelligence" element={<Intelligence />} />
        <Route path="/product" element={<Product />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/company" element={<Company />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

