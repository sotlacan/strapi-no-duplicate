"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ROUTES_EE = [
  ...window.strapi.features.isEnabled(window.strapi.features.AUDIT_LOGS) ? [
    {
      async Component() {
        const { ProtectedListPage } = await Promise.resolve().then(() => require("./ListPage-npeBrKhw.js"));
        return ProtectedListPage;
      },
      to: "/settings/audit-logs",
      exact: true
    }
  ] : [],
  ...window.strapi.features.isEnabled(window.strapi.features.REVIEW_WORKFLOWS) ? [
    {
      async Component() {
        const { ProtectedReviewWorkflowsPage } = await Promise.resolve().then(() => require("./ListPage-jCPQA3FI.js"));
        return ProtectedReviewWorkflowsPage;
      },
      to: "/settings/review-workflows",
      exact: true
    },
    {
      async Component() {
        const { ReviewWorkflowsCreatePage } = await Promise.resolve().then(() => require("./CreatePage-furJ7Tp2.js"));
        return ReviewWorkflowsCreatePage;
      },
      to: "/settings/review-workflows/create",
      exact: true
    },
    {
      async Component() {
        const { ReviewWorkflowsEditPage } = await Promise.resolve().then(() => require("./EditPage-iZ_laz1A.js"));
        return ReviewWorkflowsEditPage;
      },
      to: "/settings/review-workflows/:workflowId",
      exact: true
    }
  ] : [],
  ...window.strapi.features.isEnabled(window.strapi.features.SSO) ? [
    {
      async Component() {
        const { ProtectedSSO } = await Promise.resolve().then(() => require("./SingleSignOnPage-K_Gc47bv.js"));
        return ProtectedSSO;
      },
      to: "/settings/single-sign-on",
      exact: true
    }
  ] : []
];
exports.ROUTES_EE = ROUTES_EE;
//# sourceMappingURL=constants-pYT1EbRY.js.map
