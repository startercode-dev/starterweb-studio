import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                header: 'var(--font-header)',
                body: 'var(--font-body)',
                body2: 'var(--font-body-2)'
            },
            colors: {
                primary: {
                    '05': 'var(--blue-50)',
                    1: 'var(--blue-100)',
                    2: 'var(--blue-200)',
                    3: 'var(--blue-300)',
                    4: 'var(--blue-400)',
                    5: 'var(--blue-500)',
                    6: 'var(--blue-600)',
                    7: 'var(--blue-700)',
                    8: 'var(--blue-800)',
                    9: 'var(--blue-900)',
                    95: 'var(--blue-950)',
                    hover: '',
                },
                secondary: {
                    '05': 'var(--purple-50)',
                    1: 'var(--purple-100)',
                    2: 'var(--purple-200)',
                    3: 'var(--purple-300)',
                    4: 'var(--purple-400)',
                    5: 'var(--purple-500)',
                    6: 'var(--purple-600)',
                    7: 'var(--purple-700)',
                    8: 'var(--purple-800)',
                    9: 'var(--purple-900)',
                    95: 'var(--purple-950)',
                    hover: '',
                },
                accent: {
                    '05': 'var(--yellow-50)',
                    1: 'var(--yellow-100)',
                    2: 'var(--yellow-200)',
                    3: 'var(--yellow-300)',
                    4: 'var(--yellow-400)',
                    5: 'var(--yellow-500)',
                    6: 'var(--yellow-600)',
                    7: 'var(--yellow-700)',
                    8: 'var(--yellow-800)',
                    9: 'var(--yellow-900)',
                    95: 'var(--yellow-950)',
                    hover: '',
                },
                grey: {
                    '000': 'var(--grey-000)',
                    100: 'var(--grey-100)',
                    200: 'var(--grey-200)',
                    300: 'var(--grey-300)',
                    400: 'var(--grey-400)',
                    500: 'var(--grey-500)',
                    600: 'var(--grey-600)',
                    700: 'var(--grey-700)',
                    800: 'var(--grey-800)',
                    900: 'var(--grey-900)',
                },
            },
            textColor: {
                1: 'var(--grey-900)',
                2: 'var(--grey-700)',
                3: 'var(--grey-500)',
                4: 'var(--grey-400)',
                invert: {
                    1: 'var(--grey-000)',
                    2: 'var(--grey-200)',
                    3: 'var(--grey-400)',
                    4: 'var(--grey-500)',
                },
            },
            stroke: {
                1: 'var(--blue-600)',
                invert: {
                    1: 'var(--blue-000)',
                },
            },
            fill: {
                1: 'var(--grey-900)',
                2: 'var(--grey-700)',
                3: 'var(--grey-500)',
                invert: {
                    1: 'var(--grey-100)',
                    2: 'var(--grey-200)',
                    3: 'var(--grey-300)',
                },
            },
            backgroundColor: {
                1: 'var(--blue-50)',
                2: 'var(--yellow-100)',
                invert: {
                    1: 'var(--blue-950)',
                    2: 'var(--blue-200)',
                },
            },
            borderColor: {
                dividers: {
                    1: 'var(--grey-300)',
                    2: 'var(--grey-200)',
                },
            },
            ringColor: {
                card: 'var(--grey-300)',
                100: 'var(--grey-300)',
            },
            borderRadius: {
                'primary-desktop': '16px',
                'secondary-desktop': '4px',
                'primary-mobile': '8px',
                'secondary-mobile': '4px',
            },
            gridTemplateRows: {
                '0fr': '0fr',
                '1fr': '1fr',
            },
            maxWidth: {
                container: '1372px',
                header: '1372px',
            },
        },
    },
    plugins: [],
};
export default config;
