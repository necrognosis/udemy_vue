new Vue({
    el: "#app",
    data: {
        title: "Lets get comfy with Vue...",
        name: "Chapman",
        url: "https://www.youtube.com",
        classes: ["one", "two"]
    },
    methods: {
        greet(time) {
            return `Hello, and good ${time} ${this.name}! `
        }
    }
});