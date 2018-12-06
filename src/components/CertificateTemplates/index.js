import SITCerts from "./SITCerts";
import dynamic from "next/dynamic"
const DefaultCert = dynamic(import("./Default"));
// import DefaultCert from "./Default";
// import NPAA2018MAIN from "./NgeeAnnPolytechnic/NP-AA2018-MAIN";
// import NPAA2018OPTION from "./NgeeAnnPolytechnic/NP-AA2018-OPTION";
// import NPAA2018BMSCLT from "./NgeeAnnPolytechnic/NP-AA2018-BMS(CLT)";
// import NPAA2018ECH from "./NgeeAnnPolytechnic/NP-AA2018-ECH";
// import NPAA2018LDH from "./NgeeAnnPolytechnic/NP-AA2018-LDH";
// import NPAA2018PHARM from "./NgeeAnnPolytechnic/NP-AA2018-PHARM";
const NPAA2018DPP = dynamic(import("./NgeeAnnPolytechnic/NP-AA2018-DPP"));
// import NPAA2018DPP from "./NgeeAnnPolytechnic/NP-AA2018-DPP";
import GOVTECHOPENCERTS from "./GovTech";

import InvalidCertificateNotice from './InvalidCertificateNotice'

import React from 'react';
import { all } from "any-promise";

const templates = {
  default: DefaultCert,
  // "NP-AA2018-MAIN": NPAA2018MAIN,
  // "NP-AA2018-OPTION": NPAA2018OPTION,
  // "NP-AA2018-BMS(CLT)": NPAA2018BMSCLT,
  // "NP-AA2018-ECH": NPAA2018ECH,
  // "NP-AA2018-LDH": NPAA2018LDH,
  // "NP-AA2018-PHARM": NPAA2018PHARM,
  "NP-AA2018-DPP": NPAA2018DPP,
  "SG-GOVTECH-OPENCERTS": GOVTECHOPENCERTS
  SITCerts
};

export default templates;


export class TemplateLoader extends React.Component {
  render() {
    // if address in whitelist then render valid
    const { templateName, certificate } = this.props;
    // const allowedToRender = storeCanRenderTemplate({ addresses, certificate });
    // console.log(template, certificate)
    // console.log(addressesxx)
    const TemplateName = templates[templateName] || templates.default;
    console.log(TemplateName)
    if (false) {
      return <InvalidCertificateNotice />;
    }
    return <TemplateName certificate={certificate} />;
  }
}

// const storeCanRenderTemplate = ({ addresses, certificate }) => {
//   if (!addresses || addresses === []) {
//     return true;
//   }
//   const issuers = get(certificate, "issuers", []);
//   const validStoreAddressForTemplate = addresses.map(a => a.toLowerCase());
//   return issuers.reduce((prev, curr) => {
//     const storeAddress = get(curr, "certificateStore", "").toLowerCase();
//     const foundInWhitelist = validStoreAddressForTemplate.includes(
//       storeAddress
//     );
//     return prev && foundInWhitelist;
//   }, true);
// };