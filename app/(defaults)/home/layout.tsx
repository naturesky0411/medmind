import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}
