# Title

CAPM - SAP Datasphere

## Description

A CAP application consuming data from SAP Datasphere.

### When should I use it?

- When business data and models are available in SAP Datasphere, they can be exposed as OData Services.
- When a CAP app needs to connect to SAP Datasphere (DS), do not connect to the HDI container underneath DS, use the OData Services provided by DS.
- Using DS OData Services simplifies consumption and maintenance as there is no need to configure HDI cross-container accesses, roles and synonyms. 

### Examples

- Side-by-Side extensions to keep the Core Clean.
- An application that extends standard Purchase Orders with custom data.
- An application that gives access to employee information mixing data from SAP S/4HANA and SuccessFactors.
- An application using data from Google BigQuery and SAP S/4HANA.

### Footnotes

- HTML5 Application Repository Service can host any web app such as SAP Fiori, Angular, React, Vue, etc.
- CAPM (Cloud Application Programming Model) apps could be developed in Node.js or Java.
- Communication between the services should go through the Destination Service, not added to the diagram to simplify it.
- On-premise solutions could be both SAP and non-SAP.
- Cloud solutions could be both SAP and non-SAP.
- SAP Cloud Identity Services is not required to connect to On-premise or Cloud solutions.

## Image

<img width="718" alt="image" src="https://github.com/rsletta/sap_btp_icons_drawio_lib/assets/443888/383d5053-584c-4033-8e52-9679a02d63fb">

## Tags / Keywords

CAP, CAPM, Node.js, Java, SAP Datasphere, OData



[Open Diagram in the browser](https://app.diagrams.net/?create=https://raw.githubusercontent.com/rsletta/sap_btp_icons_drawio_lib/main/src/templates/CAPM-SAPDatasphere/SAPBTP-CAP_SAP_Datasphere.drawio.xml&clibs=Uhttps://raw.githubusercontent.com/rsletta/sap_btp_icons_drawio_lib/main/libs/SAP_BTP_Service_Icons_latest.xml)

## Desktop Client Draw.io

To use in desktop client use the following link and import with template url: 

https://raw.githubusercontent.com/rsletta/sap_btp_icons_drawio_lib/main/src/templates/CAPM-SAPDatasphere/SAPBTP-CAP_SAP_Datasphere.drawio.xml&clibs=Uhttps://raw.githubusercontent.com/rsletta/sap_btp_icons_drawio_lib/main/libs/SAP_BTP_Service_Icons_latest.xml