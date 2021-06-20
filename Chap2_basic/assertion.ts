{
    function getString() : any {
        return "hello";
    }

    const result = getString();
    console.log((result as string).length);
}