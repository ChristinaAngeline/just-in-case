var myObj = {
    // This is the first Main Object
    myPersonalInfo: {
        myName: "Name: ",
        mySSN: "Social Security Number: ",
        myDOB: "Date of Birth: ",
        placeOfBirth: "Place of Birth: ",
        myAddress: "Address: ",
        locationOfHouseKeys: "Location of House key: ",
        locationOfPostOfficeBoxKeysOrCombination: "Location of post office box keys or combination: ",
        mydriverLicenseState: "My Driver License State: ",
        mydriverLicenseNum: "My Driver License Number: ",
        myPhone: "Phone Number: ",
        myFax: "Fax Number: ",
        myEmail: "Email Address: ",
        myWebsite: "Personal Website: ",
        maritalStatues: "Marital Statues: ",
    },

    spousePersonalInfo: {
        spouseLegalName: "Spouse Legal Name: ",
        dateAndPlaceOfMarriage: "Date and Place of Marriage: ",
        locationOfMarriageCerticate: "Location of Marriage Certicate: ",
        spouseSSN: "Spouse Social Security Number: ",
        spouseDOB: "Spouse Date of Birth: ",
        spousePlaceofBirth: "Place of Birth: ",
        spouseAddress: "Address: ",
        spousePhone: "Phone Number: ",
        spouseEmail: "Email Address: ",
        spouseWebsite: "Personal Website: ",
    },

    medicalInfo: {
        myBloodType: "Blood Type: ",
        myAllergies: "Allergies: ",
        myMedications: "Medications: ",
        nameOfMedicine: "Name of Medicine: ",
        doctorPrescribing: "Doctor Prescribing: ",
        prescriptionNum: "Prescription Number: ",
        dosage: "Dosage: ",
    },

    emergencyNotification: {
        name: "Name: ",
        phoneNum: "Phone Number: ",
        relationship: "Relationship",
        address: "Address: ",
        email: "Email Address: ",
    },

    //This is the 2nd Main Object
    locationLegalDocument: {

        locationOfMyDocument1: "Location of Social Security Card: ",
        locationOfMyDocument2: "Location of Birth Certificate: ",

        ////
        locationOfMyDocument3: "Location of Will: ",
        date: "Date last updated: ",
        executorName: "Executor Name: ",
        attorneyName: "Attorney's Name: ",
        lawFirm: "Law Firm Name: ",
        lawFirmAddress: "Law Firm Address: ",
        attornyPhone: "Attorney Phone Number: ",
        attornyEmail: "Attorney Email: ",

        //
        locationOfMyDocument4: "Location of Living Will: ",
        date1: "Date last updated: ",
        executorName1: "Executor Name: ",
        attorneyName1: "Attorney's Name: ",
        lawFirm1: "Law Firm Name: ",
        lawFirmAddress1: "Law Firm Address: ",
        attorneyPhone1: "Attorney Phone Number: ",
        attorneyEmail1: "Attorney Email: ",

        locationOfMyDocument6: "Location of Advance Directives Document: ",
        date2: "Date last updated: ",
        executorName2: "Executor Name: ",
        attorneyName2: "Attorney's Name: ",
        lawFirm2: "Law Firm Name: ",
        lawFirmAddress2: "Law Firm Address: ",
        attorneyPhone2: "Attorney Phone Number: ",
        attorneyEmail2: "Attorney Email: ",

        locationOfMyDocument8: "Location of Power of Attorney Document: ",
        executorName3: "Executor Name: ",
    },

    healthInsurance: {
        company: "Company: ",
        address: "Address: ",
        federalPlan: "Federal Plan: ",
        memberNum: "Member Number:",
        groupPolicyNum: "Group Policy Number: ",
        personsCovered: "Persons Covered: ",
        additionalCoverage: "Additional Coverage: ",
        payments: "Payments: ",
        locationOfMyDocument: "Location of MyDocument: ",
        medicareNum: "Medicare Number: ",
        medicaidNum: "Medicaid Number: ",
    },

    myEmployer: {
        nameOfEmployer: "Name of Employer: ",
        nameOfOffice: "Name of Office:",
        workAddress: "Work Address:",
        myWorkTelephone: "Work Phone:",
        myWorkEmail: "My Work Email: ",
        dateOfEmployment: "Date of Employment: ",
        myCurrentTitle: "Current Title: ",
        supervisorInfo: "Supervisor Info: ",
        superName: "Supervisor Name: ",
        superPhone: "Supervisor Phone Number: ",
        superEmail: "Supervisor Email: ",
    },

    financialInfo: {
        bank: "Bank Name: ",
        address: "Bank Address: ",
        checkingAccountNum: "Checking Account Number: ",
        savingAccountNum: "Savings Account Number: ",
        atmCardNum: "ATM Card Number: ",
        atmPinNum: "ATM Pin Number: ",
    },

    //This is the 3rd Main Object
    funeralArrangments: {
        churchName: " Church Name: ",
        churchAddress: "Church Address: ",
        churchPhone: " Church Phone: ",
        funeralService: "Funeral Service: ",
        typeOfService: "Type of Service: ",
        funeraladdress: "Funeral Address: ",

    },

};

