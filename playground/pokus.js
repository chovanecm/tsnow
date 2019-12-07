/**
 * 
 * @param {GlideRecord<sys_user>} abc 
 */
function ahoj(abc) {
    abc.addQuery("company.name")
    var company = abc.getElement("company");
    abc.addJoinQuery("sys_user", "company", "company.name");

    var ahojSvete = new GlideRecord("sys_user");
    ahojSvete.company.getRefRecord()
    
}