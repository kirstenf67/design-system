import { customThemeColors } from './themeConfig.js';

// Destructure necessary functions from the global Vue and Vuetify objects
const { createApp, ref, watch } = Vue;
const { createVuetify } = Vuetify;

// Create the Vuetify instance using the imported theme colors
const vuetify = createVuetify({
    theme: {
        defaultTheme: 'light', // Explicitly set default theme
        themes: customThemeColors, // Use the imported theme object
    },
});

// Create the Vue app instance
const app = createApp({
    data() {
        return {
            drawer: true,
            currentPage: 'introduction',
            navigationItems: [
                { id: 'introduction', title: 'Introduction', icon: 'mdi-home', link: '#introduction' },
                { id: 'colors', title: 'Colors', icon: 'mdi-palette', link: '#colors' },
                { id: 'typography', title: 'Typography', icon: 'mdi-format-text', link: '#typography' },
                { id: 'buttons', title: 'Buttons', icon: 'mdi-button-cursor', link: '#buttons' }, // Example with icon
                { id: 'cards', title: 'Cards', icon: 'mdi-card-outline', link: '#cards' }, // Example with icon
            ],
        };
    },
    methods: {
        updateCurrentPage() {
            const hash = window.location.hash.substring(1);
            if (hash) {
                const foundItem = this.navigationItems.find(item => item.id === hash);
                if (foundItem) {
                    this.currentPage = hash;
                } else {
                    this.currentPage = 'introduction';
                }
            } else {
                this.currentPage = 'introduction';
            }
        },
    },
    mounted() {
        this.drawer = this.$vuetify.display.mdAndUp;
        window.addEventListener('hashchange', this.updateCurrentPage);
        this.updateCurrentPage();
    },
    watch: {
        '$vuetify.display.mdAndUp'(newVal) {
            this.drawer = newVal;
        },
    },
});

// Use Vuetify with the Vue app
app.use(vuetify);

// Mount the app to the #app div
app.mount('#app');