$(document).ready(function() {

    for (var key in myObj.myPersonalInfo) {

        var pTag = $('<p>');
        pTag.text(myObj.myPersonalInfo[key]);
        var inputTag = $('<input type="text">');
        inputTag.attr('name', key);
        pTag.append(inputTag);
        pTag.insertBefore($("#personal>input[type=submit]"));

    }

    $("#personal>input[type=submit]").on("click", function(ev) {

        ev.preventDefault();
        $('#personal input[type=text]').each(function(index, input) {
            var currentInput = $(this);
            var nameAttribute = currentInput.attr('name');

            myObj.myPersonalInfo[nameAttribute] += currentInput.val();
            var personalDetail = myObj.myPersonalInfo[nameAttribute];
            // create the element
            var newPTag = $('<p>');
            // update the element
            newPTag.text(personalDetail);
            //attach p element to the (dom)
            $('#results').append(newPTag);

        });

    });

    // Spouse key
    for (var spousekey in myObj.spousePersonalInfo) {

        var pTag1 = $('<p>');
        pTag1.text(myObj.spousePersonalInfo[spousekey]);
        var inputTag1 = $('<input type="text">');
        inputTag1.attr('name', spousekey);
        pTag1.append(inputTag1);
        pTag1.insertBefore($("#spouseInfo>input[type=submit]"));

    }


    $("#spouseInfo>input[type=submit]").on("click", function(ev) {

        ev.preventDefault();
        $('#spouseInfo input[type=text]').each(function(index, input) {
            var currentInput = $(this);
            var nameAttribute = currentInput.attr('name');

            myObj.spousePersonalInfo[nameAttribute] += currentInput.val();
            var personalDetail1 = myObj.spousePersonalInfo[nameAttribute];
            // create the element
            var newPTag1 = $('<p>');
            // update the element
            newPTag1.text(personalDetail1);
            //attach it to something (dom)$('#spouseResults').append(newPTag1);

        });

    });

    //Medical Info
    for (var medKey in myObj.medicalInfo) {

        var pTag2 = $('<p>');
        pTag2.text(myObj.medicalInfo[medKey]);
        var inputTag2 = $('<input type="text">');
        inputTag2.attr('name', medKey);
        pTag2.append(inputTag2);
        pTag2.insertBefore($("#medicalInfo>input[type=submit]"));

    }

    $("#medicalInfo>input[type=submit]").on("click", function(ev) {

        ev.preventDefault();
        $('#medicalInfo input[type=text]').each(function(index, input) {
            var currentInput = $(this);
            var nameAttribute = currentInput.attr('name');

            myObj.medicalInfo[nameAttribute] += currentInput.val();
            var personalDetail2 = myObj.medicalInfo[nameAttribute];
            // create the element
            var newPTag2 = $('<p>');
            // update the element
            newPTag2.text(personalDetail2);
            //attach it to something (dom)
            $('#medicalResult').append(newPTag2);

        });

    });

    /// Emergency Info
    for (var emergencyKey in myObj.emergencyNotification) {

        var pTag3 = $('<p>');
        pTag3.text(myObj.emergencyNotification[emergencyKey]);
        var inputTag3 = $('<input type="text">');
        inputTag3.attr('name', emergencyKey);
        pTag3.append(inputTag3);
        pTag3.insertBefore($("#emergencyInfo>input[type=submit]"));

    }

    $("#emergencyInfo>input[type=submit]").on("click", function(ev) {

        ev.preventDefault();
        $('#emergencyInfo input[type=text]').each(function(index, input) {
            var currentInput = $(this);
            var nameAttribute = currentInput.attr('name');

            myObj.emergencyNotification[nameAttribute] += currentInput.val();
            var personalDetail3 = myObj.emergencyNotification[nameAttribute];
            // create the element
            var newPTag3 = $('<p>');
            // update the element
            newPTag3.text(personalDetail3);
            //attach it to something (dom)3
            $('#emergencyResult').append(newPTag3);

        });

    });

    // Legal Document

    for (var legalDocumentKey in myObj.locationLegalDocument) {

        var pTag4 = $('<p>');
        pTag4.text(myObj.locationLegalDocument[legalDocumentKey]);
        var inputTag4 = $('<input type="text">');
        inputTag4.attr('name', legalDocumentKey);
        pTag4.append(inputTag4);
        pTag4.insertBefore($("#legalInfo>input[type=submit]"));

    }

    $("#legalInfo>input[type=submit]").on("click", function(ev) {

        ev.preventDefault();
        $('#legalInfo input[type=text]').each(function(index, input) {
            var currentInput = $(this);
            var nameAttribute = currentInput.attr('name');

            myObj.locationLegalDocument[nameAttribute] += currentInput.val();
            var personalDetail4 = myObj.locationLegalDocument[nameAttribute];
            // create the element
            var newPTag4 = $('<p>');
            // update the element
            newPTag4.text(personalDetail4);
            //attach it to something (dom)
            $('#legalResult').append(newPTag4);

        });

    });

    //  healthInsurance

    for (var healthKey in myObj.healthInsurance) {

        var pTag5 = $('<p>');
        pTag5.text(myObj.healthInsurance[healthKey]);
        var inputTag5 = $('<input type="text">');
        inputTag5.attr('name', healthKey);
        pTag5.append(inputTag5);
        pTag5.insertBefore($("#healthInfo>input[type=submit]"));

    }

    $("#healthInfo>input[type=submit]").on("click", function(ev) {

        ev.preventDefault();
        $('#healthInfo input[type=text]').each(function(index, input) {
            var currentInput = $(this);
            var nameAttribute = currentInput.attr('name');

            myObj.healthInsurance[nameAttribute] += currentInput.val();
            var personalDetail5 = myObj.healthInsurance[nameAttribute];
            // create the element
            var newPTag5 = $('<p>');
            // update the element
            newPTag5.text(personalDetail5);
            //attach it to something (dom)
            $('#healthResult').append(newPTag5);

        });

    });

    //Employment
    for (var employmentKey in myObj.myEmployer) {

        var pTag6 = $('<p>');
        pTag6.text(myObj.myEmployer[employmentKey]);
        var inputTag6 = $('<input type="text">');
        inputTag6.attr('name', employmentKey);
        pTag6.append(inputTag6);
        pTag6.insertBefore($("#employerInfo>input[type=submit]"));

    }

    $("#employerInfo>input[type=submit]").on("click", function(ev) {

        ev.preventDefault();
        $('#employerInfo input[type=text]').each(function(index, input) {
            var currentInput = $(this);
            var nameAttribute = currentInput.attr('name');

            myObj.myEmployer[nameAttribute] += currentInput.val();
            var personalDetail6 = myObj.myEmployer[nameAttribute];
            // create the elementemployer
            var newPTag6 = $('<p>');
            // update the element
            newPTag6.text(personalDetail6);
            //attach it to something (dom)
            $('#employerResult').append(newPTag6);

        });

    });

    // financialInfo
    for (var financialKey in myObj.financialInfo) {

        var pTag7 = $('<p>');
        pTag7.text(myObj.financialInfo[financialKey]);
        var inputTag7 = $('<input type="text">');
        inputTag7.attr('name', financialKey);
        pTag7.append(inputTag7);
        pTag7.insertBefore($("#financialInfo>input[type=submit]"));

    }

    $("#financialInfo>input[type=submit]").on("click", function(ev) {

        ev.preventDefault();
        $('#financialInfo input[type=text]').each(function(index, input) {
            var currentInput = $(this);
            var nameAttribute = currentInput.attr('name');

            myObj.financialInfo[nameAttribute] += currentInput.val();
            var personalDetail7 = myObj.financialInfo[nameAttribute];
            // create the elementemployer
            var newPTag7 = $('<p>');
            // update the element
            newPTag7.text(personalDetail7);
            //attach it to something (dom)
            $('#financialResult').append(newPTag7);

        });

    });

    //funeralArrangments

    for (var funeralKey in myObj.funeralArrangments) {

        var pTag8 = $('<p>');
        pTag8.text(myObj.funeralArrangments[funeralKey]);
        var inputTag8 = $('<input type="text">');
        inputTag8.attr('name', funeralKey);
        pTag8.append(inputTag8);
        pTag8.insertBefore($("#funeralInfo>input[type=submit]"));

    }

    $("#funeralInfo>input[type=submit]").on("click", function(ev) {

        ev.preventDefault();
        $('#funeralInfo input[type=text]').each(function(index, input) {
            var currentInput = $(this);
            var nameAttribute = currentInput.attr('name');

            myObj.funeralArrangments[nameAttribute] += currentInput.val();
            var personalDetail8 = myObj.funeralArrangments[nameAttribute];
            // create the elementemployer
            var newPTag8 = $('<p>');
            // update the element
            newPTag8.text(personalDetail8);
            //attach it to something (dom)
            $('#funeralResult').append(newPTag8);

        });

    });

});
