# Title

CAPM - Microservice - HANA

## Description

A CAP microservice works as an interface to avoid direct access to SAP HANA Cloud.

### When should I use it?

- When SAP HANA Cloud artifacts (tables/views/etc) are modelled in another CAP project. The HANA Cloud instance could be both in the same subaccount or in another one.
- A new CAP app could be created with the sole purpose of acting as a microservice that handles access to HANA Cloud data. Other CAP apps connect to this new CAP app rather than to HANA Cloud.
- When a CAP app does not have direct access to the database layer, configuring SAP HANA cross-container access is a cumbersome task and should be avoided.
- This approach simplifies consumption and maintenance as there is no need to configure HDI cross-container accesses, roles and synonyms.

### Examples

- Side-by-Side extensions to keep the Core Clean.
- A microservice that manages user data in SAP BTP is used by multiple applications that require user information.
- A microservice that manages customer loyalty data is used by multiple applications:
- Customer-facing app to check their loyalty points;
  - Employee-facing app to audit loyalty points accumulation;
  - Supplier-facing app to create extra loyalty  points campaigns;

### Footnotes

- HTML5 Application Repository Service can host any web app such as SAP Fiori, Angular, React, Vue, etc.
- CAPM (Cloud Application Programming Model) apps could be developed in Node.js or Java.
- Communication between the services should go through the Destination Service, not added to the diagram to simplify it.
- On-premise solutions could be both SAP and non-SAP.
- Cloud solutions could be both SAP and non-SAP.
- SAP Cloud Identity Services is not required to connect to On-premise or Cloud solutions.

## Image

<img width="743" alt="image" src="https://github.com/rsletta/sap_btp_icons_drawio_lib/assets/443888/c2068497-1ac8-4a14-a40c-870d3f3ffebd">

## Tags / Keywords

CAP, CAPM, Node.js, Java, HANA, HANA Cloud, microservice



[Open Diagram in the browser](https://app.diagrams.net/?create=https://raw.githubusercontent.com/rsletta/sap_btp_icons_drawio_lib/main/src/templates/CAPM-Microservice-HANA/SAPBTP-CAP_CAP_HANA.drawio.xml&clibs=Uhttps://raw.githubusercontent.com/rsletta/sap_btp_icons_drawio_lib/main/libs/SAP_BTP_Service_Icons_latest.xml)

## Desktop Client Draw.io

To use in desktop client use the following link and import with template url: 

https://raw.githubusercontent.com/rsletta/sap_btp_icons_drawio_lib/main/src/templates/CAPM-Microservice-HANA/SAPBTP-CAP_CAP_HANA.drawio.xml&clibs=Uhttps://raw.githubusercontent.com/rsletta/sap_btp_icons_drawio_lib/main/libs/SAP_BTP_Service_Icons_latest.xml