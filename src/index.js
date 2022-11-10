import { writeFile } from 'node:fs/promises';
import xmlEscape from 'xml-escape';

async function main() {
    try {
        const response = await fetch('https://discovery-center.cloud.sap/servicecatalog/Services?$format=json');
        const odataResult = await response.json();
        const mappedData = odataResult?.d?.results.map(item => {
            const extendTags = `sap,btp,${item.Tags}`;
            const tags = extendTags.split(',');
            return {
                "url": item.Icon,
                "data": item.Icon,
                "w": 30,
                "h": 48,
                "title": xmlEscape(item.Name),
                "aspect": "fixed",
                "tags": tags.map(tag => xmlEscape(tag))
            }
        });
        const payload = `<mxlibrary>\n${JSON.stringify(mappedData)}\n</mxlibrary>`;
        await writeFile('./libs/SAP_BTP_Service_Icons_latest.xml', payload);

    } catch (err) {
        console.error(err);
    }
}

main();
