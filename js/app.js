// js/app.js

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
            // New data property to control theme state
            isDarkTheme: false, // Initialize with light theme as default
            navigationItems: [
                { id: 'introduction', title: 'Introduction', icon: 'mdi-home', link: '#introduction' },
                { id: 'colors', title: 'Colors', icon: 'mdi-palette', link: '#colors' },
                { id: 'typography', title: 'Typography', icon: 'mdi-format-text', link: '#typography' },
                { id: 'buttons', title: 'Buttons', icon: 'mdi-button-cursor', link: '#buttons' },
                { id: 'cards', title: 'Cards', icon: 'mdi-card-outline', link: '#cards' },
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

        // Initialize theme based on isDarkTheme value
        this.$vuetify.theme.global.name = this.isDarkTheme ? 'dark' : 'light';
    },
    watch: {
        '$vuetify.display.mdAndUp'(newVal) {
            this.drawer = newVal;
        },
        // Watch for changes in isDarkTheme and update Vuetify's theme
        isDarkTheme(newVal) {
            this.$vuetify.theme.global.name = newVal ? 'dark' : 'light';
        },
    },
});

// Use Vuetify with the Vue app
app.use(vuetify);

// Mount the app to the #app div
app.mount('#app');
