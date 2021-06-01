<template>
    <v-app>
        <v-container fluid class="fill-height">
            <v-row justify="center" align="center">
                <v-col class="justify-center">
                    <v-btn @click="onClick">Click</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
    import Vue from 'vue';

    export default Vue.extend({
        name: 'App',
        methods: {
            onClick() {
                debugger;
                console.log('Click');
            }
        }
    });
</script>
