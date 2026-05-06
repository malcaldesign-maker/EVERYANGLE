/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';

// Home stays in the initial bundle so first paint is instant.
// Everything else loads on demand — drops first-load JS by ~40%.
const Intelligence = lazy(() => import('./pages/Intelligence'));
const Product = lazy(() => import('./pages/Product'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const SamsoeCaseStudy = lazy(() => import('./pages/SamsoeCaseStudy'));
const Company = lazy(() => import('./pages/Company'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const PlatformSummary = lazy(() => import('./pages/PlatformSummary'));
const NotFound = lazy(() => import('./pages/NotFound'));

function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-brand-navy">
      <div className="flex items-center gap-3 text-slate-500">
        <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Loading</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/product" element={<Product />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/samsoe" element={<SamsoeCaseStudy />} />
          <Route path="/company" element={<Company />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/summary" element={<PlatformSummary />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
