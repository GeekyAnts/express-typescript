// Compiled using marko@4.12.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/node-server-with-typescript$1.0.0/views/layout.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_page_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/config-tag")),
    marko_escapeXml = marko_helpers.x,
    lasso_head_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    lasso_body_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/body-tag")),
    browser_refresh_tag = marko_loadTag(require("browser-refresh-taglib/refresh-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  lasso_page_tag({
      dirname: __dirname,
      filename: __filename
    }, out);

  out.w("<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>" +
    marko_escapeXml(data.title) +
    " - " +
    marko_escapeXml(data.locals.name) +
    "</title>");

  lasso_head_tag({}, out, __component, "4");

  lasso_head_tag({}, out, __component, "5");

  out.w("</head><body>");

  component_globals_tag({}, out);

  include_tag({
      _target: input.body
    }, out, __component, "7");

  lasso_body_tag({}, out, __component, "8");

  browser_refresh_tag({}, out, __component, "9");

  lasso_body_tag({}, out, __component, "10");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "11");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/node-server-with-typescript$1.0.0/views/layout.marko",
    tags: [
      "@lasso/marko-taglib/taglib/config-tag",
      "@lasso/marko-taglib/taglib/head-tag",
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/taglibs/core/include-tag",
      "@lasso/marko-taglib/taglib/body-tag",
      "browser-refresh-taglib/refresh-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
