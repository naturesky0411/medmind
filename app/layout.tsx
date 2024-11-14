import ProviderComponent from '@/components/layouts/provider-component';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../styles/tailwind.css';
import '../styles/custom.css';
import { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';

export const metadata: Metadata = {
    title: {
        template: '%s | MedMinded',
        default: 'MedMinded',
    },
};
const dmSans = DM_Sans({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-dm-sans',
});
const inter = Inter({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-dm-sans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.variable}>
                <ProviderComponent>{children}</ProviderComponent>
            </body>
        </html>
    );
}
