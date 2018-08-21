// Compiled using marko@4.12.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/node-server-with-typescript$1.0.0/views/home.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    layout_template = marko_loadTemplate(require.resolve("./layout.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_merge = require("marko/src/runtime/helper-merge"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: layout_template,
      _arg: marko_merge({
          body: {
              renderBody: function renderBody(out) {
                out.w("<h1>Hello, Marko is working for " +
                  marko_escapeXml(data.locals.company) +
                  "!</h1>");
              }
            },
          [hasRenderBodyKey]: true
        }, data)
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/node-server-with-typescript$1.0.0/views/home.marko",
    tags: [
      "./layout.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
