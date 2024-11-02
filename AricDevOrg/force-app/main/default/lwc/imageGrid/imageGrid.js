import { LightningElement, api } from 'lwc';
import ROBOTS_ON_BEACH from "@salesforce/contentAssetUrl/Designer_1";
export default class ImageGrid extends LightningElement {


    @api url = 'https://aricexpcldgrid-dev-ed.trailblaze.my.site.com/AuraTemplate/s/page-1';
    @api imageSrc = ROBOTS_ON_BEACH;
}