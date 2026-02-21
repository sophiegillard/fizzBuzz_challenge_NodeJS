import { app } from "./app.js";

const port = Number(process.env.PORT) || 3001;

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

server.on("error", (err) => {
    console.error("Server error:", err);
    process.exit(1);
});
