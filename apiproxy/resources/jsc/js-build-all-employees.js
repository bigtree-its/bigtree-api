var data = context.getVariable("bigtree.data");
if ( data !== null || data !== '' || data !== undefined){
    var jsonData = JSON.parse(data);
    var employees = jsonData.employees;
    context.setVariable("employees", JSON.stringify(employees));
}