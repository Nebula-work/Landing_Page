import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Sysmos — API Monitoring, Flow Automation & Server Observability',
        short_name: 'Sysmos',
        description: 'Distributed API monitoring, visual API flow builder, and eBPF-powered server observability — all in one platform.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0b1120',
        theme_color: '#22b8e6',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
