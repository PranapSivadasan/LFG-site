(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"],{

/***/ "+SI9":
/*!***************************************************************************!*\
  !*** ./src/app/projects/spot-light-artist/spot-light-artist.component.ts ***!
  \***************************************************************************/
/*! exports provided: SpotLightArtistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotLightArtistComponent", function() { return SpotLightArtistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_data_sla_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/sla.json */ "ivlT");
var _assets_data_sla_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/data/sla.json */ "ivlT", 1);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SpotLightArtistComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpotLightArtistComponent_ng_container_2_Template_img_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const artist_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openCollection(artist_r1.collectionLink); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const artist_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", artist_r1.artistPfp, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", artist_r1.artistName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artist_r1.artistName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", artist_r1.artistWork, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", artist_r1.artistName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", artist_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", artist_r1.collectionBanner, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", artist_r1.artistName);
} }
class SpotLightArtistComponent {
    constructor() {
        this.slaData = _assets_data_sla_json__WEBPACK_IMPORTED_MODULE_1__;
        this.arr = [1, 2, 3];
    }
    ngOnInit() {
    }
    openCollection(link) {
        window.open(link, '_blank');
    }
}
SpotLightArtistComponent.ɵfac = function SpotLightArtistComponent_Factory(t) { return new (t || SpotLightArtistComponent)(); };
SpotLightArtistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpotLightArtistComponent, selectors: [["lfg-spot-light-artist"]], decls: 3, vars: 1, consts: [[1, "container"], [1, "row", "row-cols-1", "row-cols-lg-2", "g-4", "mt-3"], [4, "ngFor", "ngForOf"], [1, "mt-3", "sla"], [1, "card-header", "text-center"], [1, "round-image", 3, "src", "alt"], [1, "card-body"], [1, "card-text"], [1, "text-center"], ["width", "400px", 1, "banner", 3, "src", "alt", "click"]], template: function SpotLightArtistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpotLightArtistComponent_ng_container_2_Template, 12, 8, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slaData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".round-image[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 60px;\n  border-radius: 40px;\n}\n\n.sla[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: inline !important;\n  padding: 20px;\n}\n\n.sla[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 5px;\n  transition: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvc3BvdC1saWdodC1hcnRpc3Qvc3BvdC1saWdodC1hcnRpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBSVE7RUFDSSwwQkFBQTtFQUNBLGFBQUE7QUFEWjs7QUFJSTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7QUFGUiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Nwb3QtbGlnaHQtYXJ0aXN0L3Nwb3QtbGlnaHQtYXJ0aXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdW5kLWltYWdlIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxufVxyXG5cclxuLnNsYSB7XHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgICYgaDQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpotLightArtistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lfg-spot-light-artist',
                templateUrl: './spot-light-artist.component.html',
                styleUrls: ['./spot-light-artist.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Wm2z":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ "mFYO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _spot_light_artist_spot_light_artist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spot-light-artist/spot-light-artist.component */ "+SI9");
/* harmony import */ var _fundraiser_project_fundraiser_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fundraiser-project/fundraiser-project.component */ "kUsE");








