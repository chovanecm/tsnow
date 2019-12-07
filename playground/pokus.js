/**
 * 
 * @param {GlideRecord<sys_user>} abc 
 */
function ahoj(abc, pokus) {
    abc.addQuery("company.name")
    abc.setValue("choice", "two-blbost"); // WRONG
    abc.setValue("choice", "two"); // OK
    abc.setValue("company", "abc"); // WRONG
    
    

    var company = abc.getElement("company");
    abc.addJoinQuery("sys_user", "company", "company.name");

    var ahojSvete = new GlideRecord("sys_user");
    ahojSvete.company.getRefRecord()
    
}


(function () {
    var mujGr;
    if (window) {
        mujGr = new GlideRecord("sys_user");
        if (mujGr.getValue("choice") === mujGr.getValue("anotherChoice")) {
            if (mujGr.getValue("company") === "one") {
                /**
                 @type {ChoiceValue<sys_user, "choice">}
                 */
                var str = "one";
                mujGr.setValue("choice", str)
            }
        }
    }
    
});