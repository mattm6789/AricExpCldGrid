import { LightningElement, api } from 'lwc';
import ROBOTS_ON_BEACH from "@salesforce/resourceUrl/robots_on_beach";
import IMAGE_GRID_DESIGNER_2 from "@salesforce/resourceUrl/image_grid_designer_2";
import BLACK_CAT_JUGGLING from "@salesforce/resourceUrl/cat_juggling";
import IMAGE_GRID_DESIGNER_4 from "@salesforce/resourceUrl/image_grid_designer_4";
import IMAGE_GRID_DESIGNER_5 from "@salesforce/resourceUrl/image_grid_designer_5";
import IMAGE_GRID_DESIGNER_6 from "@salesforce/resourceUrl/image_grid_designer_6";



export default class ImageGrid extends LightningElement {

    @api url1 = 'https://aricexpcldgrid-dev-ed.trailblaze.my.site.com/AuraTemplate/s/page-1';
    @api image1 = ROBOTS_ON_BEACH;
    @api url2 = 'https://aricexpcldgrid-dev-ed.trailblaze.my.site.com/AuraTemplate/s/page-2';
    @api image2 = IMAGE_GRID_DESIGNER_2;
    @api url3 = 'https://aricexpcldgrid-dev-ed.trailblaze.my.site.com/AuraTemplate/s/page-3';
    @api image3 = BLACK_CAT_JUGGLING;
    @api url4 = 'https://aricexpcldgrid-dev-ed.trailblaze.my.site.com/AuraTemplate/s/page-4';
    @api image4 = IMAGE_GRID_DESIGNER_4;
    @api url5 = 'https://aricexpcldgrid-dev-ed.trailblaze.my.site.com/AuraTemplate/s/page-5';
    @api image5 = IMAGE_GRID_DESIGNER_5;
    @api url6 = 'https://aricexpcldgrid-dev-ed.trailblaze.my.site.com/AuraTemplate/s/page-6';
    @api image6 = IMAGE_GRID_DESIGNER_6;
}