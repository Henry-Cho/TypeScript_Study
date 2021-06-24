{
    
    type SuccessState = {
        result: 'success';
    }

    type NetworkErrorState = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout';
    }

    type ResultState = SuccessState | NetworkErrorState;

    class NetWorkClient {
        tryConnect() : ResultState {
            return {result: "success"};
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