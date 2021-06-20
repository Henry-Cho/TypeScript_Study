{
    class Cat {
        // 속성
        private hungry: boolean;
        private tired: boolean;
        private full: boolean;
        private happy: boolean;

        constructor() { 
            this.hungry = false;
            this.tired = false;
            this.full = false;
            this.happy = false;  
        }

        play() {
            this.happy = true;
            this.hungry = true;
            this.full = false;
            this.tired = true;
        }

        feed() {
            this.happy = true;
            this.hungry = false;
            this.full = true;
            this.tired = true;
        }

        sleep() {
            this.happy = true;
            this.hungry = true;
            this.full = false;
            this.tired = false;
        }

        cuddle() {
            this.happy = true;
            this.hungry = true;
            this.full = false;
            this.tired = true;
        }
    }

    const cat = new Cat();

    // default
    console.log(cat);
    // play
    cat.play();
    console.log(cat);
    // feed
    cat.feed();
    console.log(cat);
    // sleep
    cat.sleep();
    console.log(cat);
    // cudle
    cat.cuddle();
    console.log(cat);
}