import { AuthProvider } from '@/context/AuthProvider';
import QueryProvider from '@/lib/providers/QuerryProviders';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
