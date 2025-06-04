// Destructure necessary functions from the global Vue and Vuetify objects
const { createApp, ref, watch } = Vue;
const { createVuetify } = Vuetify;

// Create the Vuetify instance with your custom theme colors
const vuetify = createVuetify({
    theme: {
        themes: {
            light: {
                colors: {
                    primary: '#013886', // A standard blue
                    secondary: '#424242', // Dark grey
                    accent: '#FFC107', // Amber
                    error: '#FF5252', // Red
                    info: '#2196F3', // Light blue
                    success: '#4CAF50', // Green
                    warning: '#FFC107', // Amber

                    // Your Custom Brand Colors
                    customBrandBlue: '#0A2E59', // Example: A deep, rich blue
                    customBrandGreen: '#4CAF50', // Example: A vibrant green
                    customBrandAccent: '#FFD700', // Example: A golden yellow
                    customNeutralLight: '#F5F5F5', // Example: A very light gray
                    customNeutralDark: '#333333', // Example: A dark charcoal
                },
            },
        },
    },
});

// Create the Vue app instance
const app = createApp({
    data() {
        return {
            drawer: true, // Controls the visibility of the navigation drawer
            currentPage: 'introduction', // Stores the ID of the currently active content section
            navigationItems: [
                // Links now use hash-based routing for SPA
                { id: 'introduction', title: 'Introduction', icon: 'mdi-home', link: '#introduction' },
                { id: 'colors', title: 'Colors', icon: 'mdi-palette', link: '#colors' },
                { id: 'typography', title: 'Typography', icon: 'mdi-format-text', link: '#typography' },
                { id: 'buttons', title: 'Buttons', link: '#buttons' }, // No 'icon' property for Buttons
                { id: 'cards', title: 'Cards', link: '#cards' },     // No 'icon' property for Cards
            ],
        };
    },
    methods: {
        // Updates `currentPage` based on the URL hash
        updateCurrentPage() {
            const hash = window.location.hash.substring(1); // Remove the '#'
            if (hash) {
                // Check if the hash matches any of our navigation item IDs
                const foundItem = this.navigationItems.find(item => item.id === hash);
                if (foundItem) {
                    this.currentPage = hash;
                } else {
                    // Fallback to introduction if hash doesn't match a defined section
                    this.currentPage = 'introduction';
                }
            } else {
                this.currentPage = 'introduction'; // Default page if no hash in URL
            }
        },
    },
    mounted() {
        // Set initial drawer state based on screen size (open on desktop, closed on mobile)
        this.drawer = this.$vuetify.display.mdAndUp;

        // Listen for URL hash changes (e.g., when clicking navigation links or browser back/forward)
        window.addEventListener('hashchange', this.updateCurrentPage);

        // Call it once on mount to set the initial page based on the URL hash or default
        this.updateCurrentPage();
    },
    watch: {
        // Watch for changes in Vuetify's breakpoint to adjust drawer visibility
        '$vuetify.display.mdAndUp'(newVal) {
            this.drawer = newVal;
        },
    },
});

// Use Vuetify with the Vue app
app.use(vuetify);

// Mount the app to the #app div
app.mount('#app');
