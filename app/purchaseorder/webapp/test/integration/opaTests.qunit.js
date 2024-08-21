sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ust/chitturi/hemalatha/purchaseorder/test/integration/FirstJourney',
		'ust/chitturi/hemalatha/purchaseorder/test/integration/pages/POsList',
		'ust/chitturi/hemalatha/purchaseorder/test/integration/pages/POsObjectPage',
		'ust/chitturi/hemalatha/purchaseorder/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ust/chitturi/hemalatha/purchaseorder') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);