const Route = [
    {
        path: '',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]
    },
    {
        path: 'sla',
        component: _spot_light_artist_spot_light_artist_component__WEBPACK_IMPORTED_MODULE_4__["SpotLightArtistComponent"]
    },
    {
        path: 'fundraiser',
        component: _fundraiser_project_fundraiser_project_component__WEBPACK_IMPORTED_MODULE_5__["FundraiserProjectComponent"]
    }
];
class ProjectsModule {
}
ProjectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectsModule });
ProjectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjectsModule_Factory(t) { return new (t || ProjectsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Route)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsModule, { declarations: [_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"], _spot_light_artist_spot_light_artist_component__WEBPACK_IMPORTED_MODULE_4__["SpotLightArtistComponent"], _fundraiser_project_fundraiser_project_component__WEBPACK_IMPORTED_MODULE_5__["FundraiserProjectComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"], _spot_light_artist_spot_light_artist_component__WEBPACK_IMPORTED_MODULE_4__["SpotLightArtistComponent"], _fundraiser_project_fundraiser_project_component__WEBPACK_IMPORTED_MODULE_5__["FundraiserProjectComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Route)
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ivlT":
/*!**********************************!*\
  !*** ./src/assets/data/sla.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"artistName\":\"Abhishapes\",\"artistPfp\":\"assets/PFP/abhishapes.png\",\"artistWork\":\"assets/artistworks/abhishapes.png\",\"collectionBanner\":\"assets/sla-banners/abhishapes.png\",\"collectionLink\":\"https://nft.wazirx.org/collection/Logical-Friends-X-Abhishapes\",\"description\":\"LOGIC MUSHROOMS - Inspired by the whole concept of magic Mushrooms. I welcome you to the mystical forests of Logic Mushrooms, where Mushrooms have logically evolved over 3000 years. A secret that was kept hidden by some of the smartest and most logical minds in history. Come experience some magic... Uhhh Uhhh... Logic!!\"},{\"artistName\":\"Frescoarts\",\"artistPfp\":\"assets/PFP/fresco.png\",\"artistWork\":\"assets/artistworks/fresco.png\",\"collectionBanner\":\"assets/sla-banners/fresco.png\",\"collectionLink\":\"https://nft.wazirx.org/collection/Logical-Friends-X-FRESCO\",\"description\":\"Strong women are not simply born. They are forged through the challenges of life. With each challenge, they grow mentally & emotionally. They move forward with their head held high & a strength that can not be denied. A woman who has been through the storm and survived.\"},{\"artistName\":\"S M Naveen Raj\",\"artistPfp\":\"assets/PFP/smnaveen.png\",\"artistWork\":\"assets/artistworks/smnaveen.png\",\"collectionBanner\":\"assets/sla-banners/smnaveen.png\",\"collectionLink\":\"https://nft.wazirx.org/collection/Logical-Friends-X-S-M-Naveen-Raj\",\"description\":\"META GALA- Everyone is invited to the embodiment of the internet, where instead of viewing content, YOU ARE IN IT !!!\"},{\"artistName\":\"7 Wichitra\",\"artistPfp\":\"assets/PFP/wichitra.png\",\"artistWork\":\"assets/artistworks/wichitra.png\",\"collectionBanner\":\"assets/sla-banners/wichitra.png\",\"collectionLink\":\"https://nft.wazirx.org/collection/Logical-Friends-X-7wichitra\",\"description\":\"Hand gestures can help you describe what you’re talking about, both literally and metaphorically. Hand gestures can help you point to people and things in your surroundings. Hand gestures can help you add emphasis and structure when you talk. Hand gestures give clues about your emotional state. These gestures are not always connected to what you’re saying. This is a collection of such hand gestures (EMOTIcON), we leave it to the interpretation of the viewer.\"},{\"artistName\":\"Digi kar art\",\"artistPfp\":\"assets/PFP/digikarart.png\",\"artistWork\":\"assets/artistworks/digikarart.png\",\"collectionBanner\":\"assets/sla-banners/digikarart.png\",\"collectionLink\":\"https://nft.wazirx.org/collection/Logical-Friends-X-Digi-kar-art\",\"description\":\"ETHNIC HUES OF WOMEN - India is diverse and is home to several communities, each having its own culture and tradition. ‘Ethnic hues’ is a vibrant collection of artworks, representing the vast cultural diversity of India.\"},{\"artistName\":\"Deepakshi\",\"artistPfp\":\"assets/PFP/deepakshi.png\",\"artistWork\":\"assets/artistworks/deepakshi.png\",\"collectionBanner\":\"assets/sla-banners/deepakshi.png\",\"collectionLink\":\"https://nft.wazirx.org/collection/Logical-Friends-X-Deepakshi\",\"description\":\"Given the lack of proper medical resources, for veterinary care, most exotic animals such as rabbits & birds do not get the required care. Leading to a lot of pain and unfortunate consequences for these innocent souls. During such times, NomNom India - a selfless organization that has stepped up to help - has been helping the families of such lovely animals have been. NomNom India is an NGO aiming to provide better care and nourishment for exotic pets throughout the nation. It's filled with generous volunteers who are working day & night to save lives. In efforts to make sure that these rare mystical beings, who bring joy into our lives, get all the necessary care they require. By owing a ‘NomNom’, you’re donating to NomnomIndia, which will try to ensure that these innocent lives get to enjoy a better life with hope, while also helping fellow struggling artists.\"},{\"artistName\":\"Mystic Mini\",\"artistPfp\":\"assets/PFP/mysticmini.png\",\"artistWork\":\"assets/artistworks/mysticmini.png\",\"collectionBanner\":\"assets/sla-banners/mysticmini.png\",\"collectionLink\":\"https://nft.wazirx.org/collection/Logical-Friends-X-MysticMini\",\"description\":\"Indian women in today's day and age are far more aware, decisive, bold, and opinionated than they used to be earlier. There is an increased awareness about the need for women's empowerment, and so many artists, writers, and public figures are advocating for the equality of women. However, I do feel that unless the term 'feminism' is explained and understood for what it is by the masses, this change will remain in the minority. I feel that art can make a difference, and it can bring about change. I love how art can transport you to another place, make you feel, sense, and react. It is both static and fluid, it's absolutely beautiful. I feel so grateful for what I do because it gives me the power to change people's perspectives, tell stories, and express myself. I realized, although dynamic and capable, that women were always shown to be dependent on the men in their lives. Being an Indian woman myself, there was a pressing need for an accurate representation of the characters as aware, vocal, and opinionated.\"},{\"artistName\":\"Arijit Mondal\",\"artistPfp\":\"assets/PFP/arijit.png\",\"artistWork\":\"assets/artistworks/arijit.png\",\"collectionBanner\":\"assets/sla-banners/arijit.png\",\"collectionLink\":\"https://nft.wazirx.org/collection/Logical-Friends-X-Arijit-Mondal\",\"description\":\"An Exotic collection of Birds & Insects less seen by the naked eye but captured through a lens.\"},{\"artistName\":\"Tejasvita Negi\",\"artistPfp\":\"assets/PFP/tejasvita.png\",\"artistWork\":\"assets/artistworks/tejasvita.png\",\"collectionBanner\":\"assets/sla-banners/tejasvita.png\",\"collectionLink\":\"https://nft.wazirx.org/collection/Logical-Friends-X-Tejasvita-Negi\",\"description\":\"Deviyan is a collection of Goddesses representing various forms of nature and colours. Their vibrance can be experienced as pfps, prints, and wallpapers on your digital device for personal use. May you be blessed with the spiritual energy each emanates.\"},{\"artistName\":\"Blingo\",\"artistPfp\":\"assets/PFP/blingo.png\",\"artistWork\":\"assets/artistworks/blingo.png\",\"collectionBanner\":\"assets/sla-banners/blingo.png\",\"collectionLink\":\"https://nft.wazirx.org/collection/Logical-Friends-X--BLINGO\",\"description\":\"Reality is defined by what you believe\"},{\"artistName\":\"Mehh Studio\",\"artistPfp\":\"assets/PFP/mehhstudio.png\",\"artistWork\":\"assets/artistworks/mehhstudio.png\",\"collectionBanner\":\"assets/sla-banners/mehhstudio.png\",\"collectionLink\":\"https://nft.wazirx.org/collection/Logical-Friends-X--theMehh_studio\",\"description\":\"A TRIBE with a vibe. Just because humans are highly evolved we ignore other living species around us. This series tries to showcase the powerful, bold animals in a totally different vibe. If they stood with us, dressed and talked like us, WE HAD NO CHANCE. Mehh gang is not just a project it's a vibe that will take over.\"},{\"artistName\":\"Nishant Singh\",\"artistPfp\":\"assets/PFP/noobmaster.png\",\"artistWork\":\"assets/artistworks/noobmaster.png\",\"collectionBanner\":\"assets/sla-banners/noobmaster.png\",\"collectionLink\":\"https://nft.wazirx.org/collection/Logical-Friends-X--Nishant-Singh\",\"description\":\"The Duality of Reality\"},{\"artistName\":\"Shaizy Umar\",\"artistPfp\":\"assets/PFP/shaizy.png\",\"artistWork\":\"assets/artistworks/shaizy.png\",\"collectionBanner\":\"assets/sla-banners/shaizy.png\",\"collectionLink\":\"https://nft.wazirx.org/collection/Logical-Friends-X--Shaizy-Umar\",\"description\":\"WOMANIYA - We are women and we have many roles and many phases in our life. Our lives are a series of roles that we perform and we know what struggles we go through every day. We are determined to carry these roles perfectly because we believe that’s what an ideal woman should do. These images might seem like just professions, but there is a lot behind achieving for women.\"},{\"artistName\":\"Veepul Rege\",\"artistPfp\":\"assets/PFP/veepulrege.png\",\"artistWork\":\"assets/artistworks/veepulrege.png\",\"collectionBanner\":\"assets/sla-banners/veepulrege.png\",\"collectionLink\":\"https://nft.wazirx.org/collection/Logical-Friends-X-Veepul-Rege\",\"description\":\"A collection featuring 3 different series of photography NFTs consisting of 'Travel Series' - Photographs taken during travel at various destinations around India. 'Goa & its coast'- Photographs showing various moods of the Goan coastline. 'Winged Rover'- Bird photographs\"}]");

/***/ }),

