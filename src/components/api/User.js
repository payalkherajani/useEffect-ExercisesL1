import { createServer, Model, RestSerializer } from "miragejs";

export default function setupMockServer() {
    createServer({
        serializers: {
            application: RestSerializer      //Returns JSON Payload
        },

        models: {
            user: Model            //Create model user
        },

        routes() {
            this.namespace = "api";   //  /api
            this.timing = 3000;       //delay of 3000 miliseconds
            this.resource("users");   //  /api/users
        },

        seeds(server) {
            server.create("user", { id: 1, name: "Ram" });
            server.create("user", { id: 2, name: "Shyam" });  //Seed with sample data
        }
    });
}