/**
 * 
 * @param {GlideRecord<sys_user>} abc 
 */
function ahoj(abc) {
    abc.addQuery("company.name")
    abc.setValue("choice", "two-blbost"); // WRONG
    abc.setValue("choice", "two"); // OK
    abc.setValue("company", "abc"); // WRONG

    var createdOn = abc.sys_created_on.getGlideObject();
    createdOn.subtract(456);



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





// explorer:
(
    /**
     * 
     * @param {TableName} table 
     */
    function (table) {
    var gr = new GlideRecord("sys_user");
    gr.setLimit(1);
    gr.query();
    if (!gr.next()) {
        throw "No record to test";
    }

    var keysToTry = [
        "dateNumericValue", "debug", "getBooleanAttribute", "getChoices", "getChoiceValue", "getFieldStyle", "getGlideObject", "getGlideRecord", "getHTMLValue", "getJournalEntry", "getRefRecord", "setDateNumericValue",
        "setJournalEntry", "addMonths", "getLabel", "getName"];
    for (var elementName in gr) {
        var element = gr[elementName];
        gs.print("element " + element.getED().getName() + " / " + element.getED().getInternalType())
         keysToTry.forEach(function (key) {
        
        var fn = element[key];
        gs.print("gr." + elementName + "." + key + " = " + typeof fn);
        if (typeof fn === "function" && fn.length === 0) {
            var result = element[key]();
            if (key != "getGlideObject") {
            gs.print(" -- (): " + result + " type of " + typeof result);
}

        }
    });
    }
   
})("sys_user");