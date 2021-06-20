{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(status: ResourceLoadState) {
    if (status.state === 'loading') {
      console.log("👀 loading...");
    }
    else if (status.state === "success") {
      status.response.body = "😃 " + status.response.body;
      console.log(status.response.body);
    }
    else {
      status.reason = "😱 " + status.reason;
      console.log(status.reason);
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
