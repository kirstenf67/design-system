<script>
        // Create a new Vuetify instance with custom theme colors
        const vuetify = Vuetify.createVuetify({
            theme: {
                themes: {
                    light: {
                        colors: {
                            // Default Material Design colors (can be overridden)
                            primary: '#1976D2', // A standard blue
                            secondary: '#424242', // Dark grey
                            accent: '#FFC107', // Amber
                            error: '#FF5252', // Red
                            info: '#2196F3', // Light blue
                            success: '#4CAF50', // Green
                            warning: '#FFC107', // Amber

                            // Custom Brand Colors - Define your unique palette here!
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
        const app = Vue.createApp({
            // Your Vue app options (data, methods, etc.) can go here
            // For a static design library, you might not need much here initially.
        });

        // Use Vuetify with the Vue app
        app.use(vuetify);

        // Mount the app to the #app div
        app.mount('#app');
    </script>