/***/ "kUsE":
/*!*****************************************************************************!*\
  !*** ./src/app/projects/fundraiser-project/fundraiser-project.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FundraiserProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundraiserProjectComponent", function() { return FundraiserProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FundraiserProjectComponent {
    constructor() { }
    ngOnInit() {
    }
}
FundraiserProjectComponent.ɵfac = function FundraiserProjectComponent_Factory(t) { return new (t || FundraiserProjectComponent)(); };
FundraiserProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FundraiserProjectComponent, selectors: [["lfg-fundraiser-project"]], decls: 101, vars: 0, consts: [[1, "container"], [1, "row", "mt-3"], [1, "row"], [1, "col-md-4"], ["src", "assets/PFP/arijit.png", "alt", "", "width", "150px"], [1, "centre"], [1, "col-md-12"], [1, "main-timeline"], [1, "timeline"], [1, "timeline-content"], [1, "title"]], template: function FundraiserProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Being Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Basic Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Price:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "26$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Total Supply:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "250");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Collection Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "NANO NFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Platform:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "WazirX NFT Marketplace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Rarity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Common - 125 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Uncommon - 75 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Rare - 30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Super rare - 20 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Roadmap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "25% Milestone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " 25 Merchandise Giveaway ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Community Wallet - $1000 in BNB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "50% Milestone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " 25 Merchandise Giveaway ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Create $LOGIC Token ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " NOTHING EAR - Bluetooth Headset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "75% Milestone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " 25 Merchandise Giveaway ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Community Wallet - $1000 in ETH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " NOTHING EAR - Bluetooth Headset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "100% Milestone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " 25 Merchandise Giveaway ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Add and Lock liquidity to $LOGIC token ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " NOTHING EAR - Bluetooth Headset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Amazon / Flipkart Voucher (3 Giveaway per month for one year) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " 10 NFT Giveaway to LOGICAL FRIENDS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " 25 Merchandise Giveaway to LOGICAL FRIENDS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Terms and Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-timeline[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  padding: 25px 10px;\n}\n.main-timeline[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n  width: calc(50% + 9px);\n  padding: 20px 30px 20px 0;\n  margin: -20px 0 0 0;\n  border-radius: 20px;\n  border: 10px solid transparent;\n  border-right: 10px solid #fff;\n  float: left;\n  position: relative;\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:before, .main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:after {\n  content: \"\";\n  background-color: #DA2677;\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  position: absolute;\n  right: -18px;\n  bottom: 40px;\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:after {\n  border-radius: 3px;\n  transform: rotate(45deg);\n  right: 20px;\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  color: #fff;\n  background: linear-gradient(#D02578, #DA2677);\n  min-height: 130px;\n  padding: 0 0 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  border-radius: 20px;\n  display: block;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 40px;\n  position: absolute;\n  bottom: 15px;\n  right: 16px;\n}\n.main-timeline[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #DA2677;\n  background-color: #fff;\n  font-size: 21px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  text-align: center;\n  text-transform: uppercase;\n  padding: 12px;\n  margin: 0 0 5px;\n}\n.main-timeline[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: 1px;\n  line-height: 20px;\n  margin: 20px 80px 0 20px;\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(even) {\n  float: right;\n  padding: 20px 0 20px 30px;\n  margin: -20px 0 0 0;\n  border-right: none;\n  border-left: 10px solid #fff;\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(even):before {\n  right: auto;\n  left: -18px;\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(even):after {\n  right: auto;\n  left: 20px;\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(even)   .timeline-icon[_ngcontent-%COMP%] {\n  right: auto;\n  left: 16px;\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(even)   .description[_ngcontent-%COMP%] {\n  margin: 20px 20px 0 80px;\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+2):before, .main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+2):after {\n  background-color: #4EB543;\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+2)   .timeline-content[_ngcontent-%COMP%] {\n  background: linear-gradient(#80B02C, #4EB543);\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+2)   .title[_ngcontent-%COMP%] {\n  color: #4EB543;\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+3):before, .main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+3):after {\n  background-color: #3A3270;\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+3)   .timeline-content[_ngcontent-%COMP%] {\n  background: linear-gradient(#65286D, #3A3270);\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+3)   .title[_ngcontent-%COMP%] {\n  color: #3A3270;\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+4):before, .main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+4):after {\n  background-color: #0A2C80;\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+4)   .timeline-content[_ngcontent-%COMP%] {\n  background: linear-gradient(#2FD8D8, #0A2C80);\n}\n.main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+4)   .title[_ngcontent-%COMP%] {\n  color: #0A2C80;\n}\n@media screen and (max-width: 767px) {\n  .main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%], .main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(even) {\n    width: 100%;\n    padding: 20px 0 20px 30px;\n    margin: -25px 0 0;\n    border-left: 10px solid #fff;\n    border-right: none;\n  }\n\n  .main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:before, .main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(even):before {\n    right: auto;\n    left: -17px;\n  }\n\n  .main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:after, .main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(even):after {\n    right: auto;\n    left: 20px;\n  }\n\n  .main-timeline[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], .main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(even)   .description[_ngcontent-%COMP%] {\n    margin: 20px 20px 0 80px;\n  }\n\n  .main-timeline[_ngcontent-%COMP%]   .timeline-icon[_ngcontent-%COMP%], .main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(even)   .timeline-icon[_ngcontent-%COMP%] {\n    left: 16px;\n    right: auto;\n  }\n}\n@media screen and (max-width: 576px) {\n  .main-timeline[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n    padding-bottom: 70px;\n  }\n\n  .main-timeline[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], .main-timeline[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(even)   .description[_ngcontent-%COMP%] {\n    margin: 20px 20px 0 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvZnVuZHJhaXNlci1wcm9qZWN0L2Z1bmRyYWlzZXItcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SEEseUZBQUE7QUFpSUEsbUZBQUE7QUFFQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7QUE5UEo7QUFnUUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUE3UEo7QUErUEE7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUE1UEo7QUE4UEE7O0VBRUksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUEzUEo7QUE2UEE7RUFDSSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtBQTFQSjtBQTRQQTtFQUNJLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBelBKO0FBMlBBO0VBQXdDLHFCQUFBO0FBdlB4QztBQXdQQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFyUEo7QUF1UEE7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQXBQSjtBQXNQQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQW5QSjtBQXFQQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQWxQSjtBQW9QQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBalBKO0FBbVBBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUFoUEo7QUFrUEE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQS9PSjtBQWlQQTtFQUF1RCx3QkFBQTtBQTdPdkQ7QUE4T0E7O0VBRUkseUJBQUE7QUEzT0o7QUE2T0E7RUFBNEQsNkNBQUE7QUF6TzVEO0FBME9BO0VBQWlELGNBQUE7QUF0T2pEO0FBdU9BOztFQUVJLHlCQUFBO0FBcE9KO0FBc09BO0VBQTRELDZDQUFBO0FBbE81RDtBQW1PQTtFQUFpRCxjQUFBO0FBL05qRDtBQWdPQTs7RUFFSSx5QkFBQTtBQTdOSjtBQStOQTtFQUE0RCw2Q0FBQTtBQTNONUQ7QUE0TkE7RUFBaUQsY0FBQTtBQXhOakQ7QUF5TkE7RUFDSTs7SUFFSSxXQUFBO0lBQ0EseUJBQUE7SUFDQSxpQkFBQTtJQUNBLDRCQUFBO0lBQ0Esa0JBQUE7RUF0Tk47O0VBd05FOztJQUVJLFdBQUE7SUFDQSxXQUFBO0VBck5OOztFQXVORTs7SUFFSSxXQUFBO0lBQ0EsVUFBQTtFQXBOTjs7RUFzTkU7O0lBRUksd0JBQUE7RUFuTk47O0VBcU5FOztJQUVJLFVBQUE7SUFDQSxXQUFBO0VBbE5OO0FBQ0Y7QUFvTkE7RUFDSTtJQUFrQyxvQkFBQTtFQWpOcEM7O0VBa05FOztJQUVJLHdCQUFBO0VBL01OO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9mdW5kcmFpc2VyLXByb2plY3QvZnVuZHJhaXNlci1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLm1haW4tdGltZWxpbmV7XHJcbi8vICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyB9XHJcbi8vIC5tYWluLXRpbWVsaW5lOmFmdGVye1xyXG4vLyAgICAgY29udGVudDogJyc7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIGNsZWFyOiBib3RoO1xyXG4vLyB9XHJcbi8vIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZXtcclxuLy8gICAgIHdpZHRoOiA1MCU7XHJcbi8vICAgICBtYXJnaW46IDAgMCAyMHB4IDIwcHg7XHJcbi8vICAgICBmbG9hdDogcmlnaHQ7XHJcbi8vIH1cclxuLy8gLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lLWNvbnRlbnR7XHJcbi8vICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4vLyAgICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCNlYjI3M2UsI2JmMGYyMyk7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAxMDBweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAyMHB4IDA7XHJcbi8vICAgICBib3gtc2hhZG93OiAwIDVweCA1cHggcmdiYSgwLDAsMCwwLjMpO1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vIH1cclxuLy8gLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lLWNvbnRlbnQ6aG92ZXJ7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmUteWVhcntcclxuLy8gICAgIGNvbG9yOiAjZWIyNzNlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuLy8gICAgIGZvbnQtc2l6ZTogMzVweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMTMwcHg7XHJcbi8vICAgICB3aWR0aDogMTMwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA5OHB4IDAgMCAxMHB4O1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCA1cHggNXB4IHJnYmEoMCwwLDAsMC4zKTtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIGxlZnQ6IC0xMzBweDtcclxuLy8gICAgIHRvcDogMDtcclxuLy8gfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmUtaWNvbntcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgbGVmdDogMzBweDtcclxuLy8gICAgIHRvcDogNTAlO1xyXG4vLyB9XHJcbi8vIC5tYWluLXRpbWVsaW5lIC50aXRsZXtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuLy8gICAgIG1hcmdpbjogMCAwIDVweDtcclxuLy8gfVxyXG4vLyAubWFpbi10aW1lbGluZSAuZGVzY3JpcHRpb257XHJcbi8vICAgICBmb250LXNpemU6IDEzcHg7XHJcbi8vICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyB9XHJcbi8vIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoZXZlbil7XHJcbi8vICAgICBmbG9hdDogbGVmdDtcclxuLy8gICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcclxuLy8gfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1jb250ZW50e1xyXG4vLyAgICAgcGFkZGluZzogMjBweCAxMDBweCAyMHB4IDIwcHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDAgMCAyMHB4O1xyXG4vLyB9XHJcbi8vIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoZXZlbikgLnRpbWVsaW5lLWNvbnRlbnQ6YmVmb3Jle1xyXG4vLyAgICAgcmlnaHQ6YXV0bztcclxuLy8gICAgIGxlZnQ6MDtcclxuLy8gICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMTAwJSwgNjUlIDApO1xyXG4vLyB9XHJcbi8vIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoZXZlbikgLnRpbWVsaW5lLXllYXJ7XHJcbi8vICAgICBsZWZ0OiBhdXRvO1xyXG4vLyAgICAgcmlnaHQ6IC0xMzBweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6MCA5OHB4IDEwcHggMDtcclxuLy8gfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1pY29ue1xyXG4vLyAgICAgcmlnaHQ6IDMwcHg7XHJcbi8vICAgICBsZWZ0OiBhdXRvO1xyXG4vLyB9XHJcbi8vIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoNG4rMikgLnRpbWVsaW5lLWNvbnRlbnR7XHJcbi8vICAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2RiM2QwOCwjZWU1YTI0KTtcclxuLy8gfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDRuKzIpIC50aW1lbGluZS15ZWFyeyBjb2xvcjogI2VlNWEyNDsgfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDRuKzMpIC50aW1lbGluZS1jb250ZW50e1xyXG4vLyAgICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCMwMDk0MzIsIzAzNzUyOSk7XHJcbi8vIH1cclxuLy8gLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOm50aC1jaGlsZCg0biszKSAudGltZWxpbmUteWVhcnsgY29sb3I6ICMwMDk0MzI7IH1cclxuLy8gLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOm50aC1jaGlsZCg0bis0KSAudGltZWxpbmUtY29udGVudHtcclxuLy8gICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjMGU2ZGNjLCMyZTg2ZGUpO1xyXG4vLyB9XHJcbi8vIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoNG4rNCkgLnRpbWVsaW5lLXllYXJ7IGNvbG9yOiAjMmU4NmRlOyB9XHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4vLyAgICAgLm1haW4tdGltZWxpbmUgLnRpbWVsaW5le1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDUwcHggMCAwIDA7XHJcbi8vICAgICB9XHJcbi8vICAgICAubWFpbi10aW1lbGluZSAudGltZWxpbmUgLnRpbWVsaW5lLWNvbnRlbnQsXHJcbi8vICAgICAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1jb250ZW50e1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDIwcHggMTVweCAyMHB4IDYwcHg7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDIwcHggMjBweDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZSAudGltZWxpbmUteWVhcixcclxuLy8gICAgIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoZXZlbikgLnRpbWVsaW5lLXllYXJ7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XHJcbi8vICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuLy8gICAgICAgICB3aWR0aDogMTAwcHg7XHJcbi8vICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4vLyAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4vLyAgICAgICAgIHRvcDogLTUwcHg7XHJcbi8vICAgICAgICAgbGVmdDogMDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZSAudGltZWxpbmUtaWNvbixcclxuLy8gICAgIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoZXZlbikgLnRpbWVsaW5lLWljb257XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4vLyAgICAgICAgIGxlZnQ6IDE1cHg7XHJcbi8vICAgICAgICAgcmlnaHQ6IGF1dG87XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCl7XHJcbi8vICAgICAubWFpbi10aW1lbGluZSAudGl0bGV7IGZvbnQtc2l6ZTogMThweDsgfVxyXG4vLyB9XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG4vLyAubWFpbi10aW1lbGluZXsgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjsgfVxyXG4vLyAubWFpbi10aW1lbGluZTphZnRlcntcclxuLy8gICAgIGNvbnRlbnQ6ICcnO1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICBjbGVhcjogYm90aDtcclxuLy8gfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmV7XHJcbi8vICAgICB3aWR0aDogY2FsYyg1MCUgKyAyMDBweCk7XHJcbi8vICAgICBtYXJnaW46IDAgMCAyNXB4IDVweDtcclxuLy8gICAgIGZsb2F0OiByaWdodDtcclxuLy8gfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmUtY29udGVudHtcclxuLy8gICAgIGNvbG9yOiAjNTU1O1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuLy8gICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDI5MHB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vIH1cclxuLy8gLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lLWNvbnRlbnQ6aG92ZXJ7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmUtY29udGVudDpiZWZvcmV7XHJcbi8vICAgICBjb250ZW50OiAnJztcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEE3RkI7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICB3aWR0aDogMTIwcHg7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBsZWZ0OiAxNDBweDtcclxuLy8gICAgIHRvcDogMDtcclxuLy8gfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmUteWVhcntcclxuLy8gICAgIGNvbG9yOiAjMDBBN0ZCO1xyXG4vLyAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgbGVmdDogMjJweDtcclxuLy8gICAgIHRvcDogNTAlO1xyXG4vLyB9XHJcbi8vIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZS1pY29ue1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICBmb250LXNpemU6IDUwcHg7XHJcbi8vICAgICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbi8vICAgICB3aWR0aDogMTIwcHg7XHJcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBsZWZ0OiAxNDBweDtcclxuLy8gICAgIHRvcDogNTAlO1xyXG4vLyB9XHJcbi8vIC5tYWluLXRpbWVsaW5lIC50aXRsZXtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjNweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuLy8gICAgIG1hcmdpbjogMCAwIDdweDtcclxuLy8gfVxyXG4vLyAubWFpbi10aW1lbGluZSAuZGVzY3JpcHRpb257XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuLy8gICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKGV2ZW4pe1xyXG4vLyAgICAgbWFyZ2luOiAwIDVweCAyNXB4IDA7XHJcbi8vICAgICBmbG9hdDogbGVmdDtcclxuLy8gfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1jb250ZW50eyBwYWRkaW5nOiAxNXB4IDI4MHB4IDE1cHggMjBweDsgfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1jb250ZW50OmJlZm9yZXtcclxuLy8gICAgIGxlZnQ6IGF1dG87XHJcbi8vICAgICByaWdodDogMTM5cHg7XHJcbi8vIH1cclxuLy8gLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUteWVhcntcclxuLy8gICAgIGxlZnQ6IGF1dG87XHJcbi8vICAgICByaWdodDogMTlweDtcclxuLy8gfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1pY29ue1xyXG4vLyAgICAgbGVmdDogYXV0bztcclxuLy8gICAgIHJpZ2h0OiAxMzlweDtcclxuLy8gfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDRuKzIpIC50aW1lbGluZS1jb250ZW50OmJlZm9yZXsgYmFja2dyb3VuZC1jb2xvcjogI0ZGM0U3RDsgfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDRuKzIpIC50aW1lbGluZS15ZWFyeyBjb2xvcjogI0ZGM0U3RDsgfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDRuKzMpIC50aW1lbGluZS1jb250ZW50OmJlZm9yZXsgYmFja2dyb3VuZC1jb2xvcjogIzczMzhCQTsgfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDRuKzMpIC50aW1lbGluZS15ZWFyeyBjb2xvcjogIzczMzhCQTsgfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDRuKzQpIC50aW1lbGluZS1jb250ZW50OmJlZm9yZXsgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTgwMDsgfVxyXG4vLyAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDRuKzQpIC50aW1lbGluZS15ZWFyeyBjb2xvcjogI0ZGOTgwMDsgfVxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuLy8gICAgIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZSxcclxuLy8gICAgIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoZXZlbil7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgbWFyZ2luOiAwIDAgMzBweDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZS1jb250ZW50LFxyXG4vLyAgICAgLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUtY29udGVudHtcclxuLy8gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICAgICAgcGFkZGluZzogMjAwcHggMTVweCAxNXB4IDE1cHg7XHJcbi8vICAgICB9XHJcbi8vICAgICAubWFpbi10aW1lbGluZSAudGltZWxpbmUtY29udGVudDpiZWZvcmUsXHJcbi8vICAgICAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1jb250ZW50OmJlZm9yZXtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDApO1xyXG4vLyAgICAgICAgIGxlZnQ6IDUwJTtcclxuLy8gICAgICAgICByaWdodDogYXV0bztcclxuLy8gICAgICAgICB0b3A6IDgwcHg7XHJcbi8vICAgICB9XHJcbi8vICAgICAubWFpbi10aW1lbGluZSAudGltZWxpbmUteWVhcixcclxuLy8gICAgIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoZXZlbikgLnRpbWVsaW5lLXllYXJ7XHJcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoLTUwJSk7XHJcbi8vICAgICAgICAgbGVmdDogNTAlO1xyXG4vLyAgICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4vLyAgICAgICAgIHRvcDogMjBweDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZS1pY29uLFxyXG4vLyAgICAgLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUtaWNvbntcclxuLy8gICAgICAgICB3aWR0aDogYXV0bztcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgtNTAlKTtcclxuLy8gICAgICAgICBsZWZ0OiA1MCU7XHJcbi8vICAgICAgICAgcmlnaHQ6IGF1dG87XHJcbi8vICAgICAgICAgdG9wOiAxMDVweDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5tYWluLXRpbWVsaW5le1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDI1cHggMTBweDtcclxufVxyXG4ubWFpbi10aW1lbGluZTphZnRlcntcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG4ubWFpbi10aW1lbGluZSAudGltZWxpbmV7XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgKyA5cHgpO1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4IDIwcHggMDtcclxuICAgIG1hcmdpbjogLTIwcHggMCAwIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICNmZmY7XHJcbiAgICBmbG9hdDogbGVmdDsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOmJlZm9yZSxcclxuLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOmFmdGVye1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREEyNjc3O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTE4cHg7XHJcbiAgICBib3R0b206IDQwcHg7XHJcbn1cclxuLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOmFmdGVye1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbn1cclxuLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lLWNvbnRlbnR7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRDAyNTc4LCNEQTI2NzcpO1xyXG4gICAgbWluLWhlaWdodDogMTMwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDAgMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbi5tYWluLXRpbWVsaW5lIC50aW1lbGluZS1jb250ZW50OmhvdmVyeyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cclxuLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lLWljb257XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG59XHJcbi5tYWluLXRpbWVsaW5lIC50aXRsZXtcclxuICAgIGNvbG9yOiAjREEyNjc3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIG1hcmdpbjogMCAwIDVweDtcclxufVxyXG4ubWFpbi10aW1lbGluZSAuZGVzY3JpcHRpb257XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDgwcHggMCAyMHB4O1xyXG59XHJcbi5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoZXZlbil7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAzMHB4O1xyXG4gICAgbWFyZ2luOiAtMjBweCAwIDAgMDtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNmZmY7XHJcbn1cclxuLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOm50aC1jaGlsZChldmVuKTpiZWZvcmV7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIGxlZnQ6IC0xOHB4O1xyXG59XHJcbi5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoZXZlbik6YWZ0ZXJ7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIGxlZnQ6IDIwcHg7XHJcbn1cclxuLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUtaWNvbntcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgbGVmdDogMTZweDtcclxufVxyXG4ubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKGV2ZW4pIC5kZXNjcmlwdGlvbnsgbWFyZ2luOiAyMHB4IDIwcHggMCA4MHB4OyB9XHJcbi5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoNG4rMik6YmVmb3JlLFxyXG4ubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDRuKzIpOmFmdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRFQjU0MztcclxufVxyXG4ubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDRuKzIpIC50aW1lbGluZS1jb250ZW50eyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzgwQjAyQywjNEVCNTQzKTsgfVxyXG4ubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDRuKzIpIC50aXRsZXsgY29sb3I6ICM0RUI1NDM7IH1cclxuLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOm50aC1jaGlsZCg0biszKTpiZWZvcmUsXHJcbi5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoNG4rMyk6YWZ0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzMjcwO1xyXG59XHJcbi5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoNG4rMykgLnRpbWVsaW5lLWNvbnRlbnR7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNjUyODZELCMzQTMyNzApOyB9XHJcbi5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoNG4rMykgLnRpdGxleyBjb2xvcjogIzNBMzI3MDsgfVxyXG4ubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDRuKzQpOmJlZm9yZSxcclxuLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOm50aC1jaGlsZCg0bis0KTphZnRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQTJDODA7XHJcbn1cclxuLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOm50aC1jaGlsZCg0bis0KSAudGltZWxpbmUtY29udGVudHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyRkQ4RDgsIzBBMkM4MCk7IH1cclxuLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOm50aC1jaGlsZCg0bis0KSAudGl0bGV7IGNvbG9yOiAjMEEyQzgwOyB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lLFxyXG4gICAgLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOm50aC1jaGlsZChldmVuKXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAzMHB4O1xyXG4gICAgICAgIG1hcmdpbjogLTI1cHggMCAwO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOmJlZm9yZSxcclxuICAgIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoZXZlbik6YmVmb3Jle1xyXG4gICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGxlZnQ6IC0xN3B4O1xyXG4gICAgfVxyXG4gICAgLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOmFmdGVyLFxyXG4gICAgLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOm50aC1jaGlsZChldmVuKTphZnRlcntcclxuICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLm1haW4tdGltZWxpbmUgLmRlc2NyaXB0aW9uLFxyXG4gICAgLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOm50aC1jaGlsZChldmVuKSAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDIwcHggMCA4MHB4O1xyXG4gICAgfVxyXG4gICAgLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lLWljb24sXHJcbiAgICAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1pY29ue1xyXG4gICAgICAgIGxlZnQ6IDE2cHg7XHJcbiAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCl7XHJcbiAgICAubWFpbi10aW1lbGluZSAudGltZWxpbmUtY29udGVudHsgcGFkZGluZy1ib3R0b206IDcwcHg7IH1cclxuICAgIC5tYWluLXRpbWVsaW5lIC5kZXNjcmlwdGlvbixcclxuICAgIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoZXZlbikgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAyMHB4IDAgMjBweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FundraiserProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lfg-fundraiser-project',
                templateUrl: './fundraiser-project.component.html',
                styleUrls: ['./fundraiser-project.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mFYO":
/*!*********************************************************!*\
  !*** ./src/app/projects/projects/projects.component.ts ***!
  \*********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["lfg-projects"]], decls: 10, vars: 0, consts: [[1, "container"], [1, "row", "text-center", "px-2", "mt-3"], ["src", "assets/sla_banner.jpg", "alt", "Spotlight Artists", "routerLink", "sla", 1, "banner", "p-0"], ["src", "assets/fundraiser_banner.jpg", "alt", "Fundraiser", "routerLink", "fundraiser", 1, "banner", "p-0"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Spotlight Artists ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Fundraiser ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lfg-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=projects-projects-module.js.map