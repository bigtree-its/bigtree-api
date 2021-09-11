var data = context.getVariable("bigtree.data");
if ( data !== null || data !== '' || data !== undefined){
    var jsonData = JSON.parse(data);
    var companyInfo = jsonData.company_info;
    context.setVariable("company.info", JSON.stringify(companyInfo));
}