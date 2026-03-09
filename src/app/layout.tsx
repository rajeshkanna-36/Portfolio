import type { Metadata } from 'next';
import '@/index.css';
import ClientWrapper from '@/components/ClientWrapper';

export const metadata: Metadata = {
    title: 'Rajesh Kanna | Full Stack Developer & Designer',
    description: 'Rajesh Kanna - Full Stack Developer and Designer. Explore my portfolio featuring web apps, UI/UX projects, and creative engineering solutions.',
    icons: {
        icon: '/logo.svg',
    },
    keywords: 'Rajesh Kanna, rajeshkanna, Rajesh Kanna developer, Rajesh Kanna portfolio, full stack developer, web developer, software engineer',
    verification: {
        google: 'KlWodz752_-U15fpnoiECKDf5Bt4j60OQ727dtsOuvA',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </head>
            <body>
                <div id="root">
                    <ClientWrapper>
                        {children}
                    </ClientWrapper>
                </div>
            </body>
        </html>
    );
}
