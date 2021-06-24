{
    class TimeoutError extends Error {

    }

    class OfflineError extends Error {

    }

    class NetWorkClient {
        tryConnect() : void {
            throw new Error("No network");
        }
    }

    class UserClient {
        constructor(private client: NetWorkClient) {}

        login() {
            this.client.tryConnect();
        }
    }

    class App {
        constructor(private userService: UserClient) {};
        
        run() {
            try {
                this.userService.login();
            }
            catch(error) {
                // Show a dialog to users
            }
        }
    }

    const client = new NetWorkClient();

    const service = new UserClient(client);

    const app = new App(service);

    app.run();
}