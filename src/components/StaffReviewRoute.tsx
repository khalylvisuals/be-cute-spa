import { lazy, Suspense } from 'react';

const ReviewPage = lazy(() => import('../pages/ReviewPage'));

export default function StaffReviewRoute() {
  return <Suspense fallback={null}><ReviewPage /></Suspense>;
}
