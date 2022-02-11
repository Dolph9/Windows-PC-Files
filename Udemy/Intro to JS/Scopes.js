//Scopes

//Parent Scope:

var something = 5;
console.log(something)

function yes(){
    // child scope:
    var yesinside = (3,"yes im inside");
    console.log(yesinside);
}

//Scopes are functions of the window. 
//(Parent scopes will be prioritized over child scope)
//(if no child scope is available the parent scope will be used. (if same var name))

//we can use scopes like this -->

//Copy + paste the function above.
//  window.yes();
//will return 3,"yes im inside" in the console.