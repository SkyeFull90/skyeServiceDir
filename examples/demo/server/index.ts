import { Hono } from "hono";

const app = new Hono();

app.get('/', (c) => c.text('Hello Bun '))
app.get("/api", (c) => {
    return c.json({hello: "world"});
})

console.log("Hello via Bun!");

Bun.serve({
    fetch: app.fetch,
    port: process.env.PORT || 3000
})