import { AdminBoundary } from '@/ui/boundaries/admin.boundary';
import { PropsWithChildren } from 'react';
import AppBarLayout from '../_layouts/app-bar.layout';
import AppBar from '../@appbar/layout';
import { Footer } from '@/ui/layout/footer';

export default function DesignLayout(props: PropsWithChildren) {
  return (
    <AdminBoundary redirectOnFailHref="/not-found">
      <AppBarLayout appBar={<AppBar />} footer={<Footer />}>
        {props.children}
      </AppBarLayout>
    </AdminBoundary>
  );
}
