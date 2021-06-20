{
    // And.. 같은 친구!!!

    type Student = {
        name: string;
        score: number;
    }

    type Worker = {
        employeeId: number;
        work: ()=> void;
    }

    function internWork(person: Student & Worker) {
        console.log(person.name, person.employeeId, person.work());
    }

    internWork({name: "henry", score: 95, employeeId: 12345, work: () => {}, });
}