/**
 * 
 * @param {GlideRecord<sys_user>} abc 
 */
function ahoj(abc) {
    abc.addQuery("company.name")
    abc.setValue("choice", "two-blbost"); // WRONG
    abc.setValue("choice", "two"); // OK
    abc.setValue("company", "abc"); // WRONG´
    abc.setValue("active", "a") // WRONG
    abc.setValue("active", "0") // OK
    abc.setValue("active", true) // OK
    abc.active.getElementValue("active") === "xyz" // WRONG: no overlap
    abc.active.getElementValue("active") === "1" // OK
    abc.getValue("active") === true // WRONG: no overlap
    abc.getValue("active") === "1" // OK
    abc.getValue("choice") === "one" // OK
    abc.getValue("choice") === "random" // WRONG - no overlap
    abc.getElement("active") === abc.active // OK
    abc.getElement("choice") === abc.getElement("company") // WRONG
    abc.getElement("choice") === abc.choice // OK
    abc.sys_created_on.getGlideObject().onOrBefore(new GlideDateTime()) // OK
    abc.choice.getGlideObject().onOrBefore(new GlideDateTime()) // WRONG
    abc.choice.getValue() === "one" // OK
    abc.choice.getValue() === "blabla" // WRONG
    abc.cost.getReferenceCurrencyCode() === "CZK" // OK
    abc.choice.getReferenceCurrencyCode() === "CZK" // WRONG
    
    
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


function demo() {
    var now = new GlideDateTime();
    var user = new GlideRecord("sys_user");
    
    user.addQuery("company.name", "CONTAINS", "DHL");
    user.setLimit(1);
    user.query();
    if (user.next()) {
        if (user.sys_created_on.getGlideObject().onOrAfter(now)) {
            user.sys_id.setValue("ahoj");
        }
    }
}