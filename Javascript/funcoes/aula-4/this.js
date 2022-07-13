// This

const pessoa = {
    firstName: "Slyssas",
    lastName: "Shadowsteps",
    id: 1,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    },
    getId: function(){
        return this.id;
    }
};

console.log(pessoa.fullName());