import { createServer, Model, RestSerializer } from "miragejs";
import faker from "faker";

export default function savemydataAddress() {
    createServer({
        serializers: {
            application: RestSerializer
        },

        models: {
            address: Model
        },

        routes() {
            this.namespace = "api";
            this.timing = 3000;
            this.resource("address");
        },

        seeds(server) {
            server.create("address", {
                id: faker.random.uuid(),
                city: "",
                state: "",
                landmark: "",
                street: "",
                pincode: "",
                address: ""
            });

        }
    });
}